"use client";
import { useState } from "react";
import DiscountBanner from "../Home/DiscountBanner";
import Drawer from "../Drawer";
import Footer from "../Footer";
import Header from "../Header";
import AOSInit from "../../aos";

export default function Layout({ children, childrenClasses, user }) {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <AOSInit />
      <Drawer open={drawer} action={() => setDrawer(!drawer)} />
      <div className="w-full overflow-x-hidden">
        <Header drawerAction={() => setDrawer(!drawer)} user={user} />
        <main className={`w-full  ${childrenClasses || "pt-[30px] pb-[60px]"}`}>
          {children && children}
        </main>
        <DiscountBanner type={3} />
        <Footer />
      </div>
    </>
  );
}
