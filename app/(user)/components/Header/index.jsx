import Link from "next/link";
import ThinBag from "../Helpers/icons/ThinBag";

import Navbar from "./Navbar";

import Image from "next/image";
import UseCart from "@/hooks/useCart";
import ThinPeople from "../Helpers/icons/ThinPeople";
import { MdAdminPanelSettings } from "react-icons/md";
export default function Header({ className, drawerAction, user, category }) {
  const { basket } = UseCart();
  return (
    <header className={` ${className || ""} header-section-wrapper relative`}>
      {/* <Middlebar  /> */}
      <div className="quomodo-shop-drawer lg:hidden block w-full h-[120px] bg-black">
        <div className="w-full h-full flex justify-between items-center px-5">
          <div onClick={drawerAction}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <div className="relative">
            <Link href="/">
              <Image
                src={"/assets/images/bicakcilogo.svg"}
                alt="logo"
                width={168}
                height={55}
                loading="eager"
              />
            </Link>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <div className="cart relative cursor-pointer mr-4">
              <Link href="/sepet">
                <span>
                  <ThinBag />
                </span>
              </Link>
              <span
                className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow text-qblack`}
              >
                {basket?.length}
              </span>
            </div>
            <div>
              <Link href={user !== null ? "/hesabim" : "/login"}>
                <span>
                  <ThinPeople />
                </span>
              </Link>
            </div>
            {user !== null && user.Role === "ADMIN" && (
              <div>
                <Link href={"/admin"}>
                  <span>
                    <MdAdminPanelSettings color="white" size={26} />
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Navbar user={user} basket={basket} category={category} />
    </header>
  );
}
