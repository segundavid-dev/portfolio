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
    default: "David Segun | Software Engineer",
    template: "%s | David Segun",
  },
  description: "Computer Scientist and Software Engineer",
  icons: {
    icon: "/icon.jpeg",
  },
  keywords: ["Software Engineer", "Frontend Developer", "Backend Developer", "David Segun", "DOS"],
  openGraph: {
    type: "website",
    locale: "en_US",
    // url: "https://davidsegun.com", 
    siteName: "David Segun Portfolio",
    title: "David Segun | Software Engineer",
    description: "Building scalable systems and interactive experiences.",
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
    description: "Building scalable systems and interactive experiences.",
    creator: "@david__segun",
    images: ["/og-image.png"],
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Header />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
