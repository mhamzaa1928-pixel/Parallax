import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parallax | Amazon Intelligence Platform",
  description: "AI-powered Amazon audit, PPC intelligence, reports, and CRM dashboard.",
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