import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { UserProvider } from "@/lib/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Psyche",
  description: "Showcasing our UX design process",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <main className="container mx-auto px-4 py-8">{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}
