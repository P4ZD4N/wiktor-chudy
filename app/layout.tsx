import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Script from "next/script";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
  title: "Wiktor Chudy | Software Engineer Intern",
  description:
    "Hey, I'm Wiktor! Software Engineer Intern at Santander Bank Polska and Computer Science Student at PJATK who combine solid full-stack development skills with a clear focus on business impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.className}>
      <body
        className={`bg-neutral-900 text-white antialiased`}
      >
        <Navbar />
        {children}

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-LK9SSLL39N"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LK9SSLL39N', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <Script
          src="https://kit.fontawesome.com/f2b1b3d7ed.js"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
