import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function CategoriesSection({ allcategory }) {
  const cat = allcategory?.category;

  return (
    <>
      <div className="categories-section-wrapper w-full">
        <div className="container-x mx-auto">
          <div className="w-full categories-iems">
            <div className="grid xl:grid-cols-8 sm:grid-cols-5 grid-cols-4 gap-8 mb-[46px]">
              {cat?.map((item) => (
                <div
                  className="item w-full group cursor-pointer"
                  key={item?.id}
                >
                  <Link href={`/${item?.slug}`}>
                    <div className="w-full flex justify-center">
                      <div className="w-[70px] h-[70px] sm:w-[110px] sm:h-[110px] rounded-full bg-[#EEF1F1] group-hover:bg-qyellow mb-2.5 flex justify-center items-center">
                        <span className="text-qblack group-hover:text-white">
                          <Image
                            src={item?.imageurl}
                            alt={item?.name}
                            width={300}
                            height={300}
                            loading="eager"
                            className="w-full h-full rounded-full object-contain"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex justify-center">
                      <p className="text-sm text-qblack text-center line-clamp-2 ">
                        {item?.name}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
