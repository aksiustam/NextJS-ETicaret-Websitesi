"use client";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import { useRouter } from "next/navigation";
import setBannerSettings from "@/app/actions/Settings/setBannerSettings";
const SettingsClient = () => {
  const { handleSubmit } = useForm();
  const [image, setImage] = useState(null);
  const [imageb, setImageB] = useState(null);

  const router = useRouter();
  const onSubmit = async () => {
    let formData = {
      banner:
        image !== null
          ? { imageid: image.public_id, imageurl: image.secure_url }
          : null,
      bannerb:
        imageb !== null
          ? { imageid: imageb.public_id, imageurl: imageb.secure_url }
          : null,
    };

    const res = await setBannerSettings(formData);
    if (res === true) {
      await Swal.fire({
        icon: "success",
        title: "Başarıyla Kaydedildi",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: res.message,
      });
    }
    router.refresh();
  };

  return (
    <>
      <form className=" mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full h-full -ml-2">
          <div className="w-full">
            <div className="text-red-600 underline mb-2">
              Resimleri Yükledikten sonra Lütfen Kaydet e Basınız...{" "}
            </div>
          </div>
          <div className="flex flex-wrap -ml-2 py-4 px-4 bg-white shadow-xl">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-12 h-12">
              <label className="mr-4 text-nowrap">
                Banner Resmi<span className="text-danger">*</span> (580x550)
              </label>
              <CldUploadWidget
                signatureEndpoint="/api/sign-cloudinary-params"
                onSuccess={(result) => {
                  setImage(result?.info);
                }}
                uploadPreset="bicakciserkan_set"
                options={{
                  maxFiles: 1,
                }}
              >
                {({ open }) => {
                  function handleOnClick() {
                    setImage(null);
                    open();
                  }

                  return (
                    <button
                      type="button"
                      className="blue-btn inline-flex space-x-2 items-center"
                      onClick={handleOnClick}
                    >
                      Banner Resmi Yükle
                    </button>
                  );
                }}
              </CldUploadWidget>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-12 h-12">
              <label className="mr-4 text-nowrap">
                Banner-2 Resmi<span className="text-danger">*</span> (580x550)
              </label>
              <CldUploadWidget
                signatureEndpoint="/api/sign-cloudinary-params"
                onSuccess={(result) => {
                  setImageB(result?.info);
                }}
                uploadPreset="bicakciserkan_set"
                options={{
                  maxFiles: 1,
                }}
              >
                {({ open }) => {
                  function handleOnClick() {
                    setImageB(null);
                    open();
                  }

                  return (
                    <button
                      type="button"
                      className="blue-btn inline-flex space-x-2 items-center"
                      onClick={handleOnClick}
                    >
                      Banner-2 Resmi Yükle
                    </button>
                  );
                }}
              </CldUploadWidget>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 flex items-center justify-center">
              <div className="w-[319px] h-10 cursor-pointer">
                <button
                  type="submit"
                  className="yellow-btn inline-flex space-x-2 items-center"
                >
                  <span className="text-sm font-600 tracking-wide leading-7">
                    Kaydet
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SettingsClient;
