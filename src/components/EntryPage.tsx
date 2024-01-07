import Image from "next/image";


const EntryPage = () => {

  return (
    <div className="px-10 flex justify-center items-center">
      <div className="md:mt-36 px-0 md:px-10 mx-auto justify-center items-center grid grid-rows-2 gap-y-8 grid-cols-none md:grid-cols-7 md:grid-rows-none md:gap-x-6 md:gap-y-0">
                <div className="md:col-span-3 text-center justify-center items-center md:text-left md:justify-normal">
                    <h1 className="font-bold text-4xl sm:text-5xl text-stone-700 tracking-tight">Click & Optimize</h1>
                    <h1 className="pt-5 text-xl sm:text-2xl text-stone-700 font-light">Revolutionizing Foodservice Procurement</h1>
                </div>
                <div className="md:col-span-4 flex justify-center items-center">
                    {/* <img src="/images/ipad-hero.png" className="w-full max-h-80 2xl:max-h-none object-contain max-w-2xl hover:scale-110 transition-all ease-in-out duration-300" alt="" /> */}
                    <Image
                      src="/images/marvel-ipad.png"
                      width={1306} // 1306
                      height={945} // 945
                      className="w-full max-h-80 2xl:max-h-none object-contain max-w-lg hover:scale-110 transition-all ease-in-out duration-300"
                      alt=""
                    />
                </div>
                
            </div>
    </div>
  );
};

export default EntryPage;
