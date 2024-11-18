import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});
import localFont from "next/font/local";
const satoshi = localFont({
  src: [
    { path: "../fonts/satoshi-light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/satoshi-regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/satoshi-medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/satoshi-bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/satoshi-black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
});
export default function TopSellingProducts() {
  return (
    <>
      <h1
        className={`${poppins.className} font-bold text-[32px] leading-[38.4px] text-center md:mt-20 uppercase md:text-5xl md:leading-[57.6px] mt-16 `}
      >
        Top selling
      </h1>
      <div className="flex md:mx-[100px] gap-8 mt-9 ml-4 overflow-hidden">
        {/* 1st product  */}
        <div className={`${satoshi.className} flex-shrink-0`}>
          {/* product image */}
          <img
            src="/assets/productFive.png"
            alt="Verticle Striped Shirt"
            className="md:rounded-[20px] md:h-[298px] md:w-[295px] h-[200.01px] w-[198px] rounded-[13.42px]"
          />
          {/* product name  */}
          <h3 className="font-bold md:text-xl text-base leading-[21.6px] md:leading-[27px] md:mt-5 mt-4">
            Verticle Striped Shirt
          </h3>
          {/* ratings in stars*/}
          <div className="flex md:gap-[20px] md:h-[19px] md:w-[160.7px] w-[136.11px] h-[16px] md:mt-3 mt-1 gap-[86px] ">
            <div className="flex md:gap-[5.31px] gap-[4.44px] h-[95.11px] w-[15.47px] md:h-[18.49px] md:w-[104px]">
              <img
                src="/assets/starFull.png"
                alt="ratings"
                className="md:h-[18.49px] md:w-[18.49px] h-[15.47px] w-[15.47px]"
              />
              <img
                src="/assets/starFull.png"
                alt="ratings"
                className="md:h-[18.49px] md:w-[18.49px] h-[15.47px] w-[15.47px]"
              />
              <img
                src="/assets/starFull.png"
                alt="ratings"
                className="md:h-[18.49px] md:w-[18.49px] h-[15.47px] w-[15.47px]"
              />
              <img
                src="/assets/starFull.png"
                alt="ratings"
                className="md:h-[18.49px] md:w-[18.49px] h-[15.47px] w-[15.47px]"
              />
              <img
                src="/assets/starFull.png"
                alt="ratings"
                className="md:h-[18.49px] md:w-[18.49px] h-[15.47px] w-[15.47px]"
              />
            </div>
            {/* ratings in num */}
            <p className="font-normal md:text-sm md:leading-[18.9px] flex md:gap-[2px] leading-[16.2px] text-xs">
              5.0/{" "}
              <span className="font-normal md:text-sm md:leading-[18.9px] text-[#00000099] leading-[16.2px] text-xs">
                {" "}
                5
              </span>
            </p>
          </div>
          {/* product price  */}
          <div className="flex md:gap-[12px] md:mt-[10px] mt-1 gap-[2px] items-center">
            <p className="font-bold md:text-2xl md:leading-[32.4px] md:w-[55px] md:h-[32px] text-xl leading-[27px] w-[51px] h-[27px] ">
              $212
            </p>
            {/*before discount price  */}
            <p className="font-bold md:text-2xl md:leading-[32.4px] md:w-[55px] md:h-[32px] text-xl leading-[27px] w-[51px] h-[27px]  text-[#00000066] line-through">
              $232
            </p>
            {/* discount rate  */}
            <p className="bg-[#FF33331A] text-[#FF3333] rounded-[62px] md:h-[28px] h-[20px] md:w-[58px] w-[42px] md:py-[6px] py-[4px] md:px-[14px] px-[10px] md:text-xs text-[10px] font-medium md:leading-[16.2px] leading-[13.5px]">
              -20%
            </p>
          </div>
        </div>
        {/* 2nd product  */}
        <div
          className={`${satoshi.className} flex-shrink-0 max-w-[390px] overflow-hidden sm:max-w-full`}
        >
          {/* product image */}
          <img
            src="/assets/productSix.png"
            alt="Courage Graphic T-shirt"
            className="md:rounded-[20px] md:h-[298px] md:w-[295px] h-[200.01px] w-[198px] rounded-[13.42px]"
          />
          {/* product name  */}
          <h3 className="font-bold md:text-xl text-base leading-[21.6px] md:leading-[27px] md:mt-5 mt-4">
            Courage Graphic T-shirt
          </h3>
          {/* ratings in stars*/}
          <div className="flex md:gap-[13px] md:h-[19px] md:w-[137.9px] gap-16 w-[116.2px] h-[16px] md:mt-3 mt-1">
            <div className="flex md:gap-[5.5px] gap-[4.44px] h-[87px] w-[15.47px] md:h-[18.49px] md:w-[104px]">
              <img
                src="/assets/starFull.png"
                alt="ratings"
                className="md:h-[18.49px] md:w-[18.49px] h-[15.47px] w-[15.47px]"
              />
              <img
                src="/assets/starFull.png"
                alt="ratings"
                className="md:h-[18.49px] md:w-[18.49px] h-[15.47px] w-[15.47px]"
              />
              <img
                src="/assets/starFull.png"
                alt="ratings"
                className="md:h-[18.49px] md:w-[18.49px] h-[15.47px] w-[15.47px]"
              />
              <img
                src="/assets/starFull.png"
                alt="ratings"
                className="md:h-[18.49px] md:w-[18.49px] h-[15.47px] w-[15.47px]"
              />
            </div>
            {/* ratings in num */}
            <p className="font-normal md:text-sm md:leading-[18.9px] flex md:gap-[2px] leading-[16.2px] text-xs">
              4.0/{" "}
              <span className="font-normal md:text-sm md:leading-[18.9px] text-[#00000099] leading-[16.2px] text-xs">
                5
              </span>
            </p>
          </div>
          {/* product price  */}
          <p className="font-bold text-xl md:text-2xl leading-[27px] md:leading-[32.4px] w-[55px] h-[32px] md:mt-[10px] mt-1">
            $145
          </p>
        </div>
        {/* 3rd product  */}
        <div className={`${satoshi.className} hidden md:block`}>
          {/* product image */}
          <img
            src="/assets/productSeven.png"
            alt="Loose Fit Bermuda Shorts"
            className="rounded-[20px] h-[298px] w-[295px]"
          />
          {/* product name  */}
          <h3 className="font-bold text-xl leading-[27px] mt-5">
            Loose Fit Bermuda Shorts
          </h3>
          {/* ratings in stars*/}
          <div className="flex gap-[13px] h-[19px] w-[113.09px] mt-3">
            <div className="flex gap-[5.5px] h-[18.49px] w-[104px]">
              <img
                src="/assets/starFull.png"
                alt="ratings"
                className="h-[18.49px] w-[18.49px]"
              />
              <img
                src="/assets/starFull.png"
                alt="ratings"
                className="h-[18.49px] w-[18.49px]"
              />
              <img
                src="/assets/starFull.png"
                alt="ratings"
                className="h-[18.49px] w-[18.49px]"
              />
            </div>
            {/* ratings in num */}
            <p className="font-normal text-sm leading-[18.9px] flex gap-[2px]">
              3.0/
              <span className="font-normal text-sm leading-[18.9px] text-[#00000099]">
                5
              </span>
            </p>
          </div>
          {/* product price  */}
          <p className="font-bold text-2xl leading-[32.4px] w-[55px] h-[32px] mt-[10px]">
            $45
          </p>
        </div>
        {/* 4th product  */}
        <div className={`${satoshi.className}  hidden md:block`}>
          {/* product image */}
          <img
            src="/assets/productEight.png"
            alt="Faded Skinny Jeans"
            className="rounded-[20px] h-[298px] w-[295px]"
          />
          {/* product name  */}
          <h3 className="font-bold text-xl leading-[27px] mt-5">
            Faded Skinny Jeans
          </h3>
          {/* ratings in stars*/}
          <div className="flex gap-[13px] h-[19px] w-[150px] mt-3">
            <div className="flex gap-[5.5px] h-[18.49px] w-[104px]">
              <img
                src="/assets/starFull.png"
                alt="ratings"
                className="h-[18.49px] w-[18.49px]"
              />
              <img
                src="/assets/starFull.png"
                alt="ratings"
                className="h-[18.49px] w-[18.49px]"
              />
              <img
                src="/assets/starFull.png"
                alt="ratings"
                className="h-[18.49px] w-[18.49px]"
              />
              <img
                src="/assets/starFull.png"
                alt="ratings"
                className="h-[18.49px] w-[18.49px]"
              />
              <img
                src="/assets/starHalf.png"
                alt="ratings"
                className="h-[16.72px] w-[8.79px]"
              />
            </div>
            {/* ratings in num */}
            <p className="font-normal text-sm leading-[18.9px] flex gap-[2px]">
              4.5/{" "}
              <span className="font-normal text-sm leading-[18.9px] text-[#00000099]">
                {" "}
                5
              </span>
            </p>
          </div>
          {/* product price  */}
          <p className="font-bold text-2xl leading-[32.4px] w-[55px] h-[32px] mt-[10px]">
            $210
          </p>
        </div>
      </div>
      {/* button div  */}
      <div className="flex justify-center items-center">
        <button
          className={`md:w-[218px] md:h-[52px] w-[358px] h-[46px] rounded-[62px] py-4 px-[54px] border-[1px] border-[#0000001A] md:text-base text-sm font-medium md:leading-[21.6px] leading-[18.9px] hover:bg-black hover:text-white transition-colors duration-300  ${satoshi.className} md:mt-10 mt-6`}
        >
          View All
        </button>
      </div>
    </>
  );
}
