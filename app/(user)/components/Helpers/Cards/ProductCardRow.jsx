import Image from "next/image";
import Link from "next/link";
import errimg from "@/public/assets/images/errorproduct.webp";
export default function ProductCardRow({ className, datas }) {
  return (
    <div
      data-aos="fade-up"
      className={`product-card-row-two w-full  ${className || ""}`}
    >
      <div className="w-full h-[105px] bg-white border border-primarygray px-5 shadow-lg">
        <div className="w-full h-full flex space-x-5 justify-center items-center">
          <div className="w-[75px] h-[75px]">
            <Image
              src={datas?.images[0]?.imageurl || errimg}
              alt={datas?.name}
              width={150}
              height={150}
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 h-full flex flex-col justify-center ">
            <Link href={`/${datas?.Category?.slug}/${datas?.slug}`}>
              <p className="title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-blue-600">
                {datas?.name}
              </p>
            </Link>

            {datas?.indirim === true ? (
              <p className="price">
                <span className="main-price text-qgray line-through font-600 text-[18px]">
                  {datas?.price}₺
                </span>
                <span className="offer-price text-qred font-600 text-[18px] ml-2">
                  {datas?.inprice}₺
                </span>
              </p>
            ) : (
              <p className="price">
                <span className="offer-price text-qred font-600 text-[18px] ">
                  {datas?.price}₺
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
