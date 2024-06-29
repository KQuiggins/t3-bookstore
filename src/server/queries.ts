import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getBooks() {
    // Get the user object from Clerk
    const user = auth();

    if (!user.userId) throw new Error("Unauthorized");
  // Fetch the data from the database
  const books = await db.query.books.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return books;
}
