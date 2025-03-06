"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import ButtonComp from "./ButtonComp";
import { useRouter } from "next/navigation";

const drinks = [
  {
    name: "Bacardi",
    type: "Spirit - 80%",
    description: "World-famous rum brand known for its smooth, light-bodied flavor. Key ingredient in classic cocktails like...",
    image: "/images/bacardi.svg",
    icon: "/images/flowerv.svg"
  },
  {
    name: "Pina Colada",
    type: "Spirit - 80%",
    description: "World-famous rum brand known for its smooth, light-bodied flavor. Key ingredient in classic cocktails like...",
    image: "/images/bacardi.svg",
    icon: "/images/flowerv.svg"
  },
  {
    name: "Mojito",
    type: "Spirit - 80%",
    description: "World-famous rum brand known for its smooth, light-bodied flavor. Key ingredient in classic cocktails like...",
    image: "/images/bacardi.svg",
    icon: "/images/flowerv.svg"
  },
  {
    name: "Cuba Libre",
    type: "Spirit - 80%",
    description: "World-famous rum brand known for its smooth, light-bodied flavor. Key ingredient in classic cocktails like...",
    image: "/images/bacardi.svg",
    icon: "/images/flowerv.svg"
  },
];

export default function AboutDrinks() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const visibleDrinks = drinks.slice(startIndex, startIndex + 4);
  const canScrollLeft = startIndex > 0;
  const canScrollRight = startIndex + 4 < drinks.length;

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
            className="text-[#F0AD12] text-lg sm:text-xl lg:text-2xl font-bold tracking-wide uppercase"
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

      <div className="relative">
        {canScrollLeft && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#F0AD12] rounded-full p-2"
            onClick={() => setStartIndex(prev => Math.max(0, prev - 1))}
          >
            <ChevronLeft className="text-[#095424]" />
          </motion.button>
        )}

        <div className="flex gap-6 overflow-hidden" ref={containerRef}>
          {visibleDrinks.map((drink, idx) => (
            <motion.div
              key={drink.name + idx}
              className="relative w-full md:w-1/4 bg-gray-100 rounded-2xl overflow-hidden"
              onHoverStart={() => setActiveIndex(idx)}
              onHoverEnd={() => setActiveIndex(null)}
              layout
            >
              <motion.img
                src={drink.image}
                alt={drink.name}
                className="w-full h-[300px] object-contain"
                animate={{
                  scale: activeIndex === idx ? 0.9 : 1
                }}
                transition={{ duration: 0.3 }}
              />

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-gray-100 p-4 flex flex-col"
                  >
                    <img
                      src={drink.icon}
                      className="w-[40px] mb-3"
                      alt="icon"
                    />
                    <h3 className="text-xl lg:text-2xl font-bold">
                      {drink.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {drink.type}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 mt-2">
                      {drink.description}
                    </p>
                    <div className="mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push("/recipe")}
                      >
                        <ArrowUpRight
                          className="bg-[#F0AD12] rounded-full text-[#095424] w-8 p-1 h-8"
                          strokeWidth={1.5}
                        />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {canScrollRight && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#F0AD12] rounded-full p-2"
            onClick={() => setStartIndex(prev => Math.min(drinks.length - 4, prev + 1))}
          >
            <ChevronRight className="text-[#095424]" />
          </motion.button>
        )}
      </div>

      {/* Optional: Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: Math.ceil(drinks.length / 4) }).map((_, idx) => (
          <motion.button
            key={idx}
            className={`w-2 h-2 rounded-full ${
              Math.floor(startIndex / 4) === idx ? 'bg-[#F0AD12]' : 'bg-gray-300'
            }`}
            onClick={() => setStartIndex(idx * 4)}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  );
}
