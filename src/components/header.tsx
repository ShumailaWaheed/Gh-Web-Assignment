"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-[rgb(4,78,131)] backdrop-blur-3xl print:hidden">
      <div className="m-auto flex h-[60px] sm:h-[60px] md:h-20 w-[95%] items-center justify-between lg:w-[90%] xl:w-[1300px] relative">
        <div className={`flex items-center mt-10 ${isMenuOpen ? "absolute top-0 left-0 z-[-1]" : ""}`}>
          <Image
            alt="logo"
            loading="lazy"
            width={90}
            height={113}
            src="/images/gh-logo.png"
            className="mt-6 w-[100%] sm:mt-10 sm:w-[80px] md:w-[90px]"
          />
        </div>

        <div className="hidden sm:flex hidden:md:flex sm:flex-row items-center sm:gap-10">
          <h1 className="text-[24px] md:text-[17px] font-bold text-[#b9d8f3] lg:block xl-lg text-xl xl:text-2xl">
            Tuition Free Education Program on Latest Technologies
          </h1>
          <nav>
            <ul className="flex gap-10 lg:text-lg md:text-sm text-white ml-10 md:ml-2">
              <li><a href="#home" className="hover:text-gray-200">Home</a></li>
              <li><a href="#apply" className="hover:text-gray-200">Apply</a></li>
              <li><a href="#jobs" className="hover:text-gray-200">Jobs</a></li>
              <li><a href="#result" className="hover:text-gray-200">Result</a></li>
              <li><a href="#courses" className="hover:text-gray-200">Courses</a></li>
            </ul>
          </nav>
        </div>

        <h2 className="sm:block md:hidden text-lg font-bold text-[#b9d8f3] text-center mr-10 w-full">
          Tuition Free Program
        </h2>

        <div className="sm:hidden absolute top-0 right-0 flex justify-center items-center mt-5 mr-5">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
            className="text-white text-2xl"
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="sm:hidden bg-[rgb(4,78,131)] text-white p-5">
          <ul className="flex flex-col gap-10 text-lg">
            <li><a href="#home" className="hover:text-gray-200">Home</a></li>
            <li><a href="#apply" className="hover:text-gray-200">Apply</a></li>
            <li><a href="#jobs" className="hover:text-gray-200">Jobs</a></li>
            <li><a href="#result" className="hover:text-gray-200">Result</a></li>
            <li><a href="#courses" className="hover:text-gray-200">Courses</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
