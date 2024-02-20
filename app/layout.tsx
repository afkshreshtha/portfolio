import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shreshtha Agarwal | Portfolio",
  description: "This is my porfoilo create by NextJs ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth  overflow-x-hidden bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className="bg-[#FBE2E3] absolute top-[-6rem] -z-10  right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35remrem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
        <Header/>
        {children}
        <Toaster position="top-right" />
        <Footer/>
        </ActiveSectionContextProvider>

      </body>
    </html>
  );
}
