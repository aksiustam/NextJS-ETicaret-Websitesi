import { Inter } from "next/font/google";
import "@/app/(user)/globals.css";
import Layout from "./admin/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Admin Knife",
  description: "Bıçakcı Serkan Bıçak Malzemeleri",
  robots: {
    index: false,
    nocache: true,
    follow: false,
  },
};
export default function SubLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
