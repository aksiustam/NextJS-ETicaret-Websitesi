"use client";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

import dynamic from "next/dynamic";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import InputCom from "@/app/(user)/components/Helpers/InputCom";
import updateProduct from "@/app/actions/Products/updateProduct";

const AdminProductClient = (props) => {
  const { product, allcategory } = props;
  const { category } = allcategory;

  const [cat, setCat] = useState(product?.Category?.id || null);
  const subcat =
    allcategory.subcat.filter((item) => item?.categoryId === cat) || [];

  const [quillValue, setQuillValue] = useState(product.quill);

  const [cimage, setCImage] = useState([]);
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: {
      name: product.name,
      desc: product.desc,
      price: product.price,
      inprice: product.inprice,
      category: product.categoryId,
      altcategory: product.subCategoryId,
      stock: product.stock,
    },
    shouldUnregister: true,
  });

  const onSubmit = async (data) => {
    let formData = {
      ...data,
      id: product.id,
      quill: quillValue,
    };

    const res = await updateProduct(formData);
    if (res === true) {
      await Swal.fire({
        icon: "success",
        title: "Başarıyla Güncellendi",
        showConfirmButton: false,
        timer: 1500,
      });
      setCImage([]);
    } else {
      Swal.fire({
        icon: "error",
        title: JSON.stringify(res.message),
      });
    }
    router.refresh();
  };
  useEffect(() => {
    const data = cimage.map((item) => {
      return { imageid: item.public_id, imageurl: item.secure_url };
    });
    setValue(`Image`, data);
  }, [setValue, cimage]);
  return (
    <section className="h-full w-full">
      <h4 className="text-2xl font-bold mb-4">Ürün Güncelle</h4>
      <form className=" w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mb-4 space-x-5">
          <div className="input-item mb-5 w-1/2 ">
            <InputCom
              placeholder="Ürün Adı"
              label="Ürün Adı*"
              name="name"
              type="text"
              inputClasses="h-[50px]"
              errors={errors}
              register={register}
              required="Ürün Adı Giriniz"
            />
          </div>
          <div className="input-item mb-5 w-1/2 ">
            <InputCom
              placeholder="Açıklama"
              label="Açıklama*"
              name="desc"
              type="text"
              inputClasses="h-[50px]"
              errors={errors}
              register={register}
              required="Ürün Açıklaması Giriniz"
            />
          </div>
        </div>
        <div className="flex mb-4 space-x-5">
          <div className="input-item mb-5 w-1/2 ">
            <InputCom
              placeholder="Fiyat"
              label="Fiyat* (Küsüratı Nokta ile yazın)"
              name="price"
              type="number"
              min={0.0}
              inputClasses="h-[50px]"
              errors={errors}
              register={register}
              required="Ürün Fiyatı Giriniz"
            />
          </div>
          <div className="input-item mb-5 w-1/2">
            <InputCom
              placeholder="İndirim Fiyatı"
              label="İndirim Fiyatı* (Küsüratı Nokta ile yazın)"
              name="inprice"
              type="number"
              min={0.0}
              errors={errors}
              register={register}
              required="Ürün indirimli fiyatını Giriniz"
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
              id="category"
              {...register("category", { required: true })}
              onChange={(e) => setCat(Number(e.target.value))}
              className="placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
              required
            >
              {category?.map((item) => (
                <option key={item?.id} value={Number(item?.id)}>
                  {item?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="input-item mb-5 w-1/2">
            <label
              htmlFor="Kategori"
              className="capitalize block text-qgray text-[13px] font-normal"
            >
              Alt Kategori*
            </label>
            <select
              name="category"
              id="altcategory"
              {...register("altcategory")}
              className="placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
            >
              {subcat?.map((item) => (
                <option key={item?.id} value={item?.id}>
                  {item?.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex mb-4 space-x-5">
          <div className="input-item mb-5 w-1/2 ">
            <InputCom
              placeholder="Stock Sayısı"
              label="Stock Sayısı*"
              name="stock"
              type="number"
              inputClasses="h-[50px]"
              errors={errors}
              register={register}
              required="Stock Sayısı Giriniz"
            />
          </div>
          <div className="input-item mb-5 w-1/2 ">
            <input hidden {...register(`Image`)} />
            <label className="mr-4 text-xs">
              Resim<span className="text-danger">*</span> (330x330)
            </label>
            <CldUploadWidget
              signatureEndpoint="/api/sign-cloudinary-params"
              onSuccess={(result) => {
                setCImage((prev) => {
                  const data = prev || [];
                  return [...data, { ...result?.info }];
                });
              }}
              uploadPreset="bicakciserkan_product"
            >
              {({ open }) => {
                function handleOnClick() {
                  open();
                }

                return (
                  <button
                    type="button"
                    className="blue-btn inline-flex space-x-2 items-center mt-1"
                    onClick={handleOnClick}
                  >
                    Resim Yükle
                  </button>
                );
              }}
            </CldUploadWidget>
          </div>
        </div>
        <div className="flex mb-4 space-x-5">
          {product?.images?.map((item) => (
            <div key={item?.id} className="w-32 h-32">
              <Image
                src={item?.imageurl}
                alt="Product image"
                width={150}
                height={150}
                loading="eager"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
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
                Ürün Güncelle
              </span>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AdminProductClient;
