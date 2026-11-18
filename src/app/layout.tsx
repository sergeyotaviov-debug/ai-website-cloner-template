import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skillshare - Online Classes for Creatives",
  description:
    "Creative classes taught by the best creative pros. Thousands of creative classes. 1 free month. Cancel anytime.",
  icons: {
    icon: [
      { url: "/seo/favicon.ico" },
      { url: "/seo/favicon.svg", type: "image/svg+xml" },
      { url: "/seo/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/seo/favicon-180.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Skillshare - Online Classes for Creatives",
    description:
      "Creative classes taught by the best creative pros. Get 1 free month of Skillshare.",
    images: [{ url: "/seo/og-image.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans text-ss-ink">
        {children}
      </body>
    </html>
  );
}
