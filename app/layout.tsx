import React from "react";
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
          {/* Removed container and added full height/width styles */}
          <main className="min-h-screen w-full">{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}
