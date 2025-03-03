"use client";

import Image from "next/image";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutDrinks() {
  return (
    <section className="px-4 py-6 sm:px-6 md:px-10 lg:px-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between py-8 md:py-16">
        <div className="w-full md:w-[50%] space-y-4">
          <h4 className="text-yellow-600 font-semibold uppercase">Recipes</h4>
          <h2 className="text-xl sm:text-2xl lg:text-[40px] font-bold mt-2">
            About Drinks
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-2xl">
            Explore our curated collection of expertly crafted recipes, from
            timeless classics to modern signature creations.
          </p>
        </div>
        <div className="mt-6 md:mt-8">
          <Link
            href={"/recipe"}
            className="w-full md:w-auto px-4 sm:px-6 py-3 sm:py-4 bg-[#095424] text-white hover:bg-[#5daa79] transition rounded-4xl flex items-center justify-center md:justify-start"
          >
            See more recipes{" "}
            <ArrowUpRight
              className="ml-2 bg-[#F0AD12] rounded-full text-[#095424]"
              size={18}
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-start gap-6 md:gap-10">
        <div className="w-full md:w-auto bg-gray-100 flex flex-col sm:flex-row p-4 sm:p-8 rounded-2xl shadow-md">
          <div className="w-full sm:w-auto flex justify-center">
            <img
              className="max-w-[200px]"
              src="/images/bacardi.svg"
              alt="bacardi"
            />
          </div>
          <div className="w-full sm:w-1/2 p-4 rounded-lg flex flex-col items-center sm:items-start">
            <div className="mt-4 md:mt-0 md:ml-4 space-y-3 text-center sm:text-left">
              <img src="/images/flowerv.svg" className="mx-auto sm:mx-0" />
              <h3 className="text-lg sm:text-xl lg:text-3xl font-bold">
                Bacardi
              </h3>
              <p className="text-[14px] sm:text-[16px] text-gray-500">
                Spirit - 80%
              </p>
              <p className="text-[16px] sm:text-[20px] text-gray-600 mt-2">
                World-famous rum brand known for its smooth, light-bodied
                flavor. Key ingredient in classic cocktails like...
              </p>
            </div>
          </div>
          <div className="mt-6 md:mt-8 text-left items-end flex">
            <button variant="outline">
              <ArrowUpRight
                className="ml-2 bg-[#F0AD12] rounded-full text-[#095424]"
                size={18}
              />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-auto">
          <img
            className="w-full max-w-[300px] mx-auto"
            src="/images/glass1.svg"
            alt="Pina Colada"
          />
          <img
            className="w-full max-w-[300px] mx-auto"
            src="/images/glass2.svg"
            alt="Mojito"
          />
        </div>
      </div>
    </section>
  );
}
