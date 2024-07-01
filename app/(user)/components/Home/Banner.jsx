"use client";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
export default function Banner({ className, settings, allcategory }) {
  const data = settings?.banner;
  const { category } = allcategory;
  let slidersettings = {
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 200,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  const images = Array.from({ length: 52 }, (_, i) => `image${i + 1}.jpg`);

  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full">
            <div className="banner-card grid grid-cols-1 lg:grid-cols-2 gap-3 xl:h-[630px] mb-[30px]">
              <div data-aos="fade-right" className="w-full mb-4 relative">
                <Slider {...slidersettings}>
                  <Link href={`/${category[0]?.slug}`}>
                    <Image
                      src={data?.banner?.imageurl}
                      alt="Biçakcı Serkan Banner"
                      width={1200}
                      height={1200}
                      loading="eager"
                      className="w-full h-full object-contain"
                    />
                  </Link>
                  <Link href={`/${category[1]?.slug}`}>
                    <Image
                      src={data?.bannerb?.imageurl}
                      alt="Biçakcı Serkan Banner-2"
                      width={1200}
                      height={1200}
                      loading="eager"
                      className="w-full h-full object-contain"
                    />
                  </Link>
                </Slider>
              </div>
              <div data-aos="fade-left" className="w-full relative">
                <PhotoProvider>
                  <Slider {...slidersettings}>
                    {images.map((item, index) => (
                      <PhotoView
                        src={`/assets/images/sizdengelenler/${item}`}
                        key={index}
                      >
                        <Image
                          src={`/assets/images/sizdengelenler/${item}`}
                          alt="Biçakcı Serkan Sizden Gelenler"
                          width={1200}
                          height={1200}
                          loading="eager"
                          className="w-full h-full object-contain"
                        />
                      </PhotoView>
                    ))}
                  </Slider>
                </PhotoProvider>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center mb-6">
            <div
              className="px-4 py-2 bg-gray-50 shadow rounded"
              data-aos="fade-top"
            >
              <h1 className="text-2xl font-bold text-[#ffee00] text-center text-shadow-xl">
                Bıçakcı Serkan Av ve Bıçak Hediyelik Kullanımlık Ürünler
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
