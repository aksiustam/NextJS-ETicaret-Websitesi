import Image from "next/image";
import Link from "next/link";
export default function Banner({ className, settings, allcategory }) {
  const data = settings?.banner;
  const { category } = allcategory;

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
                <Link href={`/${category[0]?.slug}`}>
                  <Image
                    src={data?.banner?.imageurl}
                    alt="Biçakcı Serkan Banner"
                    width={1200}
                    height={1200}
                    className="w-full h-full object-contain"
                  />
                </Link>
              </div>

              <div
                data-aos="fade-left"
                className="w-1/2 flex xl:flex-col flex-row  xl:space-y-[30px] h-full relative"
              >
                <Link href={`/${category[1]?.slug}`}>
                  <Image
                    src={data?.bannerb?.imageurl}
                    alt="Biçakcı Serkan Banner-2"
                    width={1200}
                    height={1200}
                    className="w-full h-full object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
