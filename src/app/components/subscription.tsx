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
export default function Subscription (){
    return(
        <>
        <div className="absolute bottom-[80%] z-10">
        <div className="bg-black md:h-[180px] md:mx-[100px] rounded-[20px] md:py-9 md:px-16 flex md:justify-between md:w-[1240px] md:mt-24 flex-col md:flex-row mx-4 mt-10 h-[293px] w-[358px] md:items-center px-6 pt-10 gap-5">
           <div className={`${poppins.className} font-bold md:leading-[45px] md:text-[40px] text-white md:h-[94px] md:w-[551px] h-[105px] w-[297px] text-[32px] leading-[35px]`}>
           STAY UPTO DATE ABOUT OUR LATEST OFFERS
           </div>
           <div className={`flex gap-3 flex-col ${satoshi.className}`}>
           <input type="email" placeholder="Enter your email address" className="md:w-[349px] md:h-[48px] rounded-[62px] bg-[#F0F0F0] py-3 px-4  bg-no-repeat bg-[url('/assets/mailIcon.png')] bg-[left_16px_center] pl-12 font-normal md:text-base md:leading-[21.6px] text-[#00000066] bg-size-custom w-[311px] h-[42px] text-[14px] leading-[18.9px]"/>
            <button className="bg-[#F0F0F0] md:w-[349px] md:h-[46px] rounded-[62px] py-3 px-4 w-[311px] h-[42px] text-[14px] leading-[18.9px]">
     Subscribe to Newsletter
            </button>
           </div>
        </div></div>
        </>
    )
}