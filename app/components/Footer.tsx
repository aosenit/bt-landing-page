"use client";

import Image from "next/image";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white bg-[#052B12] relative flex flex-col items-center overflow-hidden">
      <div className="w-full h-auto min-h-[500px] flex flex-col md:flex-row justify-between items-center md:items-start pt-10 md:pt-20 px-4 md:px-16">
        <div className="w-full md:w-[30%] space-y-6 md:space-y-10 text-center md:text-left">
          <img src="/images/logo.svg" className="mx-auto md:mx-0" />
          <p className="text-xl md:text-3xl px-4 md:px-0">
            A Prestigious Journey into the World of Luxury Cocktails and Fine
            Spirits
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-30 items-center justify-center mt-8 md:mt-0">
          <img src="/images/footerglass.svg" className="w-3/4 md:w-auto" />
          <div className="space-x-2 md:space-x-6 flex flex-wrap items-center justify-center">
            <button className="border border-white rounded-2xl p-2 text-sm md:text-base hover:bg-green-100 hover:text-black mb-2 md:mb-0">
              Home
            </button>
            <button className="border border-white rounded-2xl p-2 text-sm md:text-base hover:bg-green-100 hover:text-black mb-2 md:mb-0">
              Training{" "}
            </button>
            <button className="border border-white rounded-2xl p-2 text-sm md:text-base hover:bg-green-100 hover:text-black mb-2 md:mb-0">
              Attend Event
            </button>
            <ArrowUp className="ml-2" size={18} />
          </div>
        </div>
      </div>
      <img
        src="/images/sub4.svg"
        className="absolute left-[-3rem] bottom-[-3rem] w-32 md:w-auto hidden md:block"
      />
      <p>
        <p className="text-xs md:text-sm text-center mt-6 md:mt-0">
          © 2024 Copyright NB Bar Academy. All Rights Reserved
        </p>
      </p>
    </footer>
  );
}
