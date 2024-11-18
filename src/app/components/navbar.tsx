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

export default function Navbar() {
  return (
    <>
      <div
        className={`bg-black text-white gap-[10px] w-full h-[34px] py-[9px] font-normal text-xs flex justify-between items-center ${satoshi.variable} lg:h-[38px] text-sm`}
      >
        <div className="flex justify-center flex-1 gap-[10px]">
          Sign up and get 20% off your first order.
          <a href="#" className="underline font-medium">
            Sign Up Now
          </a>
        </div>
        <img
          src="/assets/cross.png"
          alt="back"
          className="hidden lg:block h-5 w-5 cursor-pointer mr-16"
        />
      </div>
      {/* main navbar logo one */}
      <div className="flex lg:hidden">
        <img
          src="/assets/hamburger.png"
          alt="hamburgerIcon"
          className="h-6 w-6 my-3 ml-4 cursor-pointer"
        />
        <img
          src="/assets/brandLogo.png"
          alt="logo"
          className="w-[126px] h-[18px] ml-4 my-[18px]"
        />

        <span className="w-[96px] h-6 my-3 ml-[96px] flex gap-3">
          <img src="/assets/search.png" alt="searchIcon" className="h-6 w-6 cursor-pointer" />
          <img src="/assets/cart.png" alt="cartIcon" className="h-6 w-6 cursor-pointer" />
          <img
            src="/assets/profile.png"
            alt="profileIcon"
            className="h-6 w-6 cursor-pointer"
          />
        </span>
      </div>
      <div className={`hidden lg:flex h-[48px] w-[1240px] mx-[100px] gap-10 my-6 {satoshi.variable} justify-center items-center`}>
      <img
          src="/assets/brandLogo.png"
          alt="logo"
          className="w-[160px] h-[22px] "
        />
        <ul className="h-[22px] w-[321px] flex gap-6 font-normal text-base leading[21.6px]">
            <li className="cursor-pointer flex h-[22px] w-[57px] items-center justify-center gap-1">Shop <img src="/assets/Frame.png" alt="downwardArrow" /></li>
            <li className="cursor-pointer">On Sale</li>
            <li className="cursor-pointer">New Arrivals</li>
            <li className="cursor-pointer">Brands</li>
        </ul>
        <input type="search" placeholder="Search for Products..." className="w-[577px] h-[48px] rounded-[62px] bg-[#F0F0F0] py-3 px-4  bg-no-repeat bg-[url('/assets/searchGrey.png')] bg-[left_16px_center] pl-16 font-normal text-base leading-[21.6px] text-[#00000066]"/>
        <div className="w-[62px] h-6 flex gap-[14px]">
       <img src="/assets/cart.png" alt="cart" className="w-6 cursor-pointer" />
       <img src="/assets/profile.png" alt="profile" className="w-6 cursor-pointer" />
        </div>
      </div>
    </>
  );
}
