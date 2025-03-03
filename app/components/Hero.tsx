"use client";

import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const images = ["/images/hero1.svg", "/images/hero2.svg", "/images/hero3.svg"];

const slides = [
  {
    title: "Bar Training Master Class",
    description:
      "Join our Bar Training Masterclass to take your bartending skills to the next level. ",
    buttonText: "Register for  Training",
    showTimer: true,
  },
  {
    title: "The Heineken Global Draught Championship",
    description:
      "Register below to join our global draught championship to make you stand out.  ",
    buttonText: "Register for  Training",
    showTimer: false,
  },
  {
    title: "Become a better professional",
    description:
      "Our  hands-on course covers expert mixology, perfect pours, and more to make you stand out as a professional.  ",
    buttonText: "Register for  Training",
    showTimer: false,
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 21,
    hours: 3,
    minutes: 59,
    seconds: 48,
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
              seconds: 59,
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
      {/* Full-Screen Background Image */}
      <div
        className="w-full h-full bg-cover bg-center transition-all rounded-2xl duration-500"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8  lg:pt-[14rem]">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 lg:pl-20 text-white">
          <div className="text-start">
            <p className="text-[#F0AD12] text-lg sm:text-xl lg:text-2xl">
              UPCOMING EVENT
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4">
              {slides[currentIndex].title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl mb-4 sm:mb-6">
              {slides[currentIndex].description}
            </p>
            {slides[currentIndex].showTimer && (
              <div className="rounded-lg mb-4">
                <div className="text-base sm:text-lg lg:text-[32px] flex font-medium items-center gap-2 sm:gap-4">
                  <span className="flex flex-col items-center justify-center">
                    {timeLeft.days} <p className="text-xs sm:text-sm">days</p>
                  </span>
                  :
                  <span className="flex flex-col items-center justify-center">
                    {timeLeft.hours} <p className="text-xs sm:text-sm">hours</p>
                  </span>
                  :
                  <span className="flex flex-col items-center justify-center">
                    {timeLeft.minutes}{" "}
                    <p className="text-xs sm:text-sm">minutes</p>
                  </span>
                  :
                  <span className="flex flex-col items-center justify-center">
                    {timeLeft.seconds}{" "}
                    <p className="text-xs sm:text-sm">seconds</p>
                  </span>
                </div>
              </div>
            )}
            <button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-4 bg-[#095424] text-white hover:bg-[#5daa79] transition rounded-4xl flex items-center justify-center sm:justify-start">
              <span className="text-sm sm:text-base">
                {slides[currentIndex].buttonText}
              </span>
              <ArrowUpRight
                className="ml-2 bg-[#F0AD12] rounded-full text-[#095424]"
                size={16}
              />
            </button>
          </div>
        </div>

        {/* Navigator */}
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 lg:right-20 flex space-x-4 sm:space-x-8 lg:bottom-30">
          <button
            onClick={goToPrev}
            className="p-1 sm:p-2 border border-white text-white border-opacity-75 rounded-full hover:border-opacity-100 transition"
          >
            &larr;
          </button>
          <button
            onClick={goToNext}
            className="p-1 sm:p-2 border border-white text-white border-opacity-75 rounded-full hover:border-opacity-100 transition"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
