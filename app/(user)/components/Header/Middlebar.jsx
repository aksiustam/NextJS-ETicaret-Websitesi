import Link from "next/link";
import Cart from "../Cart";
import ThinBag from "../Helpers/icons/ThinBag";
import ThinPeople from "../Helpers/icons/ThinPeople";
import SearchBox from "../Helpers/SearchBox";

export default function Middlebar({ user, basket }) {
  return (
    <div
      className={`w-full h-[86px] bg-white quomodo-shop-middle-bar lg:block hidden`}
    >
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <div>
              <Link href="/">
                <img
                  width="152"
                  height="36"
                  src={`/assets/images/logo.svg`}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="w-[517px] h-[44px]">
              <SearchBox />
            </div>
            <div className="flex space-x-6 items-center">
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                  <Link href="/sepet">
                    <span>
                      <ThinBag />
                    </span>
                  </Link>
                  <span
                    className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow`}
                  >
                    {basket.length}
                  </span>
                </div>
                <Cart />
              </div>
              <div>
                <Link href={user !== null ? "/profil" : "/login"}>
                  <span>
                    <ThinPeople />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
