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
export default function Products(){
    return(
        <>
        <h1 className={`${poppins.className} font-bold text-[32px] leading-[38.4px] text-center mt-20 uppercase md:text-5xl md:leading-[57.6px] `}>New Arrivals</h1>
        <div className="flex mx-[100px] gap-8 mt-9">
        {/* 1st product  */}
        <div className={`${satoshi.className}`}>
            {/* product image */}
            <img src="/assets/productOne.png" alt="" className="rounded-[20px] h-[298px] w-[295px] "/>
            {/* product name  */}
            <h3 className="font-bold text-xl leading-[27px] mt-5">T-shirt With Tape Details</h3>
            {/* ratings in stars*/}
            <div className="flex gap-[13px] h-[19px] w-[150px] mt-3" >
            <div className="flex gap-[5.5px] h-[18.49px] w-[104px]">
                <img src="/assets/starFull.png" alt="ratings" className="h-[18.49px] w-[18.49px]" />
                <img src="/assets/starFull.png" alt="ratings" className="h-[18.49px] w-[18.49px]"  />
                <img src="/assets/starFull.png" alt="ratings" className="h-[18.49px] w-[18.49px]" />
                <img src="/assets/starFull.png" alt="ratings" className="h-[18.49px] w-[18.49px]" />
                <img src="/assets/starHalf.png" alt="ratings" className="h-[16.72px] w-[8.79px]" />
            </div>
            {/* ratings in num */}
            <p className="font-normal text-sm leading-[18.9px] flex gap-[2px]">4.5/ <span className="font-normal text-sm leading-[18.9px] text-[#00000099]"> 5</span></p></div>
            {/* product price  */}
            <p className="font-bold text-2xl leading-[32.4px] w-[55px] h-[32px] mt-[10px]">$120</p>
        </div>
        {/* 2nd product  */}
        <div className={`${satoshi.className}`}>
            {/* product image */}
            <img src="/assets/productTwo.png" alt="" className="rounded-[20px] h-[298px] w-[295px]"/>
            {/* product name  */}
            <h3 className="font-bold text-xl leading-[27px] mt-5">Skinny Fit Jeans</h3>
            {/* ratings in stars*/}
            <div className="flex gap-[13px] h-[19px] w-[126.2px] mt-3" >
            <div className="flex gap-[5.5px] h-[18.49px] w-[80.2px]">
                <img src="/assets/starFull.png" alt="ratings" className="h-[18.49px] w-[18.49px]" />
                <img src="/assets/starFull.png" alt="ratings" className="h-[18.49px] w-[18.49px]"  />
                <img src="/assets/starFull.png" alt="ratings" className="h-[18.49px] w-[18.49px]" />
                <img src="/assets/starHalf.png" alt="ratings" className="h-[16.72px] w-[8.79px]" />
            </div>
            {/* ratings in num */}
            <p className="font-normal text-sm leading-[18.9px] flex gap-[2px]">3.5/ <span className="font-normal text-sm leading-[18.9px] text-[#00000099]"> 5</span></p></div>
            {/* product price  */}
            <div className="flex gap-[12px] mt-[10px]">
            <p className="font-bold text-2xl leading-[32.4px] w-[55px] h-[32px] ">$240</p>
            {/*before discount price  */}
            <p className="font-bold text-2xl leading-[32.4px] w-[55px] h-[32px]  text-[#00000066] line-through">$260</p>
            {/* discount rate  */}
            <p className="bg-[#FF33331A] text-[#FF3333] rounded-[62px] h-[28px] w-[58px] py-[6px] px-[14px] text-xs font-medium leading-[16.2px] " >
      -20%
            </p>
            </div>
        </div>
        {/* 3rd product  */}
        <div className={`${satoshi.className}`}>
            {/* product image */}
            <img src="/assets/productThree.png" alt="" className="rounded-[20px] h-[298px] w-[295px]"/>
            {/* product name  */}
            <h3 className="font-bold text-xl leading-[27px] mt-5">Checkered Shirt</h3>
            {/* ratings in stars*/}
            <div className="flex gap-[13px] h-[19px] w-[150px] mt-3" >
            <div className="flex gap-[5.5px] h-[18.49px] w-[104px]">
                <img src="/assets/starFull.png" alt="ratings" className="h-[18.49px] w-[18.49px]" />
                <img src="/assets/starFull.png" alt="ratings" className="h-[18.49px] w-[18.49px]"  />
                <img src="/assets/starFull.png" alt="ratings" className="h-[18.49px] w-[18.49px]" />
                <img src="/assets/starFull.png" alt="ratings" className="h-[18.49px] w-[18.49px]" />
                <img src="/assets/starHalf.png" alt="ratings" className="h-[16.72px] w-[8.79px]" />
            </div>
            {/* ratings in num */}
            <p className="font-normal text-sm leading-[18.9px] flex gap-[2px]">4.5/ <span className="font-normal text-sm leading-[18.9px] text-[#00000099]"> 5</span></p></div>
            {/* product price  */}
            <p className="font-bold text-2xl leading-[32.4px] w-[55px] h-[32px] mt-[10px]">$180</p>
        </div>
        {/* 4th product  */}
        <div className={`${satoshi.className}`}>
            {/* product image */}
            <img src="/assets/productFour.png" alt="" className="rounded-[20px] h-[298px] w-[295px]"/>
            {/* product name  */}
            <h3 className="font-bold text-xl leading-[27px] mt-5">Sleeve Striped T-shirt</h3>
            {/* ratings in stars*/}
            <div className="flex gap-[13px] h-[19px] w-[150px] mt-3" >
            <div className="flex gap-[5.5px] h-[18.49px] w-[104px]">
                <img src="/assets/starFull.png" alt="ratings" className="h-[18.49px] w-[18.49px]" />
                <img src="/assets/starFull.png" alt="ratings" className="h-[18.49px] w-[18.49px]"  />
                <img src="/assets/starFull.png" alt="ratings" className="h-[18.49px] w-[18.49px]" />
                <img src="/assets/starFull.png" alt="ratings" className="h-[18.49px] w-[18.49px]" />
                <img src="/assets/starHalf.png" alt="ratings" className="h-[16.72px] w-[8.79px]" />
            </div>
            {/* ratings in num */}
            <p className="font-normal text-sm leading-[18.9px] flex gap-[2px]">4.5/ <span className="font-normal text-sm leading-[18.9px] text-[#00000099]"> 5</span></p></div>
            {/* product price  */}
            <div className="flex gap-[12px] mt-[10px]">
            <p className="font-bold text-2xl leading-[32.4px] w-[55px] h-[32px] ">$130</p>
            {/*before discount price  */}
            <p className="font-bold text-2xl leading-[32.4px] w-[55px] h-[32px]  text-[#00000066] line-through">$160</p>
            {/* discount rate  */}
            <p className="bg-[#FF33331A] text-[#FF3333] rounded-[62px] h-[28px] w-[58px] py-[6px] px-[14px] text-xs font-medium leading-[16.2px] " >
      -30%
            </p>
            </div>
        </div>
       </div>
       {/* button div  */}
        <div className="flex justify-center items-center">
       <button className={`w-[218px] h-[52px] rounded-[62px] py-4 px-[54px] border-[1px] border-[#0000001A] text-base font-medium leading-[21.6px] hover:bg-black hover:text-white transition-colors duration-300  ${satoshi.className} mt-10`}>
        View All
       </button></div>
       {/* horizontal rule  */}
       <hr className="mx-[100px] my-[50px] border-[1px] border-[#0000001A] " />
        </>
    )
}