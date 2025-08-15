import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import i18next from "i18next";

import MyContextProvider from "@/Provider/MyContextProvider"; // Ajouté

export const metadata = {
  title: 'Discovr Algeria - Explorez l\'Algérie',
  description: 'Découvrez l\'Algérie, ses villes, sa culture, ses activités et plus encore. Le guide ultime pour explorer l\'Algérie.',
  manifest: '/manifest.json',
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Discovr Algeria',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon512_rounded.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icon512_rounded.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <MyContextProvider>
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </MyContextProvider>
            </body>
        </html>
    );
}