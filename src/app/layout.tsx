import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "automate.ch - AI Assistant for Tradespeople & Frontline Teams",
  description:
    "The AI assistant that has your back. Appointment booking, quotes, customer communication - automated. For plumbers, electricians, restaurants, and trades in Switzerland.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
