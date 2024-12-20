import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});
export default function Footer() {
  return (
    <>
      <div
        className={`${inter.className} h-[846px] md:h-[499px] w-full bg-[#f0f0f0] mt-40 md:pt-40 pt-56 text-[#00000099]`}
      >
        <div className="md:mx-[100px] mx-4 flex md:flex-row flex-col md:justify-between items-start md:gap-16">
          {/* logo div  */}
          <div className="md:w-[248px] md:h-[177px] flex md:gap-[35px] md:mb-0 mb-8 flex-col gap-4">
            <img
              src="/assets/brandLogo.png"
              alt="logo"
              className="md:w-[167px] w-[144px] md:h-[23px] h-[2opx]"
            />
            <p className="font-normal md:text-base text-sm leading-[20px] w-[357px] h-[40px] md:leading-[22px] md:h-[66px] md:w-[248px]">
              We have clothes that suits your style and which you&#39;re proud
              to wear. From women to men.
            </p>
            <img
              src="/assets/socials.png"
              alt="socials"
              className="h-[28px] w-[148px]"
            />
          </div>
          {/* links section  */}
          <div className="grid grid-cols-2 gap-10 md:flex md:gap-6 md:flex-grow md:justify-between ">
            <div className="capitalize flex flex-col md:gap-6 gap-2 md:w-[104px] md:h-[177px]">
              <h1 className="font-medium md:text-base text-sm leading-[18px] tracking-3px text-black">
                company
              </h1>
              <ul className="font-normal md:text-base text-sm md:leading-[19px] leading-[14px] md:w-[104px] md:h-[133px] h-[112px] flex flex-col  md:gap-5 gap-3">
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
            <div className="capitalize flex flex-col md:gap-6 gap-2 md:w-[136px] md:h-[177px]">
              <h1 className="font-medium md:text-base text-sm leading-[18px] tracking-3px text-black ">
                help
              </h1>
              <ul className="md:text-base text-sm md:leading-[19px] leading-[14px] md:w-[149px] md:h-[133px] h-[112px] flex flex-col md:gap-5 gap-3">
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
            <div className="capitalize flex flex-col md:gap-6 gap-2 md:w-[149px] md:h-[177px]">
              <h1 className="font-medium md:text-base text-sm leading-[18px] tracking-3px text-black">
                FAQ
              </h1>
              <ul className="md:text-base text-sm md:leading-[19px] leading-[14px] md:w-[149px] md:h-[133px] h-[112px] flex flex-col md:gap-5 gap-3">
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
            <div className="capitalize flex flex-col md:gap-6 gap-2 md:w-[149px] md:h-[177px]">
              <h1 className="font-medium md:text-base text-sm leading-[18px] tracking-3px text-black">
                resources
              </h1>
              <ul className="md:text-base text-sm md:leading-[19px] leading-[14px] md:w-[149px] md:h-[133px] h-[112px] flex flex-col md:gap-5 gap-3">
                <li>
                  <a href="#" className="normal-case">
                    Free eBooks
                  </a>
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
        </div>
        <hr className="md:mx-[100px] mx-4 mt-12 border-[1px]" />
        <div className="md:mx-[100px] flex justify-between items-center mt-6 flex-col md:flex-row md:gap-0 gap-[10px]">
          <p className="h-[19px] font-normal text-sm leading-[18.9px]">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <img
            src="/assets/paymentOptions.png"
            alt="cards"
            className="md:w-[281.07px] w-[240.93px]"
          />
        </div>{" "}
      </div>
    </>
  );
}
