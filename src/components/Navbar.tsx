'use client'

import { useRouter } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <nav className="flex w-full items-center justify-between border-b bg-slate-800 p-4 text-xl font-semibold">
        <div>Logo</div>
        <div className="flex items-center space-x-4">
          <div>Books</div>
          <div>
            <SignedIn>
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={() => {
                  router.refresh();
                }}
              />
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
