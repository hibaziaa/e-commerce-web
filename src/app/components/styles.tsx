import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});
export default function Styles() {
    return (
      <>
     <div className="grid grid-cols-1 md:grid-cols-10 w-[358px] h-[975px] mx-4 rounded-[20px] bg-[#f0f0f0] mt-12 md:w-[90%] md:mx-auto md:h-[866px] md:mt-20">
  {/* H1 spans the full width of the grid */}
  <div className="col-span-1 md:col-span-10">
    <h1
      className={`${poppins.className} uppercase w-full text-center font-bold text-4xl leading-[36px] mt-8 md:mt-20 md:mb-8 md:leadng-[57.6px] md:text-5xl`}
    >
      browse by dress style
    </h1>
  </div>

  {/* First Background Image: 40% */}
  <div
    className="md:col-span-4 h-[190px] mx-4 rounded-[20px] bg-cover bg-center relative md:h-[289px] md:ml-10"
    style={{ backgroundImage: "url('/assets/stylesOne.png')" }}
  >
    <h2
      className={` absolute top-4 left-6 text-black text-2xl leading-[32.4px]  font-bold md:top-[25px] md:left-9 md:text-4xl md:leading-[48.6px] ${inter.className} `}
    >
      Casual
    </h2>
  </div>

  {/* Second Background Image: 60% */}
  <div
    className="md:col-span-6 h-[190px] mx-4 rounded-[20px] bg-cover bg-center relative md:h-[289px] md:mr-10"
    style={{ backgroundImage: "url('/assets/stylesTwo.png')" }}
  >
    <h2
      className={` absolute top-4 left-6 text-black text-2xl leading-[32.4px]  font-bold md:top-[25px] md:left-9 md:text-4xl md:leading-[48.6px] ${inter.className}  `}
    >
      Formal
    </h2>
  </div>

  {/* Third Background Image: 60% */}
  <div
    className="md:col-span-6 h-[190px] mx-4 rounded-[20px] bg-cover bg-center relative md:h-[289px] md:ml-10"
    style={{ backgroundImage: "url('/assets/stylesThree.png')" }}
  >
    <h2
      className={` absolute top-4 left-6 text-black text-2xl leading-[32.4px]  font-bold md:top-[25px] md:left-9 md:text-4xl md:leading-[48.6px] ${inter.className} `}
    >
      Party
    </h2>
  </div>

  {/* Fourth Background Image: 40% */}
  <div
    className="md:col-span-4 h-[190px] mx-4 rounded-[20px] bg-cover bg-center relative md:h-[289px] md:mr-10"
    style={{ backgroundImage: "url('/assets/stylesFour.png')" }}
  >
    <h2
      className={` absolute top-4 left-6 text-black text-2xl leading-[32.4px]  font-bold md:top-[25px] md:left-9 md:text-4xl md:leading-[48.6px] ${inter.className}`}
    >
      Gym
    </h2>
  </div>
</div>


      </>
    );
  }
  