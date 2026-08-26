import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyen Dinh Hung | Software Engineer & AI Builder",
  description:
    "Portfolio of Nguyen Dinh Hung, a software engineer and AI builder focused on cybersecurity, multi-agent systems, RAG, and deep learning.",
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
