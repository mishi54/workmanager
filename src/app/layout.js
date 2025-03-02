import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { ToastContainer } from "react-toastify";
import UserProvider from "@/Context/useProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Work Manager",
  description: "Manage Your Task easily ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <UserProvider>
        <ToastContainer/>
        <Header/>
        {children}
        <Footer/>
        </UserProvider> 
      </body>
    </html>
  );
}
