import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import logo from '@/public/calculator.png'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "./globals.css";


import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calculator",
  description: "Smoth calculations",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <nav className="flex items-center text-center gap-8 bg-green-600 py-4 pl-7 pr-3 border-b-5 border-black">

          <Image src={logo} height={40} alt="Logo-Image" className="bg-white rounded-full p-1 animate-[spin_4s_infinite]"></Image>

          <h1 className="text-2xl font-bold text-white">Calculator</h1>

          <p className="flex items-center justify-center gap-1 text-center px-2 py-1 rounded-xl text-[11px] text-black bg-white border">মাসুম সফটওয়্যার ল্যাব<span className="fa fa-check-circle text-green-700"></span></p>
        </nav>

        {children}

        <Script src="https://pl28960388.profitablecpmratenetwork.com/d1/af/74/d1af7439c1bb6333dfe4a6da680a06fd.js" strategy="afterInteractive"></Script>
        
      </body>
    </html>
  );
}
