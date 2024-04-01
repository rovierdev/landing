import Image from "next/image";


const EntryPage = () => {

  return (
    <div className="px-10 flex justify-center items-center">
      <div className="md:mt-36 px-0 md:px-10 mx-auto justify-center items-center grid grid-rows-2 gap-y-8 grid-cols-none md:grid-cols-7 md:grid-rows-none md:gap-x-6 md:gap-y-0">
                <div className="md:col-span-3 text-center justify-center items-center md:text-left md:justify-normal">
                    <h1 className="font-bold text-5xl sm:text-6xl text-stone-700 tracking-tight">Click & Optimize</h1>
                    <h1 className="pt-5 text-2xl sm:text-3xl text-stone-700 font-light whitespace-nowrap">Revolutionizing Foodservice Procurement</h1>
                </div>
                <div className="md:col-span-4 flex justify-center items-center">
                    {/* <img src="/images/ipad-hero.png" className="w-full max-h-80 2xl:max-h-none object-contain max-w-2xl hover:scale-110 transition-all ease-in-out duration-300" alt="" /> */}
                    <Image
                      src="/images/marvel-ipad.png"
                      width={1500} // 1306
                      height={1080} // 945
                      sizes="100vw"
                      className="w-full object-cover max-w-2xl hover:scale-110 transition-all ease-in-out duration-300"
                      alt=""
                    />
                </div>
                
            </div>
    </div>
  );
};

export default EntryPage;
