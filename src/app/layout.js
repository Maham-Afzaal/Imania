import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container1">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
