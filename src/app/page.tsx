"use client"

import Image from "next/image";
import Navbar from "@/components/Navbar";
import EntryPage from "@/components/EntryPage";
import { useRef } from "react";
import Tagline from "@/components/Tagline";

export default function Home() {
  const home = useRef(null);
  const features = useRef(null);
  const benefits = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);


  return (
    <main className="flex min-h-screen flex-col">
      <div ref={home} className="flex flex-col bg-white min-h-screen h-screen">
        <Navbar refs={{home, features, benefits, about, contact}} />
        <div className="h-[4.8rem] md:h-[5.5rem]" />
        <EntryPage />
      </div>
      <div className="bg-secondary px-6 md:px-28 mb-12 2xl:flex justify-center items-center mt-10 md:mt-0 scroll-m-[5.5rem]">
        <Tagline section={1}/>
      </div>
      <div ref={features} className="flex bg-white min-h-screen"></div>
      <div ref={benefits} className="flex bg-secondary min-h-96"></div>
      <div ref={about} className="flex bg-white min-h-screen"></div>
      <div ref={contact} className="flex bg-secondary min-h-96"></div>
    </main>
  );
}
