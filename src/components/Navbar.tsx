import Image from "next/image";
import Link from "next/link";
import { RefObject } from "react";

type NavLinksKey = 'home' | 'features' | 'benefits' | 'about' | 'contact'

const Navbar = ({refs}: {refs:{[key in NavLinksKey] : RefObject<HTMLDivElement>}}) => {
    const scroll = (name : NavLinksKey) => {
        if (refs[name] && refs[name].current){
            refs[name].current!.scrollIntoView({ behavior: 'smooth' })
        }
    }

  return (
    <header className="px-10 py-6 fixed w-full top-0 z-10 flex justify-center md:justify-between align-middle items-center bg-[#fbfcfd]">
      <a onClick={()=>scroll('home')}>
        <div className="mx-auto md:mx-0 hover:cursor-pointer">
          <Image 
            src="/images/rovier1.png"
            width={100}
            height={100}
            alt="Logo"
            className="h-7 w-36 md:h-8"
          />
        </div>
      </a>
      <div className="hidden md:flex space-x-10 items-center inter text-xs uppercase tracking-widest">
          <a onClick={()=>scroll('features')} className="group transition duration-300 hover:cursor-pointer">Features <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-black"></span></a>
          <a onClick={()=>scroll('benefits')} className="group transition duration-300 hover:cursor-pointer">Benefits <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-black"></span></a>
          <a onClick={()=>scroll('about')} className="group transition duration-300 hover:cursor-pointer">About <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-black"></span></a>
          <a onClick={()=>scroll('contact')}>
            <button type="button" className=" w-max items-center hover:cursor-pointer ml-auto flex-initial bg-transparent group border border-black inter text-xs uppercase tracking-widest hover:border-[#EA4026] hover:text-[#EA4026] text-black rounded-lg h-10 px-5 text-center inline-flex transition-all ease-in-out">
              <p>Contact</p>
              <svg className="group-hover:translate-x-1.5 transition-all ease-in-out rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="#000000" className="group-hover:stroke-[#EA4026]" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
          </a>
      </div>
    </header>
  );
};

export default Navbar;
