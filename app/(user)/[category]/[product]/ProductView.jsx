import { useState } from "react";
import Image from "next/image";
import UseCart from "@/hooks/useCart";
import Swal from "sweetalert2";

export default function ProductView({ className, product }) {
  const [src, setSrc] = useState(product?.images[0]?.imageurl);

  const [quantity, setQuantity] = useState(1);
  const { addToBasket } = UseCart();
  const addBasket = () => {
    if (!product) {
      return;
    }
    if (quantity <= product.stock) {
      const data = {
        id: product.id,
        name: product.name,
        catslug: product.Category.slug,
        slug: product.slug,
        price: product.price,
        inprice: product.inprice,
        indirim: product.indirim,
        quantity: quantity,
        image: product.images[0].imageurl,
      };

      addToBasket(data);
      Swal.fire({
        icon: "success",
        title: "Sepete Eklendi",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Stocklarda Kalmadı",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div
      className={`product-view w-full lg:flex justify-between ${
        className || ""
      }`}
    >
      <div data-aos="fade-right" className="lg:w-1/2 xl:mr-[70px] lg:mr-[50px]">
        <div className="w-full">
          <div className="w-full h-[600px] border border-qgray-border flex justify-center items-center overflow-hidden relative mb-3">
            <Image
              src={src}
              alt={product?.name}
              width={1200}
              height={1200}
              className="object-contain"
            />

            <div className="w-[80px] h-[80px] rounded-full bg-qyellow text-qblack flex justify-center items-center text-xl font-medium absolute left-[30px] top-[30px]">
              <span>-50%</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {product?.images &&
              product?.images?.length > 0 &&
              product?.images?.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSrc(img?.imageurl)}
                  className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer"
                >
                  <Image
                    src={img?.imageurl}
                    alt={product?.name}
                    width={600}
                    height={600}
                    className={`w-full h-full object-contain ${
                      src !== img?.imageurl ? "opacity-80" : ""
                    }`}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="product-details w-full mt-10 lg:mt-0">
          <h2
            data-aos="fade-up"
            className="text-qgray text-xs font-normal uppercase tracking-wider mb-2 inline-block"
          >
            {product?.Category?.name}
          </h2>
          <h1
            data-aos="fade-up"
            className="text-xl font-medium text-qblack mb-4"
          >
            {product?.name}
          </h1>

          <div data-aos="fade-up" className="flex space-x-2 items-center mb-7">
            {product?.indirim === true ? (
              <>
                <span className="text-sm font-500 text-qgray line-through mt-2">
                  {product?.price}₺
                </span>
                <span className="text-2xl font-500 text-qred">
                  {product?.inprice}₺
                </span>
              </>
            ) : (
              <>
                <span className="text-2xl font-500 text-qred">
                  {product?.price}₺
                </span>
              </>
            )}
          </div>

          <h3
            data-aos="fade-up"
            className="text-qgray text-sm text-normal mb-[30px] leading-7"
          >
            {product?.desc}
          </h3>

          <div
            data-aos="fade-up"
            className="quantity-card-wrapper w-full flex items-center h-[50px] space-x-[10px] mb-[30px]"
          >
            <div className="w-[120px] h-full px-[26px] flex items-center border border-qgray-border">
              <div className="flex justify-between items-center w-full">
                <button
                  onClick={() =>
                    setQuantity((prev) => {
                      if (prev <= 1) {
                        return 1;
                      } else {
                        return prev - 1;
                      }
                    })
                  }
                  type="button"
                  className="text-base text-qgray"
                >
                  -
                </button>
                <span className="text-qblack">{quantity}</span>
                <button
                  onClick={() =>
                    setQuantity((prev) => {
                      if (prev >= 10) {
                        return 10;
                      } else {
                        return prev + 1;
                      }
                    })
                  }
                  type="button"
                  className="text-base text-qgray"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex-1 h-full">
              <button
                type="button"
                className="black-btn text-sm font-semibold w-full h-full"
                onClick={addBasket}
              >
                Sepete Ekle
              </button>
            </div>
          </div>

          <div data-aos="fade-up" className="mb-[20px]">
            <p className="text-[13px] text-qgray leading-7">
              <span className="text-qblack">Alt Kategori :</span>{" "}
              {product?.SubCategory?.name}
            </p>

            <p className="text-[13px] text-qgray leading-7">
              <span className="text-qblack">Ürün Kodu:</span> KE-91039
            </p>
          </div>

          <div data-aos="fade-up" className="w-full tab-content-item">
            <div
              className="product_description"
              dangerouslySetInnerHTML={{ __html: product?.quill }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
