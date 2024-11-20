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

export default function Hero() {
  return (
    <>
      <div className=" md:bg-[url('/assets/heroBgHr.png')] bg-no-repeat bg-cover md:h-[663px] md:relative">
        <div className="w-auto h-[470px] top-[98px] bg-[#F2F0F1] md:bg-transparent">
          <h1
            className={`${poppins.className} w-[315px] h-[93px] pt-[55px] ml-4 text-4xl leading-[34px] font-extrabold md:w-[577px] md:h-[173px] md:ml-[100px] md:leading-[64px] md:text-[64px] md:font-bold md:pt-20`}
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p
            className={`w-[358px] h-[50px] font-normal text-base text-[#00000099] leading-5 flex justify-center items-start m-4 ${satoshi.variable} mt-20 md:h-[33px] md:w-[545px] md:ml-[100px]  md:mt-28`}
          >
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button
            className={`bg-black w-[358px] h-[52px] mt-5 mx-4 rounded-[62px] py-[10px] px-[52px] ${satoshi.variable} text-white md:w-[210px] md:ml-[100px] md:mt-7 hover:bg-white hover:text-black border-2 border-black transition duration-300 box-border`}
          >
            Shop Now
          </button>
          <div
            className={`flex justify-between h-[52px] w-[278px] mx-14 ${satoshi.variable} mt-6 md:h-[74px] md:w-[596px] md:ml-[100px] md:gap-8 md:mt-14`}
          >
            <div className="h-12 w-[118px] md:w-[141px] md:h-[74px]">
              <h1 className="font-bold leading-[32.4px] text-2xl md:text-[40px] md:leading-[54px]">
                200+
              </h1>
              <p className="text-[#00000099] font-normal leading-[22px] text-xs md:text-base md:h-[22px] md:w-[157px]">
                International Brands
              </p>
            </div>
            <div className="h-full w-[1px] bg-[#0000001A]"></div>
            <div className="h-12 w-[118px] md:w-[156px] md:h-[74px]">
              <h1 className="font-bold leading-[32.4px] text-2xl  md:text-[40px] md:leading-[54px]">
                2,000+
              </h1>
              <p className="text-[#00000099] font-normal leading-[22px] text-xs md:text-base md:h-[22px] md:w-[157px]">
                High-Quality Products
              </p>
            </div>
            <div className="hidden md:block md:h-full md:w-[1px] md:bg-[#0000001A]"></div>
            <div className="hidden md:block md:w-[171px] md:h-[74px]">
              <h1 className=" text-[40px] leading-[54px] font-bold">30,000+</h1>
              <p className="text-[#00000099] font-normal text-base leading-[22px] h-[22px]">
                Happy Customers
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center my-6 md:hidden">
            <div className="h-12 w-[103px]">
              <h1 className="font-bold leading-[32.4px] text-2xl">30,000+</h1>
              <p className="text-[#00000099] font-normal leading-[22px] text-xs">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[url('/assets/heroBg.png')] h-[448px] bg-no-repeat bg-cover relative md:hidden">
          <img
            src="/assets/sparkle.png"
            alt="Sparkle decoration right"
            className="absolute h-[76px] w-[76px] left-[293px] top-10"
          />
          <img
            src="/assets/sparkle.png"
            alt="Sparkle decoration left"
            className="absolute h-11 w-11 left-[27px] top-[150px]"
          />
        </div>
        {/* sparkles for bigger screen size*/}
        <img
          src="/assets/sparkle.png"
          alt="Sparkle decoration right"
          className="hidden md:block md:absolute md:h-[104px] md:w-[104px] md:left-[1255px] md:top-[70px]"
        />
        <img
          src="/assets/sparkle.png"
          alt="Sparkle decoration left"
          className="hidden md:block md:absolute md:h-[56px] md:w-[56px] md:left-[750px] md:top-[285px]"
        />
      </div>
    </>
  );
}
