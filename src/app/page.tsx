import BookImages from "~/components/BookImages";
import { SignedOut, SignedIn } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <>
      <h1 className="m-4 p-2 text-center text-3xl font-bold">
        Welcome to Ken&apos;s Bookstore
      </h1>
      <SignedOut>
        <div className="m-4 p-2 text-center text-xl">
          Please sign in to see the books
        </div>
      </SignedOut>
      <SignedIn>
        <BookImages />
      </SignedIn>
    </>
  );
}
