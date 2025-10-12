// src/app/layout.tsx
import "./globals.css";
import LenisProvider from "./LenisProvider";
import NewNavbar from "@/components/ui/NewNavbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kochukov & Blume - Legal Services",
  description: "Trusted legal advice and representation for over 20 years.",
  keywords: "legal services, law firm, attorney, legal advice",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="font-sans bg-white text-gray-900">
        <LenisProvider>
          <NewNavbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
