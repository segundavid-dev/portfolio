import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://davidsegun.com"),
  title: {
    default: "David Segun",
    template: "%s | David Segun",
  },
  description: "Software Engineer building products that ship — and hold up after they do.",
  icons: {
    icon: "/icon.jpeg",
  },
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "David Segun",
    "DOS",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    // url: "https://davidsegun.com",
    siteName: "David Segun Portfolio",
    title: "David Segun | Software Engineer",
    description: "Software Engineer building products that ship — and hold up after they do.",
    images: [
      {
        url: "/og-image.png", // You should create this image later
        width: 1200,
        height: 630,
        alt: "David Segun Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Segun | Software Engineer",
    description: "Software Engineer building products that ship — and hold up after they do.",
    creator: "@david__segun",
    images: ["/og-image.png"],
  },
};

import { TooltipProvider } from "@/components/ui/tooltip";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <TooltipProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
