"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import "react-quill/dist/quill.snow.css";

import setProduct from "@/app/actions/Products/setProduct";
import { useRouter } from "next/navigation";
import InputCom from "@/app/(user)/components/Helpers/InputCom";

const ProductAddClient = (props) => {
  const [quillValue, setQuillValue] = useState("");

  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    const formData = { ...data, quill: quillValue };
    const res = await setProduct(formData);
    if (res === true)
      Swal.fire({
        icon: "success",
        title: "Başarıyla Eklendi",
        showConfirmButton: false,
        timer: 1500,
      });
    else {
      Swal.fire({
        icon: "error",
        title: JSON.stringify(res.message),
      });
    }
    router.refresh();
  };

  const category = ["hey", "hey1", "hey2", "hey3"];
  return (
    <section className="h-full w-full">
      <h4 className="text-2xl font-bold mb-4">ÜRÜN EKLE</h4>
      <form className=" w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mb-4 space-x-5">
          <div className="input-item mb-5 w-1/2 ">
            <InputCom
              placeholder="Ürün Adı"
              label="Ürün Adı*"
              name="name"
              type="text"
              inputClasses="h-[50px]"
              {...register("name", {
                required: "Ürün Adı Giriniz",
              })}
              required
            />
          </div>
          <div className="input-item mb-5 w-1/2 ">
            <InputCom
              placeholder="Açıklama"
              label="Açıklama*"
              name="desc"
              type="text"
              inputClasses="h-[50px]"
              {...register("name", {
                required: "Ürün Adı Giriniz",
              })}
              required
            />
          </div>
        </div>
        <div className="flex  mb-4 space-x-5">
          <div className="input-item mb-5 w-1/2 ">
            <InputCom
              placeholder="Ürün Adı"
              label="Ürün Adı*"
              name="name"
              type="text"
              inputClasses="h-[50px]"
              {...register("name", {
                required: "Ürün Adı Giriniz",
              })}
              required
            />
          </div>
          <div className="input-item mb-5 w-1/2">
            <InputCom
              placeholder="Açıklama"
              label="Açıklama*"
              name="desc"
              type="text"
              inputClasses="h-[50px]"
              {...register("name", {
                required: "Ürün Adı Giriniz",
              })}
              required
            />
          </div>
        </div>
        <div className="flex  mb-4 space-x-5">
          <div className="input-item mb-5 w-1/2 ">
            <label
              htmlFor="Kategori"
              className="capitalize block text-qgray text-[13px] font-normal"
            >
              Kategori*
            </label>
            <select
              name="category"
              id="p_gender"
              {...register("gender", { required: true })}
              className=" placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
              required
            >
              <option value="uni">Unisex</option>
              <option value="man">Erkek</option>
              <option value="woman">Bayan</option>
              <option value="manchild">Erkek Çocuk</option>
              <option value="womanchild">Kız Çocuk</option>
            </select>
          </div>
          <div className="input-item mb-5 w-1/3"></div>
        </div>

        <div className="mb-4">
          <ReactQuill
            theme="snow"
            value={quillValue}
            onChange={setQuillValue}
            modules={{
              toolbar: [
                [{ font: [] }],
                [{ size: [] }],
                [{ color: [] }, { background: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" },
                ],

                ["link", "image", "video"],
                ["clean"],
              ],
            }}
          />
        </div>

        <div className="flex w-full">
          <div className="w-[119px] h-10 cursor-pointer">
            <button
              type="submit"
              className="yellow-btn inline-flex space-x-2 items-center"
            >
              <span className="text-sm font-600 tracking-wide leading-7">
                Ürün Ekle
              </span>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProductAddClient;
