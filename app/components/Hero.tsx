"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRight,
  MoveUpRight
} from "lucide-react";
import { useState, useEffect } from "react";
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

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-screen flex overflow-hidden p-2 lg:p-10">
      <div className="w-full h-full rounded-2xl relative overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <div
              className="w-full h-full bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
            >
              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-8 lg:px-12 top-50">
                {/* Text Content */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-full lg:px-10 text-white"
                >
                  {/* Text Content */}
                  <div className="space-y-5">
                    <p className="text-[#F0AD12] text-lg sm:text-xl lg:text-2xl font-bold tracking-wide">
                      UPCOMING EVENT
                    </p>
                    <h1 className="text-3xl md:text-4xl uppercase leading-12 tracking-wide max-w-2xl ">
                      {slides[currentIndex].title}
                    </h1>
                    <p className="text-lg md:text-xl font-medium leading-relaxed tracking-wider max-w-md">
                      {slides[currentIndex].description}
                    </p>

                    {slides[currentIndex].showTimer && (
                      <div className="flex items-center gap-3 text-lg md:text-3xl">
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
                      </div>
                    )}

                    <div className="flex items-center justify-between w-full">
                      <button
                        className="px-4 sm:px-6 py-3 sm:py-4 bg-[#095424] text-white  transition rounded-full flex items-center gap-2 text-base sm:text-lg  group font-normal tracking-wide"
                        onClick={() => router.push("/event")}
                      >
                        {slides[currentIndex].buttonText}
                        <ArrowUpRight
                          className="bg-[#F0AD12] rounded-full text-[#095424] p-1 group-hover:translate-x-1 transition-all duration-300"
                          size={30}
                        />
                      </button>

                      {/* Navigator */}
                      <div className="flex gap-4 sm:gap-6">
                        <button
                          onClick={goToPrev}
                          className="w-12 h-12 flex items-center justify-center border-2 border-white text-white hover:bg-[#095424] hover:border-none rounded-full transition"
                          aria-label="Previous slide"
                        >
                          <ArrowLeftIcon
                            className="w-6 h-6"
                            strokeWidth={1.5}
                          />
                        </button>
                        <button
                          onClick={goToNext}
                          className="w-12 h-12 flex items-center justify-center border-2 border-white text-white hover:bg-[#095424] hover:border-none rounded-full transition"
                          aria-label="Next slide"
                        >
                          <ArrowRightIcon
                            className="w-6 h-6"
                            strokeWidth={1.5}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
