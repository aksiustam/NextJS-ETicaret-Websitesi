"use client";
import { useState } from "react";
import DiscountBanner from "../Home/DiscountBanner";
import Drawer from "../Drawer";
import Footer from "../Footer";
import Header from "../Header";
import AOSInit from "../../aos";

export default function Layout({ children, childrenClasses, user, category }) {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <AOSInit />
      <Drawer
        open={drawer}
        action={() => setDrawer(!drawer)}
        category={category}
      />
      <div className="w-full h-full overflow-hidden">
        <Header
          drawerAction={() => setDrawer(!drawer)}
          user={user}
          category={category}
        />
        <main className={`w-full  ${childrenClasses || "pt-[30px] pb-[60px]"}`}>
          {children && children}
        </main>
        <DiscountBanner />
        <Footer />
      </div>
    </>
  );
}
