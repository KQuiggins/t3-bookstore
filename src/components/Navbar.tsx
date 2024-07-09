'use client'

import { useRouter } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./UploadButton";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <nav className="flex w-full items-center justify-between border-b bg-slate-800 p-4 text-xl font-semibold text-white">
        <div className="flex items-center space-x-4">
          <div>Logo</div>
          <SignedIn>
            <SimpleUploadButton />
          </SignedIn>
        </div>
        <div className="flex items-center space-x-4">
          <div>Books</div>
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
