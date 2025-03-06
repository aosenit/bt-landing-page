"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function HeinekenGlobal() {
  const router = useRouter();
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      // Flip the card after component is in view
      const flipTimer = setTimeout(() => setIsFlipped(true), 500);

      // Flip it back after 2 seconds
      const flipBackTimer = setTimeout(() => setIsFlipped(false), 2500);

      return () => {
        clearTimeout(flipTimer);
        clearTimeout(flipBackTimer);
      };
    }
  }, [isInView]);

  return (
    <section className=" sm:px-6 py-6 sm:py-8 md:px-10 lg:px-16 flex flex-col space-y-12 sm:space-y-20 items-center">
      <motion.img
        src="/images/logo2.svg"
        className="w-48 sm:w-auto hover:scale-110 transition-all duration-300"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
      />
      <div
        className="w-full h-[580px] sm:h-[500px] md:h-[600px] bg-cover bg-center transition-all rounded-[12px] sm:rounded-2xl duration-500 relative flex justify-center items-center"
        style={{ backgroundImage: "url('/images/hgimage.svg')" }}
      >
        <motion.div
          ref={ref}
          className="perspective-1000 w-[90%] sm:w-auto cursor-pointer relative group"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => setIsFlipped(!isFlipped)}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Pulsing indicator */}
          <motion.div
            className="absolute top-4 right-4 w-3 h-3 bg-[#F0AD12] rounded-full z-10 backface-hidden"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Front of card */}
          <motion.div
            className="bg-white flex flex-col items-center justify-center gap-3 sm:gap-4 p-4 pt-24 pb-36 sm:p-6 md:p-8 md:px-20 rounded-[12px] relative backface-hidden leading-[30px] md:leading-[50px] tracking-wider "
            style={{ backfaceVisibility: "hidden" }}
          >
            <h2 className="text-xl uppercase sm:text-2xl lg:text-[34px] text-center">
              The Heineken Global
            </h2>

            <img src="/images/hgvector.svg" className="w-8 sm:w-auto" />

            <h2 className="text-xl uppercase sm:text-2xl lg:text-[34px] text-center">
              Draught Championship
            </h2>

            <p className="text-base sm:text-[20px] w-full sm:w-[70%] text-center px-2">
              Want to be a part of the next championship register for our next
              event?
            </p>

            <div className="mt-6 md:mt-8">
              <button
                className="px-4 sm:px-6 py-3 sm:py-4 bg-[#095424] text-white transition rounded-full flex items-center gap-2 text-base sm:text-lg group font-normal tracking-wide"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push("/event");
                }}
              >
                Register to Attend
                <ArrowUpRight
                  className="bg-[#F0AD12] rounded-full text-[#095424] p-1 group-hover:translate-x-1 transition-all duration-300"
                  size={30}
                />
              </button>
            </div>

            {/* Decorative elements */}
            <img
              src="/images/bottle.svg"
              className="absolute right-[-1rem] sm:right-[-4rem] bottom-[-1rem] sm:bottom-[-3rem] w-24 sm:w-auto"
            />
            <img
              src="/images/hgvector2.svg"
              className="absolute right-0 top-2 w-16 sm:w-auto"
            />
            <img
              src="/images/hgvector3.svg"
              className="absolute left-0 bottom-1 w-16 sm:w-auto"
            />
          </motion.div>

          {/* Back of card */}
          <motion.div
            className="bg-[#095424] absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4 p-4 pt-24 pb-36 sm:p-6 md:p-8 md:px-20 rounded-[12px] backface-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <div className="text-white text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl">Join the Championship!</h2>
              <p className="text-lg sm:text-xl max-w-md">
                Showcase your skills and compete with the best bartenders
                globally
              </p>
              <button
                className="px-6 py-4 bg-[#F0AD12] text-[#095424] rounded-full flex items-center gap-2 text-lg group font-bold mx-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push("/event");
                }}
              >
                Register Now
                <ArrowUpRight
                  className="bg-[#095424]  text-[#F0AD12] rounded-full p-1 group-hover:translate-x-1 transition-all duration-300"
                  size={30}
                />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
