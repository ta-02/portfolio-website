import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ActiveSectionContextProvider } from "@/context/active-section-context";
import { ThemeContextProvider } from "@/context/theme-context";
import ThemeSwitch from "@/components/ThemeSwitch";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talal | Personal Portfolio",
  description: "Talal is an aspiring full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.className} bg-neutral-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-neutral-950 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* <div className="bg-[#fbe2e3] absolute top-[-8rem] -z-10 right-[8rem] h-[25rem] w-[25rem] rounded-full blur-3xl sm:w-[45rem] dark:bg-[#946263]"></div> */}
        {/* <div className="bg-[#dbd7fb] absolute top-[-2rem] -z-10 left-[-20rem] h-[25rem] w-[40rem] rounded-full blur-3xl sm:w-[60rem] md:left-[-18rem] lg:left-[-15rem] xl:left-[-10rem] 2xl:left-[0rem] dark:bg-[#676394]"></div> */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
