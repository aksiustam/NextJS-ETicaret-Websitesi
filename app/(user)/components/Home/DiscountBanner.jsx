export default function DiscountBanner() {
  return (
    <div
      className={`discount-banner w-full h-[310px]  flex justify-center items-center !bg-cover !bg-[70%] lg:!bg-[25%]`}
      style={{
        background: `url(/assets/images/alt-banner.webp) no-repeat`,
      }}
    >
      <div className="container-x ml-12 md:ml-auto mr-[35%]">
        <div className="best-services w-full  flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10">
          <div className="item">
            <div className="flex space-x-5 items-center">
              <div>
                <span>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1h4.636v23.182H35M8.728 35a3.09 3.09 0 1 0 0-6.182 3.09 3.09 0 0 0 0 6.182Zm23.179 0a3.09 3.09 0 1 0 0-6.182 3.09 3.09 0 0 0 0 6.182Z"
                      stroke="#1868D5"
                    />
                    <path
                      d="M34.998 1H11.816v17h23.182zM11.816 7.182h23.182"
                      stroke="#1868D5"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p className="text-white text-[15px] font-700 tracking-wide mb-1">
                  Bedava Kargo
                </p>
                <p className="text-sm text-qblue-white text-nowrap md:text-wrap">
                  3000₺ ve üzerine bedava
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex space-x-5 items-center">
              <div>
                <span>
                  <svg
                    width="32"
                    height="34"
                    viewBox="0 0 32 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
                      stroke="#1868D5"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M30.7 2L29.5 10.85L20.5 9.65"
                      stroke="#1868D5"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p className="text-white text-[15px] font-700 tracking-wide mb-1">
                  Kolay İade
                </p>
                <p className="text-sm text-qblue-white text-nowrap md:text-wrap">
                  30 gün içinde iade etme
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex space-x-5 items-center">
              <div>
                <span>
                  <svg
                    width="32"
                    height="35"
                    viewBox="0 0 32 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1h6m18 12h1.5c2.55 0 4.5-1.95 4.5-4.5V1h-6m-9 27v-6m0 0c-4.95 0-9-4.05-9-9V1h18v12c0 4.95-4.05 9-9 9Zm9 12H7c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6Z"
                      stroke="#1868D5"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p className="text-white text-[15px] font-700 tracking-wide mb-1">
                  Gerçek Kalite
                </p>
                <p className="text-sm text-qblue-white text-nowrap md:text-wrap">
                  Müşterilerimizin %90&apos;ı Memnun
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
