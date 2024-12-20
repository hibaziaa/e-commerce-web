import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function Products() {
  return (
    <>
      <h1
        className={`${poppins.className} font-bold text-[32px] leading-[38.4px] text-center md:mt-20 uppercase md:text-5xl md:leading-[57.6px] mt-16 `}
      >
        New Arrivals
      </h1>
      <div className="flex md:mx-[100px] gap-8 mt-9 ml-4 overflow-hidden">
        {/* 1st product  */}
        <div className={` flex-shrink-0`}>
          {/* product image */}
          <img
            src="/assets/productOne.png"
            alt="T-shirt With Tape Details"
            className="md:rounded-[20px] md:h-[298px] md:w-[295px] h-[200.01px] w-[198px] rounded-[13.42px]"
          />
          {/* product name  */}
          <h3 className="font-bold md:text-xl text-base leading-[21.6px] md:leading-[27px] md:mt-5 mt-4">
            T-shirt With Tape Details
          </h3>
          {/* ratings in stars*/}
          <div className="flex md:gap-[13px] md:h-[19px] md:w-[150px] w-[127px] h-[16px] md:mt-3 mt-1 gap-20">
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
              <img
                src="/assets/starHalf.png"
                alt="ratings"
                className="md:h-[16.72px] md:w-[8.79px] h-[13.99px] w-[7.36px]"
              />
            </div>
            {/* ratings in num */}
            <p className="font-normal md:text-sm md:leading-[18.9px] flex md:gap-[2px] leading-[16.2px] text-xs">
              4.5/{" "}
              <span className="font-normal md:text-sm md:leading-[18.9px] text-[#00000099] leading-[16.2px] text-xs">
                {" "}
                5
              </span>
            </p>
          </div>
          {/* product price  */}
          <p className="font-bold text-xl md:text-2xl leading-[27px] md:leading-[32.4px] w-[55px] h-[32px] md:mt-[10px] mt-1">
            $120
          </p>
        </div>
        {/* 2nd product  */}
        <div
          className={` flex-shrink-0 max-w-[390px] overflow-hidden sm:max-w-full`}
        >
          {/* product image */}
          <img
            src="/assets/productTwo.png"
            alt="Skinny Fit Jeans"
            className="md:rounded-[20px] md:h-[298px] md:w-[295px] h-[200.01px] w-[198px] rounded-[13.42px]"
          />
          {/* product name  */}
          <h3 className="font-bold md:text-xl text-base leading-[21.6px] md:leading-[27px] md:mt-5 mt-4">
            Skinny Fit Jeans
          </h3>
          {/* ratings in stars*/}
          <div className="flex md:gap-[13px] md:h-[19px] md:w-[126.2px] gap-14 w-[127px] h-[16px] md:mt-3 mt-1">
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
                src="/assets/starHalf.png"
                alt="ratings"
                className="md:h-[16.72px] md:w-[8.79px] h-[13.99px] w-[7.36px]"
              />
            </div>
            {/* ratings in num */}
            <p className="font-normal md:text-sm md:leading-[18.9px] flex md:gap-[2px] leading-[16.2px] text-xs">
              3.5/{" "}
              <span className="font-normal md:text-sm md:leading-[18.9px] text-[#00000099] leading-[16.2px] text-xs">
                {" "}
                5
              </span>
            </p>
          </div>
          {/* product price  */}
          <div className="flex md:gap-[12px] md:mt-[10px] mt-1 gap-[2px] items-center">
            <p className="font-bold md:text-2xl md:leading-[32.4px] md:w-[55px] md:h-[32px] text-xl leading-[27px] w-[51px] h-[27px] ">
              $240
            </p>
            {/*before discount price  */}
            <p className="font-bold md:text-2xl md:leading-[32.4px] md:w-[55px] md:h-[32px] text-xl leading-[27px] w-[51px] h-[27px]  text-[#00000066] line-through">
              $260
            </p>
            {/* discount rate  */}
            <p className="bg-[#FF33331A] text-[#FF3333] rounded-[62px] md:h-[28px] h-[20px] md:w-[58px] w-[42px] md:py-[6px] py-[4px] md:px-[14px] px-[10px] md:text-xs text-[10px] font-medium md:leading-[16.2px] leading-[13.5px]">
              -20%
            </p>
          </div>
        </div>
        {/* 3rd product  */}
        <div className={` hidden md:block`}>
          {/* product image */}
          <img
            src="/assets/productThree.png"
            alt="Checkered Shirt"
            className="rounded-[20px] h-[298px] w-[295px]"
          />
          {/* product name  */}
          <h3 className="font-bold text-xl leading-[27px] mt-5">
            Checkered Shirt
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
            $180
          </p>
        </div>
        {/* 4th product  */}
        <div className={`hidden md:block`}>
          {/* product image */}
          <img
            src="/assets/productFour.png"
            alt="Sleeve Striped T-shirt"
            className="rounded-[20px] h-[298px] w-[295px]"
          />
          {/* product name  */}
          <h3 className="font-bold text-xl leading-[27px] mt-5">
            Sleeve Striped T-shirt
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
          <div className="flex gap-[12px] mt-[10px] items-center">
            <p className="font-bold text-2xl leading-[32.4px] w-[55px] h-[32px] ">
              $130
            </p>
            {/*before discount price  */}
            <p className="font-bold text-2xl leading-[32.4px] w-[55px] h-[32px]  text-[#00000066] line-through">
              $160
            </p>
            {/* discount rate  */}
            <p className="bg-[#FF33331A] text-[#FF3333] rounded-[62px] h-[28px] w-[58px] py-[6px] px-[14px] text-xs font-medium leading-[16.2px] ">
              -30%
            </p>
          </div>
        </div>
      </div>
      {/* button div  */}
      <div className="flex justify-center items-center">
        <button
          className={`md:w-[218px] md:h-[52px] w-[358px] h-[46px] rounded-[62px] py-4 px-[54px] border-[1px] border-[#0000001A] md:text-base text-sm font-medium md:leading-[21.6px] leading-[18.9px] hover:bg-black hover:text-white transition-colors duration-300   md:mt-10 mt-6`}
        >
          View All
        </button>
      </div>
      {/* horizontal rule  */}
      <hr className="md:mx-[100px] md:my-[50px] my-11 mx-4 border-[1px] border-[#0000001A] " />
    </>
  );
}
