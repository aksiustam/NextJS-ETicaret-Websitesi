import RangeSlider from "react-range-slider-input";
import Checkbox from "../../components/Helpers/Checkbox";
import "react-range-slider-input/dist/style.css";
import Link from "next/link";
export default function ProductsFilter({
  category,
  volume,
  volumeHandler,
  className,
  filterToggle,
  filterToggleHandler,
}) {
  return (
    <>
      <div
        className={`filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] ${
          className || ""
        }  ${filterToggle ? "block" : "hidden lg:block"}`}
      >
        <div className="filter-subject-item pb-10 border-b border-qgray-border">
          <div className="subject-title mb-[30px]">
            <h4 className="text-black text-base font-500">Kategoriler</h4>
          </div>
          <div className="filter-items">
            <ul>
              {category?.map((item) => (
                <li key={item?.id}>
                  <Link
                    href={`/${item?.slug}`}
                    className="item flex justify-between items-center mb-4 px-3 py-1 rounded-full hover:bg-slate-200"
                  >
                    <div className="flex space-x-[14px] items-center">
                      <div>
                        <label
                          htmlFor="mobileLaptop"
                          className="text-xs font-black font-400 capitalize"
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
            <h4 className="text-black text-base font-500">Fiyat Aralığı</h4>
          </div>
          <div className="price-range mb-5">
            <RangeSlider
              value={volume}
              onInput={volumeHandler}
              min={10}
              max={1000}
            />
          </div>
          <p className="text-xs text-qblack font-400">
            Price: ${volume.min} - ${volume.max}
          </p>
        </div>
        <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
          <div className="subject-title mb-[30px]">
            <h4 className="text-black text-base font-500">Çeşitler</h4>
          </div>
          <div className="filter-items">
            <ul>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox id="apple" name="apple" />
                  </div>
                  <div>
                    <label
                      htmlFor="apple"
                      className="text-xs font-black font-400 capitalize"
                    >
                      apple
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
          <div className="subject-title mb-[30px]">
            <h4 className="text-black text-base font-500">Storage</h4>
          </div>
          <div className="filter-items">
            <div className="flex space-x-[5px] flex-wrap">
              <span
                className={` font-400 border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px] ${
                  true === "64GB"
                    ? "bg-qyellow text-qblack border-none"
                    : " text-qgray "
                }`}
              >
                64GB
              </span>
            </div>
          </div>
        </div>
        <div className="filter-subject-item pb-10 mt-10">
          <div className="subject-title mb-[30px]">
            <h4 className="text-black text-base font-500">Sizes</h4>
          </div>
          <div className="filter-items">
            <ul>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox id="sizeS" name="sizeS" />
                  </div>
                  <div>
                    <label
                      htmlFor="sizeS"
                      className="text-xs font-black font-400 capitalize"
                    >
                      s
                    </label>
                  </div>
                </div>
              </li>
            </ul>
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
