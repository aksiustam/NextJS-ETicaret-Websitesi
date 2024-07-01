import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout/Layout";
import { getCurrentUser } from "../actions/getCurrentUser";

import getAllCategory from "../actions/Category/getAllCategory";
import Script from "next/script";
import CartProvider from "@/provider/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bıçakcı Serkan",
  description: "Bıçakcı Serkan Av ve Bıçak Malzemeleri Satış Websitesi",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://bicakciserkan.com"),

  keywords: [
    "Bıçak",
    "Av malzemeleri",
    "Kesici aletler",
    "Alışveriş",
    "Çakı",
    "Katana",
    "Zülfikar",
    "Kasap bıçağı",
    "Zırh bıçağı",
    "Şef bıçağı",
    "Karambit",
    "Bayonet",
    "Kelebek bıçakları",
    "Taktik bıçaklar",
    "Outdoor bıçaklar",
    "Avcı bıçakları",
    "Kamp bıçakları",
    "Survival bıçaklar",
    "Koleksiyon bıçakları",
    "Dövme bıçaklar",
    "El yapımı bıçaklar",
  ],
  generator: "AYDTANITIM",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: "Aydtanitim.com",
  publisher: "BıçakcıSerkan",
  verification: {
    google: "123123123",
  },
  alternates: {
    canonical: new URL("https://bicakciserkan.com"),
  },
  openGraph: {
    title: "BıçakcıSerkan",
    description: "Bıçakcı Serkan Av ve Bıçak Malzemeleri Satış Websitesi",
    url: "https://bicakciserkan.com",
    siteName: "Bıçakcı Serkan",
    images: [
      {
        url: "https://bicakciserkan.com/assets/images/bicakcilogo.svg",
        width: 736,
        height: 250,
        alt: "Bıçakcı Serkan",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};

export default async function RootLayout({ children }) {
  const user = await getCurrentUser();
  const category = await getAllCategory();

  return (
    <html lang="tr">
      <Script
        type="text/javascript"
        src="https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js"
      ></Script>
      <body className={inter.className}>
        <CartProvider>
          <Layout user={user} category={category}>
            {children}
          </Layout>
        </CartProvider>
      </body>
    </html>
  );
}
