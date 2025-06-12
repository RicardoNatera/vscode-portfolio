import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
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
  title: "Ricardo Natera's Portfolio",
  description: `☕ Code • Design • Repeat
  I turn ideas into fast, beautiful websites. Let’s build something awesome!`,
  openGraph: {
    title: "Ricardo Natera's Portfolio",
    description: `☕ Code • Design • Repeat
    I turn ideas into fast, beautiful websites. Let’s build something awesome!`,
    url: "https://ricardonatera.dev", // se cambiaria cuando se haga deploy
    siteName: "VSCode Portfolio - Ricardo Natera",
    images: [
      {
        url: "/og-image.png", // ruta relativa desde /public
        width: 1200,
        height: 630,
        alt: "Ricardo Natera - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Natera's Portfolio",
    description: `☕ Code • Design • Repeat
    I turn ideas into fast, beautiful websites. Let’s build something awesome!`,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
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
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
