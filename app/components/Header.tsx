"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  isHeroPage?: boolean;
  variant?: "light" | "dark";
}

export default function Header({ isHeroPage = false, variant = "light" }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const colorScheme: { [key: string]: { text: string; border: string; hover: string; menuBg: string } } = {
    light: {
      text: "text-white",
      border: "border-white",
      hover: "hover:bg-[#095424] hover:text-white",
      menuBg: "bg-[#095424]"
    },
    dark: {
      text: "text-[#095424]",
      border: "border-[#095424]",
      hover: "hover:bg-[#095424] hover:text-white",
      menuBg: "bg-white"
    }
  };

  const colors = colorScheme[variant];

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Training", href: "/event" },
    { title: "Attend Event", href: "/event" }
  ];

  return (
    <>
      <header className={`${colors.text} pt-16 z-10 w-full flex items-center justify-between p-4 md:p-16 absolute`}>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-[30%] space-y-10 cursor-pointer" 
          onClick={() => router.push("/")}
        >
          <img src="/images/logo.svg" alt="Logo" className="w-16 md:w-auto" />
        </motion.div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden cursor-pointer">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full text-left md:text-center border ${colors.border} rounded-full py-2 px-4 font-semibold ${colors.hover}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-6 md:items-center">
          {menuItems.slice(1).map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={`block text-left md:text-center border ${colors.border} rounded-full px-4 py-2 ${colors.hover}`}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 flex flex-col min-h-screen"
          >
            <div className="flex justify-between items-center p-4 pt-16">
              <img src="/images/logo.svg" alt="Logo" className="w-16" />
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)} 
                className="p-2"
              >
                <X className="h-6 w-6 text-[#095424]" />
              </motion.button>
            </div>

            <nav className="flex flex-col items-start px-8 mt-12 space-y-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-[#095424] text-xl font-medium border rounded-full px-4 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-auto p-8"
            >
              <div className="relative w-full">
                <img
                  src="/images/logo2.svg"
                  alt="NB Bar Academy"
                  className="mx-auto w-48 sm:w-auto"
                />
                <img
                  src="/images/bottomMobileMenu.svg"
                  alt="Pattern"
                  className="w-full sm:w-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
