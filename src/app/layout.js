import { Inter } from "next/font/google";
import "./globals.css";
import '@/app/page.module.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Easy Dyne",
  description: "Easy Dyne, where you can buy foods and book a table on your favorite restaurant",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <SpeedInsights />
        {children}
        </body>
    </html>
  );
}
