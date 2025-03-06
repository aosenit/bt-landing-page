"use client";

import Image from "next/image";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="text-white bg-[#052B12] relative flex flex-col items-center overflow-hidden pb-10 ">
      <div className="w-full h-auto min-h-[500px] flex flex-col md:flex-row justify-between items-start md:items-start pt-10 md:pt-20 px-4 md:px-16">
        <div className="w-full md:w-[30%] space-y-6 md:space-y-10 text-left items-start ">
          <img src="/images/logo.svg" className="w-40" />
          <p className="text-lg md:text-2xl lg:px-4 md:px-0 max-w-md">
            A Prestigious Journey into the World of Luxury Cocktails and Fine
            Spirits
          </p>
        </div>
        <div className="flex w-full md:w-[60%] lg:w-[40%]  gap-30 md:gap-30 items-start justify-between  flex-row-reverse lg:flex-col lg:items-center lg:justify-center  md:mt-0">
          <div className="flex flex-col gap-6 items-end">
            <img src="/images/footerglass.svg" className="w-40" />
            <ArrowUp
              className="ml-2 bg-[#F0AD12] rounded-full  lg:hidden text-[#095424]"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
              }}
              strokeWidth={1.5}
              size={30}
            />
          </div>
          <div className="gap-2 md:space-x-6 flex flex-col lg:flex-row flex-wrap items-start justify-start lg:items-center lg:justify-center">
            <button className="border border-white rounded-full px-4 py-2 text-sm md:text-base hover:bg-green-100 hover:text-black mb-2 md:mb-0" onClick={() => router.push("/")}>
              Home
            </button>
            <button className="border border-white rounded-full px-4 py-2 text-sm md:text-base hover:bg-green-100 hover:text-black mb-2 md:mb-0" onClick={() => router.push("/event")}>
              Training{" "}
            </button>
            <button className="border border-white rounded-full px-4 py-2 text-sm md:text-base hover:bg-green-100 hover:text-black mb-2 md:mb-0" onClick={() => router.push("/event")}>
              Attend Event
            </button>
            <ArrowUp
              className="ml-2 hidden lg:block bg-[#F0AD12] rounded-full text-[#095424]"
              size={30}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
              }}
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>
      <img
        src="/images/sub4.svg"
        className="absolute -left-[3rem] -bottom-[3rem] w-36 md:w-auto hidden md:block"
      />
      <div>
        <p className="text-xs md:text-sm text-center mt-6 md:mt-0">
          {/* automatic html copy right and current year */}
          <span className="text-sm md:text-base text-[#F0AD12]">&copy;</span>{" "}
          {new Date().getFullYear()} Copyright NB Bar Academy. All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
}
