"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getSub = async (userId: string | undefined) => {
  if (!userId) {
    throw new Error("User ID is required");
  }

  try {
    const user = await db.select().from(users).where(eq(users.id, userId));

    if (user.length === 0) {
      throw new Error("User not found");
    }

    return user[0];
  } catch (error) {
    console.error("Error fetching subscription status:", error);
    throw new Error("Error fetching subscription status");
  }
};
