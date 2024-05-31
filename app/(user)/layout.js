import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout/Layout";
import { getCurrentUser } from "../actions/getCurrentUser";

import getAllCategory from "../actions/Category/getAllCategory";
import Script from "next/script";
import CartProvider from "@/provider/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Knife",
  description: "Bıçakcı Serkan Bıçak Malzemeleri",
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
