"use client";

import BreadcrumbCom from "../../components/Common/BreadcrumbCom";
import ProductView from "./ProductView";
import ProductCard from "../../components/Helpers/Cards/ProductCard";

export default function ProductClient(props) {
  const { product, products } = props;

  return (
    <>
      <div className="single-product-wrapper w-full ">
        <div className="product-view-main-wrapper bg-white pt-[30px] w-full">
          {product !== null ? (
            <>
              <div className="breadcrumb-wrapper w-full ">
                <div className="container-x mx-auto">
                  <BreadcrumbCom
                    paths={[
                      { name: "Anasayfa", path: "/" },
                      {
                        name: product?.name,
                        path: `/${product?.Category?.slug}/${product?.slug}`,
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="w-full bg-white pb-[60px]">
                <div className="container-x mx-auto">
                  <ProductView product={product} />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full bg-white pb-[60px]">
                <div className="container-x mx-auto">
                  <div className="w-full flex flex-1 items-center justify-center text-center ">
                    Aradığınız Ürün Bulunmamaktadır.
                    <br /> Aşşağıdan ürün seçerek alışverişinize devam
                    edebilirsiniz...
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="related-product w-full bg-white">
          <div className="container-x mx-auto">
            <div className="w-full py-[60px]">
              <h5 className="sm:text-3xl text-xl font-600 text-qblacktext leading-none mb-[30px]">
                Buna Benzer Ürünler
              </h5>
              <div
                data-aos="fade-up"
                className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5"
              >
                {products?.slice(0, 4).map((item) => (
                  <div data-aos="fade-up" key={item.id}>
                    <ProductCard datas={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
