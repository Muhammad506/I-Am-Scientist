"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      {/* Navbar for Large Devices */}
      <div
        className="lg:flex hidden absolute bg-[#04236E] top-0 justify-around items-center self-center Jmd:px-10 px-7 py-3 w-full z-50 text-white"
        id="navbar"
      >
        <Image
          src={"/Scientist-Logo-1 1.png"}
          width={140}
          height={0}
          sizes="500px"
          alt="logo"
        />

        <ul className="flex gap-7 text-sm items-center font-semibold">
          <li className="">Home</li>
          <li className="">About Us</li>
          <li className="">Online Contest</li>
          <li className="">Online Outline</li>
          <li className="">Courses</li>
          <li className="">Contact</li>
          <li className="rounded-tr-md rounded-bl-md bg-[#C407B9] border h-fit px-4 py-[2px]">
            <button>Enroll</button>
          </li>
        </ul>
      </div>

      {/* Navbar for Small and Medium Devices */}
      <div className="flex lg:hidden absolute bg-[#04236E] top-0 justify-between items-center Jmd:px-10 px-4 py-3 w-full z-50 text-white">
        <Image
          src={"/Scientist-Logo-1 1.png"}
          width={100}
          height={0}
          sizes="500px"
          alt="logo"
        />
        <RxHamburgerMenu size={20} onClick={handleClick} />

        {/* Menu */}
        <div
          className={`${click ? "flex flex-col transform translate-x-0" : "lg:hidden transform translate-x-full "} fixed top-0 lg:hidden inset-0 justify-start items-start h-screen w-screen bg-[#04236E] text-white Jmd:px-10 px-4 py-3 transition-transform duration-700 overflow-y-auto`}
        >
          <Image
            src={"/Scientist-Logo-1 1.png"}
            width={100}
            height={0}
            sizes="500px"
            alt="logo"
          />
          <ul className="relative text-sm flex flex-col gap-7 font-semibold mt-10">
            <li className="">Home</li>
            <li className="">About Us</li>
            <li className="">Online Contest</li>
            <li className="">Online Outline</li>
            <li className="">Courses</li>
            <li className="">Contact</li>
            <li className="rounded-tr-md rounded-bl-md border bg-[#C407B9] h-fit w-fit px-4 py-1">
              <button>Enroll</button>
            </li>
          </ul>

          <IoMdClose
            className="absolute Jmd:right-10 right-4 top-5"
            size={20}
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
