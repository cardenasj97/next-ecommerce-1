import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Next Ecommerce App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 h-screen">
        <Navbar />
        <main className="p-4 max-w-screen-2xl m-auto">{children}</main>
      </body>
    </html>
  );
}
