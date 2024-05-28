"use client";

import Link from "next/link";
import Thumbnail from "./Thumbnail";
import InputCom from "../components/Helpers/InputCom";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterClient = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // try {
    //   await Swal.fire({
    //     icon: "success",
    //     title: "Hoşgeldiniz",
    //     showConfirmButton: false,
    //     timer: 1200,
    //   });
    //   router.push("/");
    //   router.refresh();
    // } catch (error) {
    //   setError(error);
    // }
  };
  return (
    <div className="login-page-wrapper w-full py-10">
      <div className="container-x mx-auto">
        <div className="lg:flex items-center relative">
          <div className="lg:w-[572px] w-full lg:h-[783px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
            <div className="w-full">
              <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
                <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
                  Kayıt Ol
                </h1>
                <div className="shape -mt-6">
                  <svg
                    width="354"
                    height="30"
                    viewBox="0 0 354 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                      stroke="#FFBB38"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                  <InputCom
                    placeholder="Adınız"
                    label="Adınız*"
                    name="name"
                    type="text"
                    inputClasses="!h-[50px]"
                    errors={errors}
                    register={register}
                    required="Adınızı Giriniz"
                  />

                  <InputCom
                    placeholder="Soyadı"
                    label="Soyadı*"
                    name="lastname"
                    type="text"
                    inputClasses="!h-[50px]"
                    errors={errors}
                    register={register}
                    required="Adınızı Giriniz"
                  />
                </div>
                <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                  <InputCom
                    placeholder="deneme@gmail.com"
                    label="Email*"
                    name="email"
                    type="email"
                    inputClasses="!h-[50px]"
                    errors={errors}
                    register={register}
                    required="E-mail Giriniz"
                  />

                  <InputCom
                    placeholder="0555 *********"
                    label="Telefon*"
                    name="tel"
                    type="text"
                    inputClasses="!h-[50px]"
                    errors={errors}
                    register={register}
                    required="Telefon Giriniz"
                  />
                </div>

                <div className="input-item mb-5">
                  <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                    Country*
                  </h6>
                  <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
                    <span className="text-[13px] text-qgraytwo">
                      Select Country
                    </span>
                    <span>
                      <svg
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z"
                          fill="#222222"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="input-item mb-5">
                  <InputCom
                    placeholder="Adress"
                    label="Adress*"
                    name="adress"
                    type="text"
                    inputClasses="!h-[50px]"
                    errors={errors}
                    register={register}
                    required="Adres Giriniz"
                  />
                </div>
                <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                  <div className="w-1/2">
                    <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                      Town / City*
                    </h6>
                    <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
                      <span className="text-[13px] text-qgraytwo">Maiyami</span>
                      <span>
                        <svg
                          width="11"
                          height="7"
                          viewBox="0 0 11 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z"
                            fill="#222222"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="w-full h-[50px] mb-5 sm:mb-0">
                      <InputCom
                        label="Postcode / ZIP*"
                        inputClasses="w-full h-full"
                        type="text"
                        placeholder="00000"
                      />
                    </div>
                  </div>
                </div>
                <div className="forgot-password-area mb-7">
                  <div className="remember-checkbox flex items-center space-x-2.5">
                    <button
                      onClick={() => console.log("HEY")}
                      type="button"
                      className="w-5 h-5 text-qblack flex justify-center items-center border border-light-gray"
                    >
                      {true && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                    <span
                      onClick={() => console.log("HEY")}
                      className="text-base text-black"
                    >
                      <span className="text-qblack">Üyelik sözleşmesini</span>{" "}
                      okudum, kabul ediyorum.
                    </span>
                  </div>
                </div>
                <div className="signin-area mb-3">
                  <div className="flex justify-center">
                    <button
                      type="sumbit"
                      className="black-btn text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                    >
                      <span>Kayıt Ol</span>
                    </button>
                  </div>
                </div>

                <div className="signup-area flex justify-center">
                  <p className="text-base text-qgraytwo font-normal">
                    Zaten Kayıtlı Mısınız?
                    <Link href="/login" className="ml-2 text-qblack">
                      Giriş Yap
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="flex-1 lg:flex hidden transform scale-60 xl:scale-100   xl:justify-center">
            <div
              className="absolute xl:-right-20 -right-[138px]"
              style={{ top: "calc(50% - 258px)" }}
            >
              <Thumbnail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterClient;
