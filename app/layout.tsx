import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Wiktor Chudy | Software Engineer',
  description:
    "Hey, I'm Wiktor Chudy — Frontend Developer with 1+ years of commercial experience, aspiring to become a Full-Stack Developer.",
  metadataBase: new URL('https://wiktorchudy.me'),
  openGraph: {
    title: 'Wiktor Chudy | Software Engineer',
    description:
      "Hey, I'm Wiktor Chudy — Frontend Developer with 1+ years of commercial experience, aspiring to become a Full-Stack Developer.",
    url: 'https://wiktorchudy.me',
    siteName: 'Wiktor Chudy',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wiktor Chudy – Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wiktor Chudy | Software Engineer',
    description:
      "Hey, I'm Wiktor Chudy — Frontend Developer with 1+ years of commercial experience, aspiring to become a Full-Stack Developer.",
    images: ['/og-image.png'],
  },
  applicationName: 'Wiktor Chudy | Software Engineer',
  appleWebApp: {
    capable: true,
    title: 'Wiktor Chudy | Software Engineer',
    statusBarStyle: 'default',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },

  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.className} scroll-smooth`}>
      <body className={`bg-background-1 text-white antialiased`}>
        <main id="main-content">{children}</main>

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
