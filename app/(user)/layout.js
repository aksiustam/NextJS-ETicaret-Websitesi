import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout/Layout";
import { getCurrentUser } from "../actions/getCurrentUser";
import CartProvider from "@/provider/CartProvider";
import getAllCategory from "../actions/Category/getAllCategory";

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
