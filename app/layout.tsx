import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Al-habib's Portfolio",
  description: "Muhammad Iqbal Al Habib is a Fullstack Developer based in Yogyakarta, Indonesia. He is passionate about creating software that adds meaningful value to people's lives. He use Golang for the backend and Next.Js/React.Js for the Frontend. He also quite passionate about cloud services and cloud engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
