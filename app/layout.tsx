import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import  Header  from "@/components/landing-page/header";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iBuiltThis - Share Your Creations, Discover New Launches",
  description:
    "A community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects. Authentic launches, real builders, genuine feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        <Header />
        {children}
        <footer className="bg-gray-100 text-center py-4 mt-8">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} iBuiltThis. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}

