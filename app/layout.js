import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AOSInit from "./components/AOSInit";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Career Horizon",
  description: "Your gateway to job opportunities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen`}
      >
        {/* Sticky Navbar */}
        <div className="sticky top-0 z-50 bg-white shadow">
          <Navbar />
        </div>
        {/* Main content area */}
        <main className="pt-0">
          <AOSInit />
          {children}
        </main>
      </body>
    </html>
  );
}
