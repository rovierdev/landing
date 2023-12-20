import Image from "next/image";

const EntryPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full p-14 items-center justify-center md:space-x-10">
      <div className="flex flex-col text-center md:text-left text-stone-800 pb-8 md:pb-0">
        <h1 className="inter font-bold text-4xl md:text-5xl tracking-tight">
          Click and Optimize!
        </h1>
        <h1 className="inter pt-4 text-xl md:text-2xl font-light">
          Revolutionizing Foodservice Procurement
        </h1>
      </div>

      <Image
        src="/images/ipad.png"
        height={5000}
        width={5000}
        alt="Home Ipad Pics"
        className="w-full max-h-72 md:max-h-96 2xl:max-h-none object-contain max-w-xl md:max-w-2xl"
      />
    </div>
  );
};

export default EntryPage;
