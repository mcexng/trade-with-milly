import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CryptoTicker } from "@/components/ui/CryptoTicker";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TRADE WITH MILLY | Professional Crypto Trader & Vendor",
  description: "Milly is a professional crypto trader, vendor, mentor, and trading signal provider. Join the trading academy today.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-20">
          <CryptoTicker />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
