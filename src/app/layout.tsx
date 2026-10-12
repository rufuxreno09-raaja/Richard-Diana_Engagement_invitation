import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Playfair_Display, Great_Vibes, Cinzel, Montserrat } from "next/font/google";
import { engagementConfig } from "@/config/engagement";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(engagementConfig.sharing.invitationUrl),
  title: engagementConfig.meta.title,
  description: engagementConfig.meta.description,
  keywords: [
    "Richard Rex",
    "Diana Joe",
    "Engagement Invitation",
    "Christian Engagement",
    "Thiruvannamalai",
    "Malligai Thirumana Mandapam",
    "November 29 2026",
  ],
  authors: [{ name: "Richard Rex & Diana Joe" }],
  openGraph: {
    title: engagementConfig.meta.title,
    description: engagementConfig.meta.description,
    type: "website",
    locale: "en_US",
    siteName: "Richard Rex & Diana Joe Engagement",
    images: [
      {
        url: engagementConfig.meta.ogImage,
        width: 1200,
        height: 630,
        alt: "Richard Rex & Diana Joe Engagement Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: engagementConfig.meta.title,
    description: engagementConfig.meta.description,
    images: [engagementConfig.meta.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: engagementConfig.meta.themeColor,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${greatVibes.variable} ${cinzel.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen bg-[#F8F4EC] text-[#2A2521] antialiased selection:bg-[#FCE1E7] selection:text-[#967418]">
        {children}
      </body>
    </html>
  );
}
