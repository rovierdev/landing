import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rovier",
  description: "Efficient Electronic Procurement Networks.",
  keywords: "rovier, nick sahinidis, elias kourpas, eric sisofo, shivam syal, khush makadia, yash mandavia, procurement, supply chain, b2b, foodservice, restaurants, restaurant, buyer, buyers suppliers, supplier, optimization, networks, network, marketplace",
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
