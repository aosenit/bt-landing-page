"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export default function Subscribe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="px-4 py-6 md:px-10 lg:px-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="w-full h-[350px] md:h-[530px] bg-cover bg-center bg-[#052B12] rounded-2xl relative flex justify-center items-center overflow-hidden"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white flex flex-col items-center justify-center gap-4 p-4 md:p-8 rounded-lg lg:max-w-2xl relative z-10"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#F0AD12] text-lg sm:text-xl font-bold tracking-wide"
          >
            STAY IN TOUCH
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl text-center md:text-4xl uppercase leading-12 tracking-wide md:max-w-md"
          >
            Subscribe to our Newsletter
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-[20px] w-full md:w-[70%] text-center"
          >
            Get our latest news and updates delivered to your inbox
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex flex-row gap-4 px-4 py-2 bg-white text-black rounded-full w-full max-w-xl"
          >
            <input
              type="email"
              placeholder="Enter your email here"
              className="text-black w-full px-2 py-2 placeholder:text-black/60 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 sm:px-6 py-3 bg-[#095424] text-white rounded-full flex items-center gap-2 text-base group font-normal tracking-wide hover:bg-[#0a6b2d] transition-colors"
            >
              Subscribe
              <ArrowUpRight
                className="bg-[#F0AD12] rounded-full text-[#095424] p-1 group-hover:translate-x-1 transition-all duration-300"
                size={30}
              />
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative elements with subtle animations */}
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 0.8, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          src="/images/sub1.svg"
          className="absolute hidden md:block left-[5rem] bottom-[7rem] opacity-80"
        />
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 0.8, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          src="/images/sub2.svg"
          className="absolute hidden md:block right-0 top-2 opacity-80"
        />
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 0.8, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          src="/images/sub3.svg"
          className="absolute hidden md:block right-0 top-[11.5rem] opacity-80"
        />
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 0.8, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          src="/images/sub4.svg"
          className="absolute hidden md:block right-0 bottom-5 opacity-80"
        />
      </motion.div>
    </section>
  );
}
