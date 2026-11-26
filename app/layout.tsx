import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";
import "./globals.css";

const { name, tagline, description } = PORTFOLIO_DATA.profile;
const title = `${name} | ${tagline}`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
