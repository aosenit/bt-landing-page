"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUp, Menu } from "lucide-react"; // Import the Menu icon for the hamburger
import Link from "next/link";

export default function Header({ isHeroPage = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white pt-16  z-10 w-full flex items-center justify-between p-4 md:p-16 absolute">
      <div className="w-[30%] space-y-10">
        <img src="/images/logo.svg" alt="Logo" className="w-16 md:w-auto" />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <button className="w-full text-left md:text-center border border-white rounded-full py-2 px-4 font-semibold hover:bg-green-100 hover:text-black">Menu</button>
      </div>

      {/* Navigation Buttons */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:space-x-6 md:items-center md:justify-center absolute md:static top-30 right-2  md:w-auto bg-[#095424] md:bg-transparent p-4 md:p-0`}
      >
        <Link
          href={"/event"}
          className="block  text-left md:text-center border border-white rounded-full px-4 py-2 hover:bg-green-100 hover:text-black mb-2 md:mb-0"
        >
          Training
        </Link>
        <Link
          href={"/event"}
          className="block  text-left md:text-center border border-white rounded-full px-4 py-2 hover:bg-green-100 hover:text-black "
        >
          Attend Event
        </Link>
      </nav>
    </header>
  );
}
