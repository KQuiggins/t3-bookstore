import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { GeistSans } from "geist/font/sans";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

export const metadata = {
  title: "Ken's Bookstore",
  description: "Bookstore for tech nerds",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <body className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
            {modal}
          </main>
          <div id="modal-root" />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
