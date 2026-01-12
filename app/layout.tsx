import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Importing the components we created
import Header from "./components/Header"; 
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Royal Home Tutors",
  description: "Classroom-standard education, delivered at home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        {/* Header appears on all pages */}
        <Header />
        
        {/* The specific page content (Home, About, Request) goes here */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer appears on all pages */}
        <Footer />
      </body>
    </html>
  );
}
