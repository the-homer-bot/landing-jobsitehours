import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JobSite Hours - GPS Time Tracking for Field Workers",
  description: "Stop losing money on time theft. GPS-verified time tracking that automatically clocks your workers in and out when they arrive at job sites. Perfect for contractors, cleaners, and landscapers.",
  keywords: ["time tracking", "GPS tracking", "employee time clock", "job site", "contractor", "field workers", "time theft", "payroll"],
  openGraph: {
    title: "JobSite Hours - Stop Losing Money on Time Theft",
    description: "GPS-verified time tracking that automatically clocks your workers in and out at job sites. No buddy punching. No guesswork.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JobSite Hours - GPS Time Tracking for Field Workers",
    description: "Stop losing money on time theft. Automatic GPS-verified clock in/out for your field teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
