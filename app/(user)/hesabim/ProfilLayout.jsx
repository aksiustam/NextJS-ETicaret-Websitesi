"use client";
import IcoAdress from "./icons/IcoAdress";
import IcoCart from "./icons/IcoCart";
import IcoLogout from "./icons/IcoLogout";
import IcoPassword from "./icons/IcoPassword";
import IcoPeople from "./icons/IcoPeople";
import BreadcrumbCom from "../components/Common/BreadcrumbCom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
const ProfilLayout = ({ children }) => {
  const router = useRouter();
  const logout = () => {
    signOut();
    router.push("/");
    router.refresh();
  };
  return (
    <div className="profile-page-wrapper w-full">
      <div className="container-x mx-auto">
        <div className="w-full my-10">
          <BreadcrumbCom
            paths={[
              { name: "Anasayfa", path: "/" },
              { name: "Profil", path: "/hesabim" },
            ]}
          />
          <div className="w-full bg-white px-10 py-9">
            <div className="title-area w-full flex justify-between items-center">
              <h1 className="text-[22px] font-bold text-qblack">Hesabım</h1>
            </div>
            <div className="profile-wrapper w-full mt-8 flex space-x-10">
              <div className="w-[236px] min-h-[600px] border-r border-[rgba(0, 0, 0, 0.1)]">
                <div className="flex flex-col space-y-10">
                  <div className="item group">
                    <Link href="/hesabim">
                      <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                        <span>
                          <IcoPeople />
                        </span>
                        <span className=" font-normal text-base">
                          Kullanıcı Bilgileri
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className="item group">
                    <Link href="/hesabim/siparislerim">
                      <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                        <span>
                          <IcoCart />
                        </span>
                        <span className=" font-normal text-base">
                          Tüm Siparişlerim
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className="item group">
                    <Link href="/hesabim/adress">
                      <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                        <span>
                          <IcoAdress />
                        </span>
                        <span className=" font-normal text-base">Adress</span>
                      </div>
                    </Link>
                  </div>

                  <div className="item group">
                    <Link href="/hesabim/sifredegistir">
                      <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                        <span>
                          <IcoPassword />
                        </span>
                        <span className=" font-normal text-base">
                          Şifre Değiştir
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className="item group">
                    <div
                      className="flex space-x-3 items-center text-qgray hover:text-qblack cursor-pointer"
                      onClick={() => logout()}
                    >
                      <span>
                        <IcoLogout />
                      </span>
                      <span className=" font-normal text-base">Çıkış Yap</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="item-body dashboard-wrapper w-full">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilLayout;
