import React from "react";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

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
        <header className="bg-gray-800 text-white">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-wrap justify-between items-center">
              <li>
                <Link href="/" className="text-xl font-bold">
                  Psyche
                </Link>
              </li>
              <li className="flex space-x-4">
                <Link href="/persona" className="hover:text-gray-300">
                  Persona
                </Link>
                <Link href="/scenario" className="hover:text-gray-300">
                  Scenario
                </Link>
                <Link href="/storyboard" className="hover:text-gray-300">
                  Storyboard
                </Link>
                <Link href="/moodboard" className="hover:text-gray-300">
                  Moodboard
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
