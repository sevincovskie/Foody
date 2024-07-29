import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({ 
  subsets: ["latin"] ,
  weight: ['900','400','500']


});

export const metadata: Metadata = {
  title: "Foody",
  icons :"food.ico",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Header/>

        {children}
        <Footer/>
      </body>
      
    </html>
  );
}
