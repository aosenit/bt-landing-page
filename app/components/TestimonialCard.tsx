"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    image: "/images/profileimg.svg",
    text: "I joined the Bar Training Masterclass with zero experience. In weeks, I mastered mixology, gained confidence, and became a pro",
    name: "Alex M.",
    position: "Office/branch"
  },
  {
    id: 2,
    image: "/images/profileimg.svg",
    text: "I became a mixologist in just 2 weeks. The course was intense, but I learned so much and gained confidence. I'm now a bar manager at a top hotel.",
    name: "Sarah J.",
    position: "Branch Manager"
  },
  {
    id: 3,
    image: "/images/profileimg.svg",
    text: "I joined the Bar Training Masterclass with zero experience. In weeks, I mastered mixology, gained confidence, and became a pro",
    name: "Alex M.",
    position: "Office/branch"
  },
  {
    id: 4,
    image: "/images/profileimg.svg",
    text: "I joined the Bar Training Masterclass with zero experience. In weeks, I mastered mixology, gained confidence, and became a pro",
    name: "Alex M.",
    position: "Office/branch"
  },
  {
    id: 5,
    image: "/images/profileimg.svg",
    text: "I joined the Bar Training Masterclass with zero experience. In weeks, I mastered mixology, gained confidence, and became a pro",
    name: "Alex M.",
    position: "Office/branch"
  }
];

const TestimonialCard = () => {
  const [currentPair, setCurrentPair] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate the number of items to show
  const totalItems = isMobile ? testimonials.length : Math.ceil(testimonials.length / 2);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPair((prev) => (prev + 1) % totalItems);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalItems]);

  const prevSlide = () => {
    setCurrentPair((prev) => 
      prev === 0 ? totalItems - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentPair((prev) => (prev + 1) % totalItems);
  };

  return (
    <section className="py-6 md:py-12 flex flex-col lg:flex-row gap-3 md:gap-8 items-start lg:items-end px-6 max-w-7xl mx-auto lg:pb-20">
      <div className="text-left mb-6 md:mb-8 space-y-2 w-full lg:w-auto">
        <p className="text-[#F0AD12] text-lg sm:text-xl lg:text-2xl font-bold tracking-wide">
          TESTIMONIAL
        </p>
        <h2 className="text-xl md:text-3xl uppercase leading-[30px] md:leading-[50px] tracking-wider max-w-[230px] md:max-w-[500px]">
          SUCCESS STORY FROM OUR ACADEMY TRAINING
        </h2>
        <div className=" gap-4 md:gap-8 justify-center lg:justify-start hidden lg:block space-x-10">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="w-10 h-10 py-1 px-2 bg-[#F0AD12] text-[#095424] rounded-full shadow-md hover:bg-[#fede94]"
          >
            <ArrowLeftIcon className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 py-1 px-2 bg-[#F0AD12] text-[#095424] rounded-full shadow-md hover:bg-[#fede94]"
          >
            <ArrowRightIcon className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full">
        <div className="w-full flex overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <div className="w-full flex gap-4">
              {(isMobile ? [0] : [0, 1]).map((offset) => {
                const testimonialIndex = isMobile 
                  ? currentPair 
                  : (currentPair * 2) + offset;
                const testimonial = testimonials[testimonialIndex];
                
                if (!testimonial) return null;
                
                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ 
                      duration: 0.5,
                      delay: offset * 0.2
                    }}
                    className={`${isMobile ? 'w-full' : 'w-1/2'} md:p-4`}
                  >
                    <div className="bg-[#F4F6F4] rounded-2xl p-4 md:p-4 min-h-[300px] md:min-h-[400px] flex justify-between flex-col">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + (offset * 0.1) }}
                        className="flex flex-col items-start mb-4 gap-5"
                      >
                        <div className="flex items-center justify-between w-full py-2 px-2 md:pl-6">
                          <img src="/images/flowerv.svg" className="w-8 md:w-auto" />
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        </div>
                      </motion.div>
                      <div>
                        <img
                          className="md:w-auto object-cover h-4 md:h-6"
                          src="/images/vector.svg"
                        />
                      </div>
                      <blockquote>
                        <p className="text-sm md:text-base lg:text-xl leading-[24px] md:leading-[34px] tracking-wide">
                          "{testimonial.text}"
                        </p>
                      </blockquote>
                      <div className="text-gray-700">
                        <p className="font-semibold text-sm md:text-base lg:text-xl">
                          {testimonial.name}
                        </p>
                        <p className="text-xs md:text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex gap-6 justify-center items-start mt-4 lg:hidden ">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="w-8 h-8 py-1 px-2 bg-[#F0AD12] text-[#095424] rounded-full shadow-md hover:bg-[#fede94]"
        >
          <ArrowLeftIcon className="w-4 h-4" strokeWidth={1.5} />
        </button>
        <button
          onClick={nextSlide}
          className="w-8 h-8 py-1 px-2 bg-[#F0AD12] text-[#095424] rounded-full shadow-md hover:bg-[#fede94]"
        >
          <ArrowRightIcon className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialCard;
