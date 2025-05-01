import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBanner from "@/components/AnnouncementBanner"; // Import the banner

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VolunTech - Connect. Volunteer. Make a Difference.",
  description: "Join VolunTech to find volunteering opportunities, support NGOs, and make a positive impact in your community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <AnnouncementBanner /> {/* Add the banner here */}
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
