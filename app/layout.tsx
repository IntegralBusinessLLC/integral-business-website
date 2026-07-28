import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { LanguageProvider } from "@/components/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://integralbusiness-llc.com"),

  title: "Integral Business LLC | Towing & Roadside Assistance",
  description:
    "Professional towing and roadside assistance in Orlando. Fast, reliable service available 24/7.",

  icons: {
    icon: [
      {
        url: "/images/logo.png",
        type: "image/png",
      },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  openGraph: {
    title: "Integral Business LLC",
    description:
      "Professional Towing & Roadside Assistance in Orlando. Fast, reliable service available 24/7.",
    url: "https://integralbusiness-llc.com",
    siteName: "Integral Business LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://integralbusiness-llc.com/images/logo.png",
        width: 512,
        height: 512,
        alt: "Integral Business LLC Towing & Roadside Assistance",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Integral Business LLC",
    description:
      "Professional Towing & Roadside Assistance in Orlando. Fast, reliable service available 24/7.",
    images: ["https://integralbusiness-llc.com/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}