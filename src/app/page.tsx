"use client"

import Image from "next/image";
import Navbar from "@/components/Navbar";
import EntryPage from "@/components/EntryPage";
import { useRef } from "react";
import Tagline from "@/components/Tagline";

export default function Home() {
  const contact = useRef(null);
  const features = useRef(null);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col bg-white min-h-screen h-screen">
        <Navbar contactScroll={contact} />
        <EntryPage />
      </div>
      <div className="flex bg-secondary">
        <Tagline featureScroll={features} />
      </div>
      <div ref={features} className="flex bg-white min-h-screen"></div>
      <div className="flex bg-secondary min-h-96"></div>
      <div className="flex bg-white min-h-screen"></div>
      <div ref={contact} className="flex bg-secondary min-h-96"></div>
    </main>
  );
}
