export default function Reviews(){
    return(
        <>
        <div>
            <h1 className="font-bold md:text-5xl md:leading-[57.6px] leading-[36px] text-[32px] uppercase mt-12 mx-4 md:mt-20 md:mx-[100px] h-[72px] w-[286px] md:h-[56px] md:mb-20">
                our happy customers
            </h1>
            <div className="flex justify-center items-center gap-4 mt-6 md:mt-14 mx-4 md:mx-[100px]">
                <img src="/assets/reviewOne.png" alt="" className="w-[358px] md:w-[400px]"/>
                  <img src="/assets/reviewTwo.png" alt="" className="hidden md:block md:w-[400px]  h-[240px"/>
                  <img src="/assets/reviewThree.png" alt="" className="hidden md:block md:w-[400px] h-[240px]"/>
            </div>
        </div>
        </>
    )
}