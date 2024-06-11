import type { Metadata } from "next";
import { Inter, Noto_Sans_Gujarati } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
 

const inter = Noto_Sans_Gujarati({ subsets: ["gujarati"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gu" data-theme="valentine">
      <body className={inter.className}>
        

      <Navbar/>
   
        {children}
       
        </body>
    </html>
  );
}
