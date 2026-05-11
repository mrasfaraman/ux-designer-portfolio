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
  title: "Aqsa Zainab — Junior UI/UX Designer",
  description:
    "Junior UI/UX Designer with hands-on experience in web and mobile design. Proficient in Figma, wireframes, prototypes and user-centered design. Based in Rawalpindi, Pakistan.",
  keywords: ["UI designer", "UX designer", "Figma", "junior designer", "Aqsa Zainab", "Pakistan"],
  openGraph: {
    title: "Aqsa Zainab — Junior UI/UX Designer",
    description: "Junior UI/UX Designer crafting intuitive web and mobile interfaces.",
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
