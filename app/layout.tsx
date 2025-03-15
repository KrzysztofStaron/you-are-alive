import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "You Are Alive | A Moment of Reflection",
  description:
    "A poetic reminder of the beauty and miracle of existence. Take a moment to breathe, reflect, and celebrate being alive.",
  keywords: ["poetry", "mindfulness", "life", "reflection", "meditation"],
  authors: [{ name: "Krzysztof" }],
  openGraph: {
    title: "You Are Alive | A Moment of Reflection",
    description: "A poetic reminder of the beauty and miracle of existence",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}>{children}</body>
    </html>
  );
}
