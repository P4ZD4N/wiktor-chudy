import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wiktor Chudy",
    description: "Hey, I'm Wiktor! Software Developer Intern and Computer Science Student at PJATK."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-200 dark:bg-neutral-900 text-neutral-900 dark:text-white antialiased`}
      >
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}
