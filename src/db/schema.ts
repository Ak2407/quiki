import {
  boolean,
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  pgEnum,
  json,
} from "drizzle-orm/pg-core";
import type { AdapterAccountType } from "next-auth/adapters";
import { relations } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const subscriptionStatusEnum = pgEnum("subscription_status", [
  "free",
  "basic",
  "pro",
]);

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  videoCount: integer("video_count").default(0),
  subscriptionStatus: subscriptionStatusEnum("subscription_status").default(
    "free",
  ),
  subscriptionDate: timestamp("subscription_date", {
    withTimezone: true,
  }).defaultNow(),
});

export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);

export type NewUser = z.infer<typeof insertUserSchema>;
export type SelectUser = z.infer<typeof selectUserSchema>;

export const videoData = pgTable("video_data", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text("title").notNull(),
  topic: text("topic").notNull(),
  voice: text("voice").notNull(),
  language: text("language").notNull(),
  script: json("script").notNull(),
  audioUrl: text("audio_url").notNull(),
  captions: json("captions").notNull(),
  imageList: text("image_list").array().notNull(),
  userEmail: text("user_email").references(() => users.email),
});

export const videos = pgTable("videos", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id").references(() => users.id),
  title: text("title").notNull(),
  caption: text("caption").notNull(),
  script: text("script").notNull(),
  videoUrl: text("video_url").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const insertVideoSchema = createInsertSchema(videos);
export const selectVideoSchema = createSelectSchema(videos);

export const updateVideoSchema = selectVideoSchema

  .pick({
    id: true,
    title: true,
    caption: true,
    script: true,
  })
  .extend({
    title: z.string().min(1).max(100),
    caption: z.string().min(1).max(200),
    script: z.string().min(1).max(1200),
  });

export type UpdateVideoFormValues = z.infer<typeof updateVideoSchema>;

export type NewVideo = z.infer<typeof insertVideoSchema>;
export type SelectVideo = z.infer<typeof selectVideoSchema>;

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  videos: many(videos),
  videoData: many(videoData),
}));

export const videoDataRelations = relations(videoData, ({ one }) => ({
  user: one(users, {
    fields: [videoData.userEmail],
    references: [users.id],
  }),
}));

export const videosRelations = relations(videos, ({ one }) => ({
  user: one(users, {
    fields: [videos.userId],
    references: [users.id],
  }),
}));

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (verificationToken) => ({
    compositePk: primaryKey({
      columns: [verificationToken.identifier, verificationToken.token],
    }),
  }),
);

export const authenticators = pgTable(
  "authenticator",
  {
    credentialID: text("credentialID").notNull().unique(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccountId").notNull(),
    credentialPublicKey: text("credentialPublicKey").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credentialDeviceType").notNull(),
    credentialBackedUp: boolean("credentialBackedUp").notNull(),
    transports: text("transports"),
  },
  (authenticator) => ({
    compositePK: primaryKey({
      columns: [authenticator.userId, authenticator.credentialID],
    }),
  }),
);
