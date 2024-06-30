"use client";
import React, { useState } from "react";

import "./styles.css";
import { FaUser } from "react-icons/fa";

const OrderDetailClient = (props) => {
  const data = props.siparis;

  const mydate = new Date(data?.createdAt);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = mydate.toLocaleDateString("tr-TR", options);
  const formattedTime = mydate.toLocaleTimeString("tr-TR");
  const time = formattedDate + ", Saat " + formattedTime;

  return (
    <div className="flex flex-wrap">
      <div className="w-full flex flex-col">
        <h4 className="text-2xl font-bold mb-4">Sipariş Detayları</h4>
        <div className="grid grid-cols-2">
          <div className="w-full h-full">
            <ul>
              <li>
                Siparis Id : <span>{data?.id}</span>
              </li>

              <li>
                Adı : <span>{data?.user?.name}</span>
              </li>
              <li>
                Soyadı : <span>{data?.user?.surname}</span>
              </li>
              <li>
                Email : <span>{data?.user?.email}</span>
              </li>
              <li>
                Telefon : <span>{data?.user?.tel}</span>
              </li>
              <li>
                TC Kimlik : <span>{data?.user?.identityNumber}</span>
              </li>
              <li>
                Toplam Fiyatı : <span>{data?.amount.toFixed(2)}₺</span>
              </li>
              <li>
                Satın Alma Tarihi : <span>{time}</span>
              </li>
              <li>
                Kullanıcı Notu :
                <span className="break-words ">{data?.note}</span>
              </li>
              <li>
                ÖDEME DURUMU : <span>{data?.paymentStatus}</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className={`border-[3px]  min-h-32 min-w-96 flex flex-col pl-3 pt-4 gap-3 cursor-pointer  text-sm hover:bg-slate-200`}
            >
              <div className="flex items-center gap-3">
                <FaUser />
                <span>Fatura Adresi</span>
              </div>
              <div className="flex flex-col">
                <p className=" break-words mr-12 text-sm">
                  {data?.billadress?.address}
                </p>
                <p className="break-words my-1 mr-2 text-sm">
                  <span>{data?.billadress?.city}</span> /
                  <span>{data?.billadress?.country}</span>
                  <span className="ml-2">{data?.billadress?.zipCode}</span>
                </p>
              </div>
            </div>
            <div
              className={`border-[3px]  min-h-32 min-w-96 flex flex-col pl-3 pt-4 gap-3 cursor-pointer  text-sm hover:bg-slate-200`}
            >
              <div className="flex items-center gap-3">
                <FaUser />
                <span>Gönderme Adresi</span>
              </div>
              <div className="flex flex-col">
                <p className=" break-words mr-12 text-sm">
                  {data?.sendadress?.address}
                </p>
                <p className="break-words my-1 mr-2 text-sm">
                  <span>{data?.sendadress?.city}</span> /
                  <span>{data?.sendadress?.country}</span>
                  <span className="ml-2">{data?.sendadress?.zipCode}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  ID
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Ürün Adı
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Fiyatı
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.basket?.map((data) => {
                return (
                  <tr key={data?.id}>
                    <th className="px-6 whitespace-nowrap p-4 text-left cursor-pointer text-blue-600 ">
                      #{data?.id}
                    </th>
                    <td className="px-6 whitespace-nowrap p-4 ">
                      {data?.name}
                    </td>
                    <td className="px-6 whitespace-nowrap p-4 text-left">
                      {data?.price}₺
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailClient;
