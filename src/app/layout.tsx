import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "automate.ch - KI-Assistent fuer Handwerker & Frontline-Teams",
  description:
    "Der KI-Assistent, der Handwerkern und Frontline-Teams den Ruecken freihaelt. Terminbuchung, Offerten, Kundenkommunikation - automatisch.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
