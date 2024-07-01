"use client";
import React, { useState, useEffect } from "react";
import iyzcopng from "@/public/assets/images/iyzico_ile_ode_colored_horizontal.png";
import UseCart from "@/hooks/useCart";
import Image from "next/image";
import BreadcrumbCom from "../components/Common/BreadcrumbCom";
import EmptyCardError from "../(common)/sepet/comp/EmptyCardError";
import PageTitle from "../components/Helpers/PageTitle";

import Info from "./comp/Info";
import Payment from "./comp/Payment";
import dynamic from "next/dynamic";

const StepperComponent = dynamic(() => import("./comp/StepperComp"), {
  ssr: false,
});

const OdemeClient = (props) => {
  const { user } = props;
  const [steps, setSteps] = useState(0);
  const [userInfo, setUserInfo] = useState({});

  const renderStep = () => {
    switch (steps) {
      case 0:
        return (
          <Info setSteps={setSteps} setUserInfo={setUserInfo} user={user} />
        );
      case 1:
        return <Payment setSteps={setSteps} userInfo={userInfo} user={user} />;

      default:
        return null;
    }
  };
  const { basket } = UseCart();

  const cartTotal = () => {
    return basket
      .reduce((acc, item) => {
        if (item.indirim === true) {
          return acc + item.quantity * item.inprice;
        } else {
          return acc + item.quantity * item.price;
        }
      }, 0)
      .toFixed(0);
  };

  return (
    <>
      {basket?.length < 1 ? (
        <div className="cart-page-wrapper w-full">
          <div className="container-x mx-auto">
            <BreadcrumbCom
              paths={[
                { name: "Anasayfa", path: "/" },
                { name: "Ödeme", path: "/odeme" },
              ]}
            />
            <EmptyCardError />
          </div>
        </div>
      ) : (
        <div className="checkout-page-wrapper w-full bg-white pb-[60px]">
          <div className="w-full mb-5">
            <PageTitle
              title="Checkout"
              breadcrumb={[
                { name: "Anasayfa", path: "/" },
                { name: "Ödeme", path: "/odeme" },
              ]}
            />
          </div>
          <div className="checkout-main-content w-full">
            <div className="container-x mx-auto">
              <div className="w-full lg:flex lg:space-x-[30px]">
                <div className="lg:w-8/12 w-full">
                  <StepperComponent steps={steps} />
                  {renderStep()}
                </div>

                <div className="flex-1">
                  <h1 className="sm:text-2xl text-xl text-qblack font-medium mb-5">
                    Ödeme Özeti
                  </h1>

                  <div className="w-full px-10 py-[30px] border border-[#EDEDED]">
                    <div className="sub-total mb-6">
                      <div className=" flex justify-between mb-5">
                        <p className="text-[13px] font-medium text-qblack uppercase">
                          Ürünler
                        </p>
                        <p className="text-[13px] font-medium text-qblack uppercase">
                          Toplam
                        </p>
                      </div>
                      <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                    </div>
                    <div className="product-list w-full mb-[30px]">
                      <ul className="flex flex-col space-y-5">
                        {basket?.map((item) => (
                          <li key={item?.id}>
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="text-[15px] text-qblack mb-2.5">
                                  {item.name}
                                  <sup className="text-[13px] text-qgray ml-2 mt-2">
                                    x{item.quantity}
                                  </sup>
                                </h4>
                              </div>
                              <div>
                                <span className="text-[15px] text-qblack font-medium">
                                  {item.indirim === true
                                    ? item.inprice
                                    : item.price}
                                  ₺
                                </span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full h-[1px] bg-[#EDEDED]"></div>

                    <div className="w-full mt-[30px]">
                      <div className="sub-total mb-6">
                        <div className=" flex justify-between mb-5">
                          <div>
                            <span className="text-base font-medium text-qblack">
                              Kargo
                            </span>
                            <p className="text-xs text-qgraytwo mb-3 block">
                              Ücretsiz Kargo
                            </p>
                          </div>
                          <p className="text-[15px] font-medium text-qblack">
                            0₺
                          </p>
                        </div>
                        <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                      </div>
                    </div>

                    <div className="mt-[30px]">
                      <div className=" flex justify-between mb-5">
                        <p className="text-2xl font-medium text-qblack">
                          Toplam
                        </p>
                        <p className="text-2xl font-medium text-qred">
                          {cartTotal()}₺
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OdemeClient;
