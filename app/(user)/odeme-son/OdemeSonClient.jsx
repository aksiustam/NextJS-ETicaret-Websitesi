"use client";
import Link from "next/link";
import Image from "next/image";
import checktick from "@/public/assets/images/checktick.png";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
const OdemeSonClient = (props) => {
  const { user } = props;
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      localStorage.removeItem("cart");
    }
  }, [token]);
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <Image
          src={checktick}
          alt="Success"
          width={1200}
          height={1200}
          className="w-60 h-60 object-contain"
        />
      </div>
      <div>Siparişiniz Başarıyla Sonuçlanmıştır.</div>
      <div>
        {" "}
        Faturanızı görmek için{" "}
        <Link
          className="text-blue-600 cursor-pointer"
          href={`/order-bill/${token}`}
        >
          Tıklayınız
        </Link>
      </div>
      {user !== null && (
        <div>Siparişinizin takibini profil alanınızdan ulaşabilirsiniz.</div>
      )}
      {user === null && (
        <Link className="text-blue-600 cursor-pointer" href={`/siparistakip`}>
          Siparişinizi takip edin
        </Link>
      )}
    </div>
  );
};

export default OdemeSonClient;
