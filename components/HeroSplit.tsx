"use client";

import Image from "next/image";
import { useState } from "react";

interface SplitPanelProps {
  imageSrc: string;
  text: string;
  altText: string;
}

const SplitPanel: React.FC<SplitPanelProps> = ({ imageSrc, text, altText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex-1 h-full overflow-hidden transition-all duration-500 ease-in-out cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageSrc}
        alt={altText}
        className={`object-cover w-full h-full transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
        width="100"
        height="100"
      />

      <div
        className={`absolute inset-0 flex items-center justify-center p-8 bg-black bg-opacity-70 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-white text-3xl font-semibold text-center">{text}</p>
      </div>
    </div>
  );
};

export default function HeroSplit() {
  return (
    <section id="section1" className="flex min-h-screen pt-16">
      <SplitPanel
        imageSrc="/home_cordiste.png"
        altText="img_cordiste"
        text="CORDISTE"
      />
      <SplitPanel
        imageSrc="/home_elagage.jpeg"
        altText="img_elagage"
        text="ELAGAGE"
      />
    </section>
  );
}
