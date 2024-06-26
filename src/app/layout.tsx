import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./global.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("relative h-full font-sans antialiased", inter)}>
        <div className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1 flex-grow">{children}N</div>
        </div>
      </body>
    </html>
  );
}
