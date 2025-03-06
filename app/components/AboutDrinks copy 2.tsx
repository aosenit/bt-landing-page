"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ButtonComp from "./ButtonComp";
import { useRouter } from "next/navigation";

export default function AboutDrinks() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="px-4 py-6 sm:px-6 md:px-10 lg:px-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between py-8 md:py-16"
      >
        <div className="w-full md:w-[50%] space-y-4">
          <motion.h4 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#F0AD12] text-lg sm:text-xl lg:text-2xl font-bold tracking-wide"
          >
            Recipes
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl uppercase leading-12 tracking-wide max-w-2xl"
          >
            About Drinks
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl font-normal tracking-wide max-w-xl text-[#101512]"
          >
            Explore our curated collection of expertly crafted recipes, from
            timeless classics to modern signature creations.
          </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 md:mt-8 hidden lg:block"
        >
          <ButtonComp text="See more recipe" link="/recipe" />
        </motion.div>
      </motion.div>

      <div className="flex flex-col md:flex-row items-start md:items-start justify-start gap-6 md:gap-10">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full md:w-[60%] bg-gray-100 flex flex-row p-4 rounded-2xl shadow-md"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-full sm:w-auto flex justify-center"
          >
            <img
              className="max-w-[200px]"
              src="/images/bacardi.svg"
              alt="bacardi"
            />
          </motion.div>
          <div className="w-full   p-2 rounded-lg flex flex-col  sm:items-end items-end ">
            <div className=" md:mt-0 md:ml-4 space-y-3 text-start sm:text-left">
              <img
                src="/images/flowerv.svg"
                className="items-start sm:mx-0 w-[20%] lg:w-[40px]"
              />
              <h3 className="text-[16px] sm:text-xl lg:text-3xl font-bold">
                Bacardi
              </h3>
              <p className="text-[14px] sm:text-[16px] text-gray-500">
                Spirit - 80%
              </p>
              <p className="text-[14px] sm:text-[20px] text-gray-600 mt-2">
                World-famous rum brand known for its smooth, light-bodied
                flavor. Key ingredient in classic cocktails like...
              </p>
            </div>
            <div className=" md:mt-4 text-left items-end lg:items-end flex">
              <button className="" onClick={() => router.push("/recipe")}>
                <ArrowUpRight
                  className=" bg-[#F0AD12] rounded-full text-[#095424] w-8 p-1 h-8"
                  size={20}
                  strokeWidth={1.5}
                  
                />
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 md:mt-8 block lg:hidden"
        >
          <Link
            href={"/recipe"}
            className="w-full md:w-auto px-4 sm:px-3 py-6 sm:py-4 bg-[#095424] text-white hover:bg-[#5daa79] transition rounded-4xl flex items-center justify-center md:justify-start"
          >
            See more recipes{" "}
            <ArrowUpRight
              className="ml-2 bg-[#F0AD12] rounded-full text-[#095424]"
              size={18}
            />
          </Link>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="lg:grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-auto hidden lg:block"
        >
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="w-full max-w-[300px] mx-auto"
            src="/images/glass1.svg"
            alt="Pina Colada"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="w-full max-w-[300px] mx-auto"
            src="/images/glass2.svg"
            alt="Mojito"
          />
        </motion.div>
      </div>
    </section>
  );
}
