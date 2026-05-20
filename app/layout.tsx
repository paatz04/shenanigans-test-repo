import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stock Return Calculator",
  description: "A Next.js foundation for stock return calculations, analytics, and future charting tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}