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

export default function Styles() {
    return (
      <>
      <div className="grid grid-cols-1md:grid-cols-10 w-[358px] h-[975px] mx-4 rounded-[20px] bg-[#f0f0f0] mt-12 ">
        <h1 className={`${poppins.className} uppercase w-[246px] h-[72px] text-center font-bold text-4xl leading-[36px] mt-8 mx-auto`}>
            browse by dress style
        </h1>
  {/* First Background Image: 40% */}
  <div
    className="md:col-span-4 h-[190px] mx-4 rounded-[20px] bg-cover bg-center relative"
    style={{ backgroundImage: "url('/assets/stylesOne.png')" }}
  >
    <h2 className={`${satoshi.className} absolute top-4 left-6 text-black text-2xl leading-[32.4px] font-bold`}>
      Casual
    </h2>
  </div>

  {/* Second Background Image: 60% */}
  <div
    className="md:col-span-6 h-[190px] mx-4 rounded-[20px] bg-cover bg-center relative"
    style={{ backgroundImage: "url('/assets/stylesTwo.png')" }}
  >
    <h2 className={`${satoshi.className} absolute top-4 left-6 text-black text-2xl leading-[32.4px] font-bold`}>
      Formal
    </h2>
  </div>

  {/* Third Background Image: 60% */}
  <div
    className="md:col-span-6 h-[190px] mx-4 rounded-[20px] bg-cover bg-center relative"
    style={{ backgroundImage: "url('/assets/stylesThree.png')" }}
  >
    <h2 className={`${satoshi.className} absolute top-4 left-6 text-black text-2xl leading-[32.4px] font-bold`}>
      Party
    </h2>
  </div>

  {/* Fourth Background Image: 40% */}
  <div
    className="md:col-span-4 h-[190px] mx-4 rounded-[20px] bg-cover bg-center relative"
    style={{ backgroundImage: "url('/assets/stylesFour.png')" }}
  >
    <h2 className={`${satoshi.className} absolute top-4 left-6 text-black text-2xl leading-[32.4px] font-bold`}>
      Gym
    </h2>
  </div>
</div>

      </>
    );
  }
  