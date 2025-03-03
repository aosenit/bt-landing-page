"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Subscribe() {
  return (
    <section className="px-4 py-6 md:px-10 lg:px-16">
      <div className="w-full h-[350px] md:h-[530px] bg-cover bg-center bg-[#052B12] transition-all rounded-2xl duration-500 relative flex justify-center items-center">
        <div className="text-white flex flex-col items-center justify-center gap-4 p-4 md:p-8 rounded-lg">
          <h2 className="text-base md:text-lg text-[#F0AD12] lg:text-[20px]">
            STAY IN TOUCH
          </h2>

          <h2 className="text-xl px-16 md:text-2xl lg:text-[40px] text-center w-full md:w-[60%] uppercase">
            Subscribe to our News letter
          </h2>
          <p className="text-base  md:text-[20px] w-full md:w-[70%] text-center px-6">
            Get our latest news to stay update through our news. You can
            unsubscribe anytime
          </p>
          <div className="mt-8 flex flex-row gap-4 md:gap-[10rem] px-4 md:px-6 justify-between py-2 bg-white text-black rounded-4xl w-full max-w-[90%] md:max-w-none">
            <input
              type="email"
              placeholder="Enter email here"
              className="text-black w-full md:w-auto px-2 py-2"
            />
            <button
              type="submit"
              className="px-4 py-3 md:py-4 bg-[#095424] text-white hover:bg-[#5daa79] transition rounded-4xl flex items-center justify-center md:justify-start w-full md:w-auto"
            >
              Subscribe{" "}
              <ArrowUpRight
                className="ml-2 bg-[#F0AD12] rounded-full text-[#095424]"
                size={18}
              />
            </button>
          </div>
        </div>
        <img
          src="/images/sub1.svg"
          className="absolute hidden md:block left-[5rem] bottom-[7rem]"
        />
        <img
          src="/images/sub2.svg"
          className="absolute hidden md:block right-0 top-2"
        />
        <img
          src="/images/sub3.svg"
          className="absolute hidden md:block right-0 top-[11.5rem]"
        />
        <img
          src="/images/sub4.svg"
          className="absolute hidden md:block right-0 bottom-5"
        />
      </div>
    </section>
  );
}
