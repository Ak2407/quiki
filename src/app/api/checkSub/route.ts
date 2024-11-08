import { db } from "@/db";
import { users } from "@/db/schema";
import { eq, lte } from "drizzle-orm";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const usersToUpdate = await db
      .select()
      .from(users)
      .where(lte(users.subscriptionDate, oneMonthAgo));

    if (usersToUpdate.length > 0) {
      for (const user of usersToUpdate) {
        await db
          .update(users)
          .set({
            videoCount: 0,
            subscriptionStatus: "free",
            subscriptionDate: new Date(),
          })
          .where(eq(users.id, user.id));
      }
    }

    return NextResponse.json(
      { message: "Successfully reset video count" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error resetting video count:", error);
    return NextResponse.json(
      { error: "Failed to reset video count" },
      { status: 500 },
    );
  }
}
