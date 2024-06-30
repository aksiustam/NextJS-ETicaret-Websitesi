"use client";

import Link from "next/link";
import PageTitle from "../../components/Helpers/PageTitle";
import Image from "next/image";

const AboutUsClient = () => {
  return (
    <div className="about-page-wrapper w-full">
      <div className="title-area w-full">
        <PageTitle
          title="Hakkımızda"
          breadcrumb={[
            { name: "Anasayfa", path: "/" },
            { name: "Hakkımızda", path: "/hakkimizda" },
          ]}
        />
      </div>

      <div className="aboutus-wrapper w-full">
        <div className="container-x mx-auto">
          <div className="w-full min-h-[665px] lg:flex lg:space-x-12 items-center pb-10 lg:pb-0">
            <div className="md:w-[570px] w-full md:h-[560px] h-auto rounded overflow-hidden my-5 lg:my-0">
              <Image
                src={`/assets/images/hakkimizda.webp`}
                alt="Hakkımızda"
                width={1200}
                height={1200}
                loading="eager"
                className="w-full h-full"
              />
            </div>
            <div className="content flex-1">
              <h1 className="text-[24px] font-medium text-qblack mb-2.5">
                BIÇAKCI SERKAN - Gelenekten Geleceğe
              </h1>
              <p className="text-[15px] text-qgraytwo leading-7 mb-2.5">
                Merhaba, ben Serkan Şenol. Konya Akşehir doğumluyum ve
                çocukluğumdan beri bıçakçılığa tutkuyla bağlıyım. Bu mesleği 5
                yıldır profesyonel olarak icra ediyorum. Hevesimden miras kalan
                bu zanaatı, modern tekniklerle harmanlayarak, hem geleneksel hem
                de yenilikçi ürünler sunuyorum.
              </p>
              <p className="text-[15px] text-qgraytwo leading-7 mb-2.5">
                Tarihin zengin kılıç ve bıçakçılık kültüründen ilham alarak, her
                bıçağı titizlikle ve özenle seçiyorum alıyorum veya
                ürettiriyorum. Müşteri memnuniyetini ön planda tutarak, kaliteli
                ve dayanıklı bıçaklar sunmayı amaçlıyorum. Bıçaklarımız, hem
                günlük kullanım hem kampçılara ve avcılara özel hem de
                koleksiyon değeri taşıyan özel parçalar olarak büyük ilgi
                görüyor.
              </p>
              <p className="text-[15px] text-qgraytwo leading-7 mb-2.5">
                Bıçakcı Serkan olarak, bıçakçılık sanatını daha geniş kitlelere
                tanıtmayı ve bu değerli zanaatı yeni nesillere aktarmayı
                hedefliyoruz. Bizi tercih ettiğiniz için teşekkür ederiz.
              </p>

              <Link href="/iletisim">
                <div className="w-[121px] h-10">
                  <span className="yellow-btn">İletişim</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsClient;
