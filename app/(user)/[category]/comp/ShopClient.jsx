"use client";

import { useState } from "react";
import BreadcrumbCom from "../../components/Common/BreadcrumbCom";
import ProductsFilter from "./ProductsFilter";
import Image from "next/image";
import Link from "next/link";

export default function ShopClient({ allcategory, data }) {
  const { category } = allcategory;

  const subdata = data?.category?.SubCategory;

  const [volume, setVolume] = useState({ min: 200, max: 500 });

  const [filterToggle, setToggle] = useState(false);

  return (
    <>
      <div className="products-page-wrapper w-full">
        <div className="container-x mx-auto">
          <BreadcrumbCom />
          <div className="w-full lg:flex lg:space-x-[30px]">
            <div className="lg:w-[270px]">
              <ProductsFilter
                category={category}
                data={data}
                volume={volume}
                volumeHandler={(value) => setVolume(value)}
                className="mb-[30px]"
                filterToggle={filterToggle}
                filterToggleHandler={() => setToggle(!filterToggle)}
              />
            </div>

            <div className="flex-1">
              {subdata.length > 0 && (
                <div className="products-sorting w-full bg-white md:h-[110px] flex space-x-4 items-center p-[25px] mb-[5px]">
                  {subdata?.map((item) => (
                    <div className="flex flex-col items-center justify-center px-2 py-1 hover:bg-slate-100">
                      <div
                        className={`w-[70px] h-[70px] rounded-full border-2 border-slate-800  relative`}
                      >
                        <Link href={`/${data?.category?.slug}`}>
                          <Image
                            key={item?.id}
                            src={item?.imageurl}
                            alt="Kategoriler"
                            fill
                            className="w-full h-full rounded-full object-contain "
                          />
                        </Link>
                      </div>
                      <Link
                        href={`/${data?.category?.slug}`}
                        className="text-xs truncate"
                      >
                        {item?.name}
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              <div className="products-sorting w-full bg-white md:h-[30px] flex flex-row  justify-between items-center p-[20px] mb-[40px]">
                <div className="flex items-center justify-start space-x-3 cursor-pointer ">
                  <div className="flex-1">
                    <svg height="18" width="18" viewBox="0 0 487.3 487.3">
                      <g>
                        <g>
                          <path
                            d="M487.2,69.7c0,12.9-10.5,23.4-23.4,23.4h-322c-12.9,0-23.4-10.5-23.4-23.4s10.5-23.4,23.4-23.4h322.1
			C476.8,46.4,487.2,56.8,487.2,69.7z M463.9,162.3H141.8c-12.9,0-23.4,10.5-23.4,23.4s10.5,23.4,23.4,23.4h322.1
			c12.9,0,23.4-10.5,23.4-23.4C487.2,172.8,476.8,162.3,463.9,162.3z M463.9,278.3H141.8c-12.9,0-23.4,10.5-23.4,23.4
			s10.5,23.4,23.4,23.4h322.1c12.9,0,23.4-10.5,23.4-23.4C487.2,288.8,476.8,278.3,463.9,278.3z M463.9,394.3H141.8
			c-12.9,0-23.4,10.5-23.4,23.4s10.5,23.4,23.4,23.4h322.1c12.9,0,23.4-10.5,23.4-23.4C487.2,404.8,476.8,394.3,463.9,394.3z
			 M38.9,30.8C17.4,30.8,0,48.2,0,69.7s17.4,39,38.9,39s38.9-17.5,38.9-39S60.4,30.8,38.9,30.8z M38.9,146.8
			C17.4,146.8,0,164.2,0,185.7s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9S60.4,146.8,38.9,146.8z M38.9,262.8
			C17.4,262.8,0,280.2,0,301.7s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9S60.4,262.8,38.9,262.8z M38.9,378.7
			C17.4,378.7,0,396.1,0,417.6s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9C77.8,396.2,60.4,378.7,38.9,378.7z"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <svg height="16" width="16" viewBox="0 0 452.54 452.54">
                      <g>
                        <g>
                          <g>
                            <path
                              style={{ fill: "#020202" }}
                              d="M116.066,270.268c0,7.751-6.284,14.035-14.035,14.035H14.035C6.284,284.303,0,278.019,0,270.268
				v-87.996c0-7.751,6.284-14.035,14.035-14.035h87.996c7.752,0,14.035,6.284,14.035,14.035V270.268z"
                            />
                          </g>
                          <g>
                            <path
                              style={{ fill: "#020202" }}
                              d="M452.54,270.268c0,7.751-6.284,14.035-14.035,14.035h-87.997c-7.751,0-14.035-6.284-14.035-14.035
				v-87.997c0-7.751,6.284-14.035,14.035-14.035h87.997c7.751,0,14.035,6.284,14.035,14.035V270.268z"
                            />
                          </g>
                        </g>
                        <g>
                          <path
                            style={{ fill: "#020202" }}
                            d="M270.272,2.305h-88.004c-7.749,0-14.032,6.283-14.032,14.04v87.989
			c0,7.755,6.283,14.038,14.032,14.038h88.004c7.749,0,14.032-6.283,14.032-14.038V16.345
			C284.304,8.588,278.021,2.305,270.272,2.305z"
                          />
                          <path
                            style={{ fill: "#020202" }}
                            d="M102.028,2.305H14.04C6.283,2.305,0,8.588,0,16.345v87.989c0,7.755,6.283,14.038,14.04,14.038
			h87.989c7.755,0,14.038-6.283,14.038-14.038V16.345C116.066,8.588,109.783,2.305,102.028,2.305z"
                          />
                          <path
                            style={{ fill: "#020202" }}
                            d="M438.5,2.305h-87.988c-7.755,0-14.038,6.283-14.038,14.04v87.989
			c0,7.755,6.283,14.038,14.038,14.038H438.5c7.757,0,14.04-6.283,14.04-14.038V16.345C452.54,8.588,446.257,2.305,438.5,2.305z"
                          />
                          <path
                            style={{ fill: "#020202" }}
                            d="M270.272,168.236h-88.004c-7.749,0-14.032,6.283-14.032,14.04v87.989
			c0,7.755,6.283,14.038,14.032,14.038h88.004c7.749,0,14.032-6.283,14.032-14.038v-87.989
			C284.304,174.519,278.021,168.236,270.272,168.236z"
                          />
                          <path
                            style={{ fill: "#020202" }}
                            d="M270.272,334.167h-88.004c-7.749,0-14.032,6.283-14.032,14.04v87.989
			c0,7.755,6.283,14.038,14.032,14.038h88.004c7.749,0,14.032-6.283,14.032-14.038v-87.989
			C284.304,340.45,278.021,334.167,270.272,334.167z"
                          />
                        </g>
                        <g>
                          <g>
                            <path
                              style={{ fill: "#020202" }}
                              d="M116.066,436.2c0,7.751-6.284,14.035-14.035,14.035H14.035C6.284,450.235,0,443.951,0,436.2
				v-87.996c0-7.751,6.284-14.035,14.035-14.035h87.996c7.752,0,14.035,6.284,14.035,14.035V436.2z"
                            />
                          </g>
                          <g>
                            <path
                              style={{ fill: "#020202" }}
                              d="M452.54,436.2c0,7.751-6.284,14.035-14.035,14.035h-87.997c-7.751,0-14.035-6.284-14.035-14.035
				v-87.997c0-7.751,6.284-14.035,14.035-14.035h87.997c7.751,0,14.035,6.284,14.035,14.035V436.2z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <span className="font-400 text-[13px]">Sırala :</span>
                  <div className="flex space-x-3 items-center border-b border-b-qgray">
                    <span className="font-400 text-[13px] text-qgray">
                      Varsayılan
                    </span>
                    <span>
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 1L5 5L9 1" stroke="#9A9A9A" />
                      </svg>
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setToggle(!filterToggle)}
                  type="button"
                  className="w-10 lg:hidden h-10 rounded flex justify-center items-center border border-qyellow text-qyellow"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </button>
              </div>
              <div className="grid xl:grid-cols-2 sm:grid-cols-2 grid-cols-1  xl:gap-[30px] gap-5 mb-[40px]"></div>
              {/* </Link> */}
              {/* <div className="w-full h-[164px] overflow-hidden mb-[40px]">
                <img
                  src={`/assets/images/ads-6.png`}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 mb-[40px]">
                <DataIteration datas={products} startLength={6} endLength={15}>
                  {({ datas }) => (
                    <div data-aos="fade-up" key={datas.id}>
                      <ProductCardStyleOne datas={datas} />
                    </div>
                  )}
                </DataIteration>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
