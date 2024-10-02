import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
//import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HEXmania",
  description: "play hex online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-gray-600 text-white dark:bg-white dark:text-black">
          <Navbar />
          <main className={inter.className}>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
