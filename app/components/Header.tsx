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
    <header className="text-white  z-10 w-full flex items-center justify-between p-4 md:p-16 absolute">
      <div className="w-[30%] space-y-10">
        <img src="/images/logo.svg" alt="Logo" className="w-24 md:w-auto" />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden" onClick={toggleMenu}>
        <Menu className="cursor-pointer" />
      </div>

      {/* Navigation Buttons */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:space-x-6 md:items-center md:justify-center absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0`}
      >
        <Link
          href={"/event"}
          className="block w-full text-left md:text-center border border-white rounded-2xl p-2 hover:bg-green-100 hover:text-black mb-2 md:mb-0"
        >
          Training
        </Link>
        <Link
          href={"/event"}
          className="block w-[15rem] text-left md:text-center border border-white rounded-2xl p-2 hover:bg-green-100 hover:text-black "
        >
          Attend Event
        </Link>
      </nav>
    </header>
  );
}
