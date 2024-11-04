import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

// Users table schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  imageUrl: text("image_url"),
  subscriptionStatus: boolean("subscription_status").default(false),
  subscriptionDate: timestamp("subscription_date", {
    withTimezone: true,
  }).defaultNow(),
});

export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);

export type NewUser = z.infer<typeof insertUserSchema>;
export type SelectUser = z.infer<typeof selectUserSchema>;

// Videos table schema
export const videos = pgTable("videos", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  videoUrl: text("video_url").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const insertVideoSchema = createInsertSchema(videos);
export const selectVideoSchema = createSelectSchema(videos);

export type NewVideo = z.infer<typeof insertVideoSchema>;
export type SelectVideo = z.infer<typeof selectVideoSchema>;

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  videos: many(videos),
}));

export const videosRelations = relations(videos, ({ one }) => ({
  user: one(users, {
    fields: [videos.userId],
    references: [users.id],
  }),
}));
