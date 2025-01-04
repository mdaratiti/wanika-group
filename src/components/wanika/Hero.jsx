"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import mopaneLogo from "@/assets/images/mopane-logo.png";
import idwalaLogo from "@/assets/images/idwala-logo.png";
import kikapuLogo from "@/assets/images/kikapu-logo.png";
import adeolu from "@/assets/images/adeolu.jpg";
import Link from "next/link";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Loop through 3 logos
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const logos = [
    { src: kikapuLogo, alt: "Kikapu Logo", width: 135, height: 60, link: "/companies/kikapu-finance"},
    { src: mopaneLogo, alt: "Mopane Logo", width: 130, height: 50, link: "/companies/mopane-capital" },
    { src: idwalaLogo, alt: "Idwala Logo", width: 170, height: 60, link: "/companies/idwala-asset-management"},
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden pt-60">
      <Image
        src={adeolu}
        alt="hero background"
        fill
        quality={100}
        className="absolute z-0 object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#1b4336] opacity-65 z-5"></div>
      <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:max-w-5xl md:max-w-3xl 2xl:max-w-5xl xl:px-52 2xl:px-56">
        <p className="pb-5 text-base font-bold text-center text-custorm-green md:text-left md:text-custorm-green">
          YOUR TRUSTED FINANCE PARTNER
        </p>
        <h1 className="pb-5 text-3xl font-bold leading-snug text-center text-white md:text-left">
          Exploration And Discovery In African Financial Solutions
        </h1>
        <p className="pb-5 text-base text-center text-white md:text-left">
          Wanika Group is committed to innovation, agility, and value creation
          for underserved stakeholders. Our values are built on trust,
          transparency, and professionalism.
        </p>
        <div className="flex flex-col gap-5 md:flex-row md:justify-start">
          <Link
            href="/contact-us"
            className="px-6 py-3 text-base text-center text-white transition-all duration-300 bg-custorm-green rounded-3xl hover:text-custorm-green hover:bg-white hover:scale-105"
          >
            Contact Us
          </Link>

          <Link
            href="/about-us"
            className="px-6 py-3 text-base text-center transition-all duration-300 bg-white rounded-3xl text-custorm-green hover:bg-custorm-green hover:text-white hover:scale-105"
          >
            Learn More
          </Link>
        </div>
        <div className="pt-5 pb-5 mt-5 border-4 bg-custorm-gray border-custorm-green">
          <div className="grid grid-cols-3 gap-4 place-items-center">
            {logos.map((logo, index) => (
              <Link
                key={index}
                href={logo.link}
                className={`transition-transform duration-1000 ${
                  activeIndex === index ? "rotate-animation" : ""
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
