"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRight,
  MoveUpRight
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const images = ["/images/hero1.svg", "/images/hero2.svg", "/images/hero3.svg"];

const slides = [
  {
    title: "Bar Training Master Class",
    description:
      "Join our Bar Training Masterclass to take your bartending skills to the next level. ",
    buttonText: "Register for  Training",
    showTimer: true
  },
  {
    title: "The Heineken Global Draught Championship",
    description:
      "Register below to join our global draught championship to make you stand out.  ",
    buttonText: "Register for  Training",
    showTimer: false
  },
  {
    title: "Become a better professional",
    description:
      "Our  hands-on course covers expert mixology, perfect pours, and more to make you stand out as a professional.  ",
    buttonText: "Register for  Training",
    showTimer: false
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    days: 21,
    hours: 3,
    minutes: 59,
    seconds: 48
  });

  useEffect(() => {
    if (slides[currentIndex].showTimer) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => {
          const { days, hours, minutes, seconds } = prev;
          if (seconds > 0) {
            return { ...prev, seconds: seconds - 1 };
          } else if (minutes > 0) {
            return { ...prev, minutes: minutes - 1, seconds: 59 };
          } else if (hours > 0) {
            return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
          } else if (days > 0) {
            return {
              ...prev,
              days: days - 1,
              hours: 23,
              minutes: 59,
              seconds: 59
            };
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const goToNext = () => {
    if (isAnimating) return; // Prevent rapid clicking
    setIsAnimating(true);
    
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 100); // Small delay before changing image
  };

  const goToPrev = () => {
    if (isAnimating) return; // Prevent rapid clicking
    setIsAnimating(true);

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 100);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative h-screen flex overflow-hidden p-2 lg:p-10">
      <div className="w-full h-full rounded-2xl relative overflow-hidden bg-black">
        {/* Background Images */}
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={`bg-${currentIndex}`}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ 
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
          >
            <motion.img
              src={images[currentIndex]}
              alt="background"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1, }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-8 lg:px-12 top-40">
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={`content-${currentIndex}`}
              initial={{ x: 100, opacity: 0, y: 100 }}
              animate={{ x: 0, opacity: 1, y: 40 }}
              exit={{ x: -100, opacity: 0, y: -40 }}
              transition={{ 
                duration: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="w-full lg:px-10 text-white"
            >
              <div className="space-y-5">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, }}
                  className="text-[#F0AD12] text-lg sm:text-xl lg:text-2xl font-bold tracking-wide"
                >
                  UPCOMING EVENT
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, }}
                  className="text-lg md:text-4xl uppercase leading-10 md:leading-12  tracking-wide md:max-w-2xl"
                >
                  {slides[currentIndex].title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-[16px] md:text-xl font-medium leading-relaxed tracking-wider max-w-md"
                >
                  {slides[currentIndex].description}
                </motion.p>

                {/* Timer Section */}
                {slides[currentIndex].showTimer && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3,  }}
                    className="flex items-center gap-3 text-lg md:text-3xl"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="">
                        {timeLeft.days.toString().padStart(2, "0")}
                      </h3>
                      <p className="text-base md:text-lg font-medium capitalize">
                        days
                      </p>
                    </div>
                    <h3 className="font-bold">:</h3>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="">
                        {timeLeft.hours.toString().padStart(2, "0")}
                      </h3>
                      <p className="text-base md:text-lg font-medium capitalize">
                        hours
                      </p>
                    </div>
                    <h3 className="font-bold">:</h3>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="">
                        {timeLeft.minutes.toString().padStart(2, "0")}
                      </h3>
                      <p className="text-base md:text-lg font-medium capitalize">
                        minutes
                      </p>
                    </div>
                    <h3 className="font-bold">:</h3>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="">
                        {timeLeft.seconds.toString().padStart(2, "0")}
                      </h3>
                      <p className="text-base md:text-lg font-medium capitalize">
                        seconds
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Button Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, }}
                  className="flex items-center justify-between w-full"
                >
                  <button
                    className="px-3 sm:px-6 py-2.5 sm:py-4 bg-[#095424] text-white transition rounded-full flex items-center gap-1.5 sm:gap-2 text-xs sm:text-lg group font-normal tracking-wide max-w-[180px] sm:max-w-none"
                    onClick={() => router.push("/event")}
                  >
                    <span className="line-clamp-1">
                      {slides[currentIndex].buttonText}
                    </span>
                    <ArrowUpRight
                      className="bg-[#F0AD12] rounded-full text-[#095424] p-1 group-hover:translate-x-1 transition-all duration-300 min-w-[20px] sm:w-8 sm:h-8"
                      size={20}
                    />
                  </button>

                  {/* Navigator */}
                  <div className="flex gap-2 sm:gap-6">
                    <button
                      onClick={goToPrev}
                      disabled={isAnimating}
                      className={`w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center border border-white text-white hover:bg-[#095424] hover:border-none rounded-full transition ${isAnimating ? 'opacity-50' : ''}`}
                      aria-label="Previous slide"
                    >
                      <ArrowLeftIcon
                        className="w-4 h-4 sm:w-6 sm:h-6"
                        strokeWidth={1.5}
                      />
                    </button>
                    <button
                      onClick={goToNext}
                      disabled={isAnimating}
                      className={`w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center border border-white text-white hover:bg-[#095424] hover:border-none rounded-full transition ${isAnimating ? 'opacity-50' : ''}`}
                      aria-label="Next slide"
                    >
                      <ArrowRightIcon
                        className="w-4 h-4 sm:w-6 sm:h-6"
                        strokeWidth={1.5}
                      />
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Preload Images */}
        <div className="hidden">
          {images.map((src, index) => (
            <img key={index} src={src} alt="preload" />
          ))}
        </div>
      </div>
    </div>
  );
}
