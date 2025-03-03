"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    image: "/images/profileimg.svg",
    text: "I joined the Bar Training Masterclass with zero experience. In weeks, I mastered mixology, gained confidence, and became a pro",
    name: "Alex M.",
    position: "Office/branch",
  },
  {
    id: 2,
    image: "/images/profileimg.svg",
    text: "I joined the Bar Training Masterclass with zero experience. In weeks, I mastered mixology, gained confidence, and became a pro",
    name: "Sarah J.",
    position: "Branch Manager",
  },
];

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-6 md:py-12 flex flex-col lg:flex-row items-start lg:items-end px-6 max-w-7xl mx-auto lg:pb-20">
      <div className="text-left mb-6 md:mb-8 space-y-2 w-full lg:w-auto">
        <p className="text-yellow-600 font-semibold text-sm md:text-base">
          TESTIMONIAL
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900  lg:px-0">
          SUCCESS STORY FROM OUR ACADEMY TRAINING
        </h2>
        <div className="flex gap-4 md:gap-8 justify-center lg:justify-start hidden lg:block space-x-10">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="py-1 px-2 bg-[#F0AD12] text-[#095424] rounded-full shadow-md hover:bg-[#fede94]"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="py-1 px-2 bg-[#F0AD12] text-[#095424] rounded-full shadow-md hover:bg-[#020202]"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full ">
        {/* Testimonial Cards */}
        <div className="w-full flex overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`w-full md:p-4 transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100 lg:opacity-100" : "opacity-0 hidden lg:block lg:opacity-100"
              } ${
                index === 1 ? "lg:ml-4" : ""
              }`}
            >
              <div className="bg-[#F4F6F4] rounded-2xl p-4 md:p-4">
                <div className="flex flex-col items-start mb-4">
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
                  <img
                    className="m-2 md:m-4 w-6 md:w-auto"
                    src="/images/vector.svg"
                  />
                  <blockquote>
                    <p className="text-gray-600 text-sm md:text-base lg:text-xl">
                      "{testimonial.text}"
                    </p>
                  </blockquote>
                </div>
                <div className="text-gray-700">
                  <p className="font-semibold text-sm md:text-base lg:text-xl">
                    {testimonial.name}
                  </p>
                  <p className="text-xs md:text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 md:gap-8 justify-center items-start mt-4 lg:hidden space-x-10">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="py-1 px-2 bg-[#F0AD12] text-[#095424] rounded-full shadow-md hover:bg-[#fede94]"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="py-1 px-2 bg-[#F0AD12] text-[#095424] rounded-full shadow-md hover:bg-[#fede94]"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default TestimonialCard;
