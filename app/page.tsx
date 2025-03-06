"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AboutDrinks from "./components/AboutDrinks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeinekenGlobal from "./components/HeinekenGlobal";
import Hero from "./components/Hero";
import Subscribe from "./components/Subscribe";
import TestimonialCard from "./components/TestimonialCard";

// Animation wrapper component
const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, // Only animate once
    margin: "-100px", // Start animation slightly before the section comes into view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AnimatedSection delay={0.2}>
        <TestimonialCard />
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <HeinekenGlobal />
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <AboutDrinks />
      </AnimatedSection>
      <AnimatedSection delay={0.5}>
        <Subscribe />
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <Footer />
      </AnimatedSection>
    </>
  );
}
