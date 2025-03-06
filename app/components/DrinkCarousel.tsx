"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const drinks = [
  {
    name: "VIRGIN MOJITO",
    type: "Cocktail - 0.8%",
    description:
      "A Mojito is a classic Cuban cocktail known for its refreshing, slightly sweet, and citrusy flavour, making it a popular summer drink. Its muddled ingredients release their flavours, creating a light and aromatic beverage.",
    ingredients: [
      "White rum, Fresh lime juice, Sugar",
      "Mint leaves, Soda water, and Ice. "
    ],
    method:
      "Muddle fresh mint leaves, lime wedges, and 1-2 tsp sugar in a glass to release the flavours. Fill the glass with ice, pour in 2 oz white rum (or sparkling water for alcohol-free twist), and stir well. Garnish with a mint sprig and a lime slice.",
    image: "/images/virgin.svg"
  },
  {
    name: "BACARDI",
    type: "Spirit - 80%",
    description:
      "Bacardi is a world-famous rum brand known for its smooth, light-bodied flavour. Originally founded in Cuba in 1862, it produces a variety of rums, including white, gold, and spiced.",
    ingredients: [
      "Sugarcane molasses, Yeast, Water",
      "Charcoal filtration, Oak barrel ageing"
    ],
    method:
      "Sugarcane molasses is mixed with water and yeast to create alcohol, then distilled in column stills to produce a high-proof spirit. The rum is filtered through charcoal for smoothness and aged in oak barrels for deeper flavours.",
    image: "/images/bacardi2.svg"
  },
  {
    name: "PIÑA COLADA",
    type: "Cocktails - 0.5%",
    description:
      "Piña Colada is a tropical cocktail with a creamy texture. Originating from Puerto Rico, it has a sweet, rich, and refreshing flavour, often garnished with a pineapple slice and a cherry.",
    ingredients: ["Rum, Coconut cream", "Pineapple juice,  Blended with ice "],
    method:
      "Blend 2 oz white rum, 3 oz pineapple juice, and 1 oz coconut cream with ice until smooth. Pour into a chilled glass and garnish with a pineapple slice and cherry.",
    image: "/images/pina.svg"
  }
];

export default function DrinkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const handleSlide = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === drinks.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? drinks.length - 1 : prev - 1;
    });
  };

  return (
    <div className="w-full max-w-8xl mx-auto px-4 md:px-8 py-12">
      <div className="relative">
        <button 
          onClick={() => handleSlide(-1)} 
          className="absolute left-0 lg:top-1/2 top-[20%] lg:-translate-y-1/2 z-10 p-2 bg-[#F0AD12] rounded-full hover:bg-[#d89a10] transition-colors"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-6 h-6 text-[#095424] " strokeWidth={1.5} />
        </button>

        <div className="overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: "easeInOut"
              }}
              className="w-full"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 px-8 md:px-16 lg:px-20">
                {/* Image Section - Fixed height container */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full lg:w-[480px] h-[400px] lg:h-[600px] flex justify-center relative"
                >
                  <img
                    src={drinks[currentIndex].image}
                    alt={drinks[currentIndex].name}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full lg:w-1/2 space-y-4"
                >
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-4xl lg:text-5xl tracking-wider"
                  >
                    {drinks[currentIndex].name}
                  </motion.h2>
                  <div className="mt-8 md:mt-12"/>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-6"
                  >
                   <div className="space-y-3">
                   <p className="text-gray-600 text-lg">
                      {drinks[currentIndex].type}
                    </p>
                    <p className="text-gray-700 text-base md:text-lg">
                      {drinks[currentIndex].description}
                    </p>
                   </div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <p className="font-semibold text-[#F0AD12] text-xl mb-2">
                          Ingredients
                        </p>
                        <ul className="text-gray-600 space-y-1">
                          {drinks[currentIndex].ingredients.map((ingredient, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                              className="text-base md:text-lg"
                            >
                              {ingredient}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <p className="font-semibold text-[#F0AD12] text-xl mb-2">
                          Method
                        </p>
                        <p className="text-gray-700 text-base md:text-lg">
                          {drinks[currentIndex].method}
                        </p>
                      </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button 
          onClick={() => handleSlide(1)} 
          className="absolute right-0 lg:top-1/2 top-[20%] lg:-translate-y-1/2 z-10 p-2 bg-[#F0AD12] rounded-full hover:bg-[#d89a10] transition-colors"
          aria-label="Next slide"
        >
          <ArrowRight className="w-6 h-6 text-[#095424] " strokeWidth={1.5} />
        </button>
      </div>

      {/* Slide Indicators */}
      {/* <div className="flex justify-center space-x-2 mt-8">
        {drinks.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-[#F0AD12] w-4' 
                : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
}
