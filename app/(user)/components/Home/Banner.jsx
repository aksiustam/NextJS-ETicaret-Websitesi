import Image from "next/image";
export default function Banner({ className, settings }) {
  const data = settings?.banner;

  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full">
            <div className="banner-card flex items-center justify-center xl:space-x-[30px] xl:h-[620px]  mb-[30px]">
              <div
                data-aos="fade-right"
                className="w-1/2 flex xl:flex-col flex-row xl:space-y-[30px] h-full relative"
              >
                <Image
                  src={data?.banner?.imageurl}
                  alt="Biçakcı Serkan Banner"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-contain"
                />
              </div>

              <div
                data-aos="fade-left"
                className="w-1/2 flex xl:flex-col flex-row  xl:space-y-[30px] h-full relative"
              >
                <Image
                  src={data?.bannerb?.imageurl}
                  alt="Biçakcı Serkan Banner-2"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
