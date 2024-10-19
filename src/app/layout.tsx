import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
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
        <body className={`${dmSans.className} antialiased scroll-smooth`}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
