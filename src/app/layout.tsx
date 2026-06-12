import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Inter_Tight } from "next/font/google";



export const metadata: Metadata = {
  title: 'MOEX LOGISTICS: Fast, Reliable Delivery Services in Nigeria',
  description: 'Experience world-class logistics with MOEX LOGISTICS. Fast, reliable, and affordable package delivery across Ede, Osogbo, and nationwide with real-time tracking.',
  keywords: ["logistics, delivery, package, tracking, courier, Nigeria, Ede, Osogbo, nationwide, rider, marketplace, MOEX, fast delivery, reliable logistics"],
  openGraph: {
    "title": "MOEX LOGISTICS: Fast, Reliable Delivery Services in Nigeria",
    "description": "Experience world-class logistics with MOEX LOGISTICS. Fast, reliable, and affordable package delivery across Ede, Osogbo, and nationwide with real-time tracking.",
    "url": "https://www.moexlogistics.com",
    "siteName": "MOEX LOGISTICS",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/cityscape-istanbul-turkey-photo-from-bird-s-eye-view_1153-5898.jpg",
        "alt": "MOEX LOGISTICS Delivery Illustration"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "MOEX LOGISTICS: Fast, Reliable Delivery Services in Nigeria",
    "description": "Experience world-class logistics with MOEX LOGISTICS. Fast, reliable, and affordable package delivery across Ede, Osogbo, and nationwide with real-time tracking.",
    "images": [
      "http://img.b2bpic.net/free-photo/cityscape-istanbul-turkey-photo-from-bird-s-eye-view_1153-5898.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${interTight.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
