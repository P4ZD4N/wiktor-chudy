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
  title: "Wiktor Chudy | Fullstack Software Engineer",
  description:
    "Hey, I'm Wiktor — Fullstack Software Engineer specializing in Java and Angular aimed at providing real value to projects through strong business-oriented approach.",
  metadataBase: new URL("https://wiktorchudy.me"),
  openGraph: {
    title: "Wiktor Chudy | Fullstack Software Engineer",
    description: "Hey, I'm Wiktor — Fullstack Software Engineer specializing in Java and Angular aimed at providing real value to projects through strong business-oriented approach.",
    url: "https://wiktorchudy.me",
    siteName: "Wiktor Chudy",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wiktor Chudy – Fullstack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wiktor Chudy | Fullstack Software Engineer",
    description: "Hey, I'm Wiktor — Fullstack Software Engineer specializing in Java and Angular aimed at providing real value to projects through strong business-oriented approach.",
    images: ["/og-image.png"],
  },
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
