import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const vietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hey Brew Cafe PH — Coffee & Milktea Franchise Philippines",
  description:
    "Own a Hey Brew Cafe PH franchise — a modern heritage brew combining artisanal coffee and premium milktea. First 5 slots get the ₱200,000 promo package. Open nationwide.",
  openGraph: {
    title: "Hey Brew Cafe PH — Coffee & Milktea Franchise Philippines",
    description:
      "Own a Hey Brew Cafe PH franchise — a modern heritage brew combining artisanal coffee and premium milktea. First 5 slots get the ₱200,000 promo package. Open nationwide.",
    type: "website",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Hey Brew Cafe PH — Coffee & Milktea Franchise Philippines",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${vietnam.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
