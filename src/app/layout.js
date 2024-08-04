import { Open_Sans } from "next/font/google";
import Navbar from "@/components/wanika/Navbar";
import "./globals.css";
import Footer from "@/components/wanika/Footer";

const openSans = Open_Sans({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
