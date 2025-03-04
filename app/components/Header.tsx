"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Menu } from "lucide-react"; // Import the Menu icon for the hamburger
import Link from "next/link";
import { useRouter } from "next/navigation";
interface HeaderProps {
  isHeroPage?: boolean;
  variant?: "light" | "dark";
}

export default function Header({ isHeroPage = false, variant = "light" }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const colorScheme: {
    [key: string]: {
      text: string;
      border: string;
      hover: string;
      menuBg: string;
    };
  } = {
    light: {
      text: "text-white",
      border: "border-white",
      hover: "hover:bg-green-100 hover:text-black",
      menuBg: "bg-[#095424]"
    },
    dark: {
      text: "text-[#095424]",
      border: "border-[#095424]",
      hover: "hover:bg-green-100 hover:text-black",
      menuBg: "bg-white"
    }
  };

  const colors = colorScheme[variant];

  return (
    <>
      <header
        className={`${colors.text} pt-16 z-10 w-full flex items-center justify-between p-4 md:p-16 absolute`}
      >
        <div className="w-[30%] space-y-10 cursor-pointer" onClick={() => router.push("/")}>
          <img src="/images/logo.svg" alt="Logo" className="w-16 md:w-auto" />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <button
            className={`w-full text-left md:text-center border ${colors.border} rounded-full py-2 px-4 font-semibold ${colors.hover}`}
          >
            Menu
          </button>
        </div>

        {/* Navigation Buttons */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 md:items-center md:justify-center absolute md:static top-30 right-2 md:w-auto ${
            colors.menuBg
          } md:bg-transparent p-4 md:p-0`}
        >
          <Link
            href={"/event"}
            className={`block text-left md:text-center border ${colors.border} rounded-full px-4 py-2 ${colors.hover} mb-2 md:mb-0`}
          >
            Training
          </Link>
          <Link
            href={"/event"}
            className={`block text-left md:text-center border ${colors.border} rounded-full px-4 py-2 ${colors.hover}`}
          >
            Attend Event
          </Link>
        </nav>
      </header>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col min-h-screen">
          <div className="flex justify-between items-center p-4 pt-16">
            <img src="/images/logo.svg" alt="Logo" className="w-16" />
            <button onClick={toggleMenu} className="p-2">
              <X className="h-6 w-6 text-[#095424]" />
            </button>
          </div>

          <nav className="flex flex-col items-start px-8 mt-12 space-y-8">
            <Link
              href="/"
              className="text-[#095424] text-xl font-medium  border 
rounded-full px-4 py-2 "
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/event"
              className="text-[#095424] text-xl font-medium  border 
rounded-full px-4 py-2"
              onClick={toggleMenu}
            >
              Training
            </Link>
            <Link
              href="/event"
              className="text-[#095424] text-xl font-medium  border 
rounded-full px-4 py-2"
              onClick={toggleMenu}
            >
              Attend Event
            </Link>
          </nav>

          <div className="mt-auto p-8">
            <div className="relative w-full">
              <img
                src="/images/logo2.svg"
                alt="NB Bar Academy"
                className="mx-auto  w-48 sm:w-auto"
              />
              {/* <img
                src="/images/nb-bar-academy-logo.png"
                alt="NB Bar Academy"
                className="mx-auto mb-8"
              /> */}
              <img
                src="/images/bottomMobileMenu.svg"
                alt="Pattern"
                className="w-full  sm:w-auto"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
