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

export async function getBook(id: number) {
  // make sure user can access this book
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  // Fetch the data from the database
  const book = await db.query.books.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!book) throw new Error("Book not found");

  if (book.userId !== user.userId) throw new Error("Unauthorized}");


  return book;
}
