export default function Brands() {
  return (
    <>
      <div className="bg-black h-[146px] md:h-[122px] flex justify-center items-center">
        {/* Container for logos */}
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-6 md:gap-10 md:justify-between">
          {/* Logo 1 */}
          <img
            src="/assets/versaceLogo.png"
            alt="Brand 1"
            className="w-[116.74px] h-[23.25px] md:h-[33.16px] md:w-[166.48px] object-contain"
          />
          {/* Logo 2 */}
          <img
            src="/assets/zaraLogo.png"
            alt="Brand 2"
            className="w-[63.81px] h-[26.63px] md:h-[37.98px] md:w-[91px] object-contain"
          />
          {/* Logo 3 */}
          <img
            src="/assets/gucciLogo.png"
            alt="Brand 3"
            className="w-[109.39px] h-[22.64px] md:h-[32.29px] md:w-[156px] object-contain"
          />
          {/* Logo 4 */}
          <img
            src="/assets/pradaLogo.png"
            alt="Brand 4"
            className="w-[127px] h-[21px] md:h-8 md:w-[194px] object-contain"
          />
          {/* Logo 5 */}
          <img
            src="/assets/ckLogo.png"
            alt="Brand 5"
            className="w-[134.84] h-[21.75px] md:h-[33.35px] md:w-[206.79px] object-contain"
          />
        </div>
      </div>
    </>
  );
}
