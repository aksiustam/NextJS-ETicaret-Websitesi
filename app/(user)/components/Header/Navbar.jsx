"use client";
import { useEffect, useState } from "react";
import Arrow from "../Helpers/icons/Arrow";
import Link from "next/link";
import Cart from "../Cart";
import ThinBag from "../Helpers/icons/ThinBag";
import ThinPeople from "../Helpers/icons/ThinPeople";
import Image from "next/image";

export default function Navbar({ user, basket, category }) {
  const [categoryToggle, setToggle] = useState(false);
  const [elementsSize, setSize] = useState("0px");
  const cat = category.category;

  const handler = () => {
    setToggle(!categoryToggle);
  };
  useEffect(() => {
    if (categoryToggle) {
      const getItems = document.querySelectorAll(`.categories-list li`).length;
      if (categoryToggle && getItems > 0) {
        setSize(`${42 * getItems}px`);
      }
    } else {
      setSize(`0px`);
    }
  }, [categoryToggle]);

  return (
    <div
      className={`nav-widget-wrapper w-full  h-[70px] relative bg-qyellow z-30 quomodo-shop-nav-bar lg:block hidden`}
    >
      <div className="container-x mx-auto h-full">
        <div className="w-full h-full relative">
          <div className="w-full h-full flex justify-between items-center">
            <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
              <button
                onClick={handler}
                type="button"
                className="w-full h-full flex justify-between items-center"
              >
                <div className="flex space-x-3 items-center">
                  <span>
                    <svg
                      className="fill-current"
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="14" height="1" />
                      <rect y="8" width="14" height="1" />
                      <rect y="4" width="10" height="1" />
                    </svg>
                  </span>
                  <span className="text-sm font-600 text-qblacktext">
                    Kategoriler
                  </span>
                </div>
                <div>
                  <Arrow
                    width="5.78538"
                    height="1.28564"
                    className="fill-current text-qblacktext"
                  />
                </div>
              </button>
              {categoryToggle && (
                <div
                  className="fixed top-0 left-0 w-full h-full -z-10"
                  onClick={handler}
                ></div>
              )}
              <div
                className="category-dropdown w-full absolute left-0 top-[53px] overflow-hidden"
                style={{ height: `${elementsSize} ` }}
              >
                <ul className="categories-list">
                  {cat?.map((item) => (
                    <li className="category-item" key={item?.id}>
                      <Link href={`/${item?.slug}`}>
                        <div
                          className={`flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-qyellow`}
                        >
                          <div className="flex items-center space-x-6">
                            <span>
                              {item?.imageurl && (
                                <Image
                                  src={item?.imageurl}
                                  alt="Kategori"
                                  width={50}
                                  height={50}
                                  className="w-5 h-5 object-contain"
                                />
                              )}
                            </span>
                            <span className="text-xs font-400">
                              {item?.name}
                            </span>
                          </div>
                          <div>
                            <span>
                              <svg
                                className="fill-current"
                                width="6"
                                height="9"
                                viewBox="0 0 6 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="1.49805"
                                  y="0.818359"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"
                                />
                                <rect
                                  x="5.58984"
                                  y="4.90918"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-[270px]  flex items-center justify-center h-full bg-white rounded-3xl">
              <Link href="/">
                <Image
                  src={`/assets/images/logo.svg`}
                  alt="logo"
                  width={152}
                  height={36}
                />
              </Link>
            </div>
            <div className="w-[270px] flex space-x-6 items-center justify-end">
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                  <Link href="/sepet">
                    <span>
                      <ThinBag />
                    </span>
                  </Link>
                  <span
                    className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-zinc-400`}
                  >
                    {basket?.length}
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
