"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeinekenGlobal() {
  const router = useRouter();
  return (
    <section className=" sm:px-6 py-6 sm:py-8 md:px-10 lg:px-16 flex flex-col space-y-12 sm:space-y-20 items-center">
      <img src="/images/logo2.svg" className="w-48 sm:w-auto" />
      <div
        className="w-full h-[580px] sm:h-[500px] md:h-[600px] bg-cover bg-center transition-all rounded-[12px] sm:rounded-2xl duration-500 relative flex justify-center items-center"
        style={{ backgroundImage: "url('/images/hgimage.svg')" }}
      >
        <div className="bg-white flex flex-col items-center justify-center gap-3 sm:gap-4 p-4 pt-24 pb-36 sm:p-6 md:p-8 md:px-20 rounded-[12px] relative w-[90%] sm:w-auto">
          <h2 className="text-xl uppercase sm:text-2xl lg:text-[34px] text-center font-bold">
            The Heineken Global
          </h2>
          <img src="/images/hgvector.svg" className="w-8  sm:w-auto" />
          <h2 className="text-xl uppercase sm:text-2xl lg:text-[34px] text-center font-bold">
            Draught Championship
          </h2>
          <p className="text-base sm:text-[20px] w-full sm:w-[70%] text-center px-2">
            Want to be a part of the next championship register for our next
            event?
          </p>
          <div className="mt-6 md:mt-8">
            <button className="w-full md:w-auto px-4 sm:px-6 py-5 sm:py-4 bg-[#095424] text-white hover:bg-[#5daa79] transition rounded-4xl flex items-center justify-center md:justify-start" onClick={() => router.push("/event")}>
              Register to Attend{" "}
              <ArrowUpRight
                className="ml-2 bg-[#F0AD12] rounded-full text-[#095424]"
                size={18}
              />
            </button>
          </div>
          <img
            src="/images/bottle.svg"
            className="absolute right-[-1rem] sm:right-[-4rem] bottom-[-1rem] sm:bottom-[-3rem]  w-24 sm:w-auto"
          />
          <img
            src="/images/hgvector2.svg"
            className="absolute right-0 top-2 w-16 sm:w-auto"
          />
          <img
            src="/images/hgvector3.svg"
            className="absolute left-0 bottom-1 w-16 sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
