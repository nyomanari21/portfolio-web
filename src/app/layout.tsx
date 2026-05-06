import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { AOSProvider } from "@/components/AOSProvider";
import Scroll from "@/components/Scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nyoman Ari Satyadharma | Portfolio",
  description: "Portfolio of Nyoman Ari Satyadharma, a System Analyst and Web Developer.",
  metadataBase: new URL('https://nyoman-ari-s-portfolio.vercel.app/'),
  openGraph: {
    title: 'Nyoman Ari Satyadharma | Portfolio',
    description: 'Portfolio of Nyoman Ari Satyadharma, a System Analyst and Web Developer.',
    url: 'https://nyoman-ari-s-portfolio.vercel.app/',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Nyoman Ari Satyadharma Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nyoman Ari Satyadharma | Portfolio',
    description: 'Portfolio of Nyoman Ari Satyadharma, a System Analyst and Web Developer.',
    images: ['/opengraph-image.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <Scroll />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
