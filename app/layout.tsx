import type { Metadata } from "next";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";
import "./globals.css";

const { hero } = PORTFOLIO_DATA;

export const metadata: Metadata = {
  title: `${hero.name} | ${hero.tagline}`,
  description: hero.description,
  openGraph: {
    title: `${hero.name} | ${hero.tagline}`,
    description: hero.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
