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
export default function Footer() {
  return (
    <>
      <div
        className={` h-[846px] md:h-[499px] w-full bg-[#f0f0f0] mt-40 pt-40 ${satoshi.className} text-[#00000099]`}
      >
        <div className="mx-[100px] flex justify-between">
        <div className="w-[248px] h-[177px] flex gap-[35px] flex-col">
          <img
            src="/assets/brandLogo.png"
            alt="logo"
            className="w-[167px] h-[23px]"
          />
          <p className="font-normal md:text-base md:leading-[22px] md:h-[66px] md:w-[248px]">
            We have clothes that suits your style and which you&#39;re proud to
            wear. From women to men.
          </p>
          <img
            src="/assets/socials.png"
            alt="socials"
            className="md:h-[28px] md:w-[148px]"
          />
        </div>
        <div className="capitalize flex flex-col gap-6">
          <h1 className="font-medium text-base leading-[18px] tracking-3px text-black">
            company
          </h1>
          <ul className="font-normal text-base leading-[19px] w-[104px] h-[133px] flex flex-col gap-5">
            <li>
              <a href="#">about</a>
            </li>
            <li>
              {" "}
              <a href="#">features</a>
            </li>
            <li>
              <a href="#">works</a>
            </li>
            <li>
              <a href="#">career</a>
            </li>
          </ul>
        </div>
        <div className="capitalize flex flex-col gap-6">
          <h1 className="font-medium text-base leading-[18px] tracking-3px text-black ">
            help
          </h1>
          <ul className="font-normal text-base leading-[19px] w-[136px] h-[133px] flex flex-col gap-5">
            <li>
              <a href="#">customer support</a>
            </li>
            <li>
              <a href="#">delievery details</a>
            </li>
            <li>
              <a href="#">terms & conditions</a>
            </li>
            <li>
              <a href="#">privacy policy</a>
            </li>
          </ul>{" "}
        </div>
        <div className="capitalize flex flex-col gap-6">
          <h1 className="font-medium text-base leading-[18px] tracking-3px text-black">
            FAQ
          </h1>
          <ul className="font-normal text-base leading-[19px] w-[149px] h-[133px] flex flex-col gap-5">
            <li>
              <a href="#">account</a>
            </li>
            <li>
              <a href="#">manage delieveries</a>
            </li>
            <li>
              <a href="#">orders</a>
            </li>
            <li>
              <a href="#">payments</a>
            </li>
          </ul>{" "}
        </div>
        <div className="capitalize flex flex-col gap-6">
          <h1 className="font-medium text-base leading-[18px] tracking-3px text-black">
            resources
          </h1>
          <ul className="font-normal text-base leading-[19px] w-[149px] h-[133px] flex flex-col gap-5">
            <li>
              <a href="#" className="normal-case">Free eBooks</a>
            </li>
            <li>
              <a href="#">development tutorial</a>
            </li>
            <li>
              <a href="#">how to - blog</a>
            </li>
            <li>
              <a href="#">youtube Playlist</a>
            </li>
          </ul>{" "}
        </div>
        </div>
        <hr className="mx-[100px] mt-12 border-[1px]"/>
        <div className="mx-[100px] flex justify-between mt-6">
        <p className="h-[19px] w-[269px] font-normal text-sm leading-[18.9px]">
        Shop.co © 2000-2023, All Rights Reserved
        </p>
        <img src="/assets/paymentOptions.png" alt="cards" className="w-[281.07px]" />
        </div>  </div>
    </>
  );
}
