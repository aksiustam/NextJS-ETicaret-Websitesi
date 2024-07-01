import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function ProductsFilter({
  category,
  className,
  filterToggle,
  filterToggleHandler,
  setFilteredData,
}) {
  const [filter, setFilter] = useState({
    minPrice: 0,
    maxPrice: 5000,
  });

  useEffect(() => {
    setFilteredData({
      minprice: filter.minPrice || 0,
      maxprice: filter.maxPrice || 5000,
    });
  }, [setFilteredData, filter]);
  return (
    <>
      <div
        className={`filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] ${
          className || ""
        }  ${filterToggle ? "block" : "hidden lg:block"}`}
      >
        <div className="filter-subject-item pb-10 border-b border-qgray-border">
          <div className="subject-title mb-[30px]">
            <div className="text-black text-base font-500">Kategoriler</div>
          </div>
          <div className="filter-items">
            <ul>
              {category?.map((item) => (
                <li key={item?.id}>
                  <Link
                    href={`/${item?.slug}`}
                    className="item flex justify-between items-center mb-4 px-3 py-1 rounded-full hover:bg-slate-200 cursor-pointer"
                  >
                    <div className="flex space-x-[14px] items-center">
                      <div>
                        <label
                          htmlFor={item?.name}
                          className="text-xs font-black font-400 capitalize cursor-pointer"
                        >
                          {item?.name}
                        </label>
                      </div>
                    </div>
                    <div>
                      <span className="cursor-pointer">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect y="4" width="10" height="2" fill="#C4C4C4" />
                          <rect
                            x="6"
                            width="10"
                            height="2"
                            transform="rotate(90 6 0)"
                            fill="#C4C4C4"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
          <div className="subject-title mb-[30px]">
            <div className="text-black text-base font-500">Fiyat Aralığı</div>
          </div>
          <div className="price-range mb-5">
            <RangeSlider
              min={0}
              max={5000}
              value={[filter?.minPrice, filter?.maxPrice]}
              onInput={(values) => {
                setFilter((prev) => ({
                  ...prev,
                  minPrice: values[0],
                  maxPrice: values[1],
                }));
              }}
            />
          </div>
          <p className="text-xs text-qblack font-400">
            Fiyat: ₺{filter?.minPrice} - ₺{filter?.maxPrice}
          </p>
          <div className="flex justify-center items-center mt-4 gap-3 ">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                ₺
              </span>
              <input
                type="number"
                id="minPrice"
                min={0}
                max={5000}
                value={filter?.minPrice}
                onChange={(e) =>
                  setFilter((prev) => ({
                    ...prev,
                    minPrice: e.target.value,
                  }))
                }
                className="pl-7 pr-4 py-1 border rounded-md w-24 text-sm"
              />
            </div>
            <div>&</div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                ₺
              </span>
              <input
                type="number"
                id="maxPrice"
                min={0}
                max={5000}
                value={filter?.maxPrice}
                onChange={(e) =>
                  setFilter((prev) => ({
                    ...prev,
                    maxPrice: e.target.value,
                  }))
                }
                className="pl-7 pr-4 py-1 border rounded-md w-[99px] text-sm"
              />
            </div>
          </div>
        </div>

        <button
          onClick={filterToggleHandler}
          type="button"
          className="w-10 h-10 fixed top-5 right-5 z-50 rounded  lg:hidden flex justify-center items-center border border-qred text-qred"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
