import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InfoPedia",
  description: "Discover more with InfoPedia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= "bg-custom-bg-layout min-h-screen bg-no-repeat bg-cover">
        <NavBar />
        <main className="flex justify-center items-center">
          {children}
        </main>
        </body>
    </html>
  );
}
