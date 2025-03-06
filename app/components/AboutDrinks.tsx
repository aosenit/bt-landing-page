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
    type: "ABV 10%",
    description:
      "The Bacardi is a classic rum cocktail made with rum, lime juice, and a splash of cola. It's a popular choice for a night out.",
    image: "/images/bacardi.svg",
    icon: "/images/flowerv.svg"
  },
  {
    name: "Pina Colada",
    type: "ABV 14%",
    description:
      "The Pina Colada is a tropical cocktail made with rum, pineapple juice, and coconut cream. It's a popular drink in Puerto Rico and the Caribbean.",
    image: "/images/pinaHome.svg",
    icon: "/images/flowerv.svg"
  },
  {
    name: "Virgin",
    type: "ABV 9%",
    description:
      "The Virgin is a refreshing and light cocktail made with vodka, lemonade, and a splash of fruit juice. It's a popular choice for a summer drink.",
    image: "/images/virginHome.svg",
    icon: "/images/flowerv.svg"
  },
  // {
  //   name: "Cuba Libre",
  //   type: "Spirit - 80%",
  //   description:
  //     "World-famous rum brand known for its smooth, light-bodied flavor. Key ingredient in classic cocktails like...",
  //   image: "/images/bacardi.svg",
  //   icon: "/images/flowerv.svg"
  // }
];

export default function AboutDrinks() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Touch handling
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      if (startIndex + 4 < drinks.length) {
        setStartIndex(prev => prev + 1);
      }
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      if (startIndex > 0) {
        setStartIndex(prev => prev - 1);
      }
    }
  };

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
        {/* Navigation arrows - visible only on desktop */}
        {/* {canScrollLeft && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#F0AD12] rounded-full p-2 hidden md:block"
            onClick={() => setStartIndex((prev) => Math.max(0, prev - 1))}
          >
            <ChevronLeft className="text-[#095424]" />
          </motion.button>
        )} */}

        <div 
          className="w-full fle overflow-hidden touch-pan-x"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex md:gap-4 w-full"
            
          >
            {drinks.map((drink, idx) => (
              <motion.div
                key={drink.name + idx}
                className={`relative w-fit rounded-2xl flex md:max-w-2xl items-center gap-6 p-4 flex-shrink-0 ${
                  activeIndex === idx && "bg-gray-100 shadow-sm"
                }`}
                onHoverStart={() => setActiveIndex(idx)}
                onHoverEnd={() => setActiveIndex(0)}
                layout
              >
                <motion.img
                  src={drink.image}
                  alt={drink.name}
                  className={`object-contain ${
                    activeIndex === idx 
                      ? "w-[280px] md:w-[380px] h-[260px] md:h-[310px]" 
                      : "w-[250px] md:w-[350px] h-[270px] md:h-[320px]"
                  }`}
                  animate={{
                    scale: activeIndex === idx ? 1 : 0.9
                  }}
                  transition={{ duration: 0.3 }}
                />

                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="w-fit"
                    >
                      <div className="flex flex-col">
                        <div className=" space-y-3">
                          <img
                            src={drink.icon}
                            className="items-start sm:mx-0 w-[20%] lg:w-[40px]"
                          />
                          <h3 className="text-lg sm:text-xl lg:text-3xl">
                            {drink.name}
                          </h3>
                          <p className="text-sm sm:text-lg text-gray-500">
                            {drink.type}
                          </p>
                          <p className="text-sm sm:text-lg text-gray-600 line-clamp-3">
                            {drink.description}
                          </p>
                        </div>
                        <div className="flex justify-end">
                          <button
                            className=""
                            onClick={() => router.push("/recipe")}
                          >
                            <ArrowUpRight
                              className=" bg-[#F0AD12] rounded-full text-[#095424] w-8 p-1 h-8 "
                              size={20}
                              strokeWidth={1.5}
                            />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* {canScrollRight && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#F0AD12] rounded-full p-2 hidden md:block"
            onClick={() => setStartIndex((prev) => Math.min(drinks.length - 4, prev + 1))}
          >
            <ChevronRight className="text-[#095424]" />
          </motion.button>
        )} */}

        {/* Dots indicator - more prominent on mobile */}
        {/* <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(drinks.length) }).map((_, idx) => (
            <motion.button
              key={idx}
              className={`w-2 h-2 rounded-full ${
                startIndex === idx ? 'bg-[#F0AD12] w-4' : 'bg-gray-300'
              }`}
              onClick={() => setStartIndex(idx)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
