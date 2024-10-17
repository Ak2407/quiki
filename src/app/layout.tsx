import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import localFont from "next/font/local";
import { DM_Sans, Inter } from "next/font/google";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 200 300 400 500 600 700 800 900",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quiki, AI shorts generator",
  description:
    "AI shorts, reels and tiktok generator. Full customisable AI shorts generator.",
  icons: [
    {
      href: "/icon.svg",
      url: "/icon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          className={`${dmSans.className} antialiased`}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
