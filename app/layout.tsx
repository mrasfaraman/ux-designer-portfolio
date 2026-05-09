import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Morgan — UI/UX Designer",
  description:
    "Award-winning UI/UX designer crafting intuitive digital experiences that delight users and drive business growth. Available for freelance projects.",
  keywords: ["UI designer", "UX designer", "product designer", "Figma", "design portfolio"],
  openGraph: {
    title: "Alex Morgan — UI/UX Designer",
    description: "Award-winning UI/UX designer crafting intuitive digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
