"use client";
import { useState } from "react";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});
const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      {/* Top Banner */}
      <div
        className={`bg-black text-white gap-[10px] w-full h-[34px] py-[9px] font-normal flex justify-between items-center lg:h-[38px] text-sm ${inter.className}`}
      >
        <div className="flex justify-center flex-1 gap-[10px]">
          Sign up and get 20% off your first order.
          <a href="#" className="underline font-medium">
            Sign Up Now
          </a>
        </div>
        <img
          src="/assets/cross.png"
          alt="back"
          className="hidden lg:block h-5 w-5 cursor-pointer mr-16"
        />
      </div>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden">
        {/* Hamburger Icon */}
        <img
          src="/assets/hamburger.png"
          alt="hamburgerIcon"
          className="h-6 w-6 my-3 ml-4 cursor-pointer"
          onClick={toggleDropdown}
        />
        <img
          src="/assets/brandLogo.png"
          alt="logo"
          className="w-[126px] h-[18px] ml-4 my-[18px]"
        />
        <span className="w-[96px] h-6 my-3 ml-[96px] flex gap-3">
          <img
            src="/assets/search.png"
            alt="searchIcon"
            className="h-6 w-6 cursor-pointer"
          />
          <img
            src="/assets/cart.png"
            alt="cartIcon"
            className="h-6 w-6 cursor-pointer"
          />
          <img
            src="/assets/profile.png"
            alt="profileIcon"
            className="h-6 w-6 cursor-pointer"
          />
        </span>
      </div>

      {/* Dropdown Menu */}
      {isDropdownVisible && (
        <div
          className={`bg-white text-[#00000099] absolute left-0 w-full shadow-md z-50 flex flex-col ${inter.className}`}
        >
          <a
            href="#"
            className="py-2 px-4 hover:bg-gray-200 border-b-2 border-gray-400"
          >
            Shop
          </a>
          <a
            href="#"
            className="py-2 px-4 hover:bg-gray-200 border-b-2 border-gray-400"
          >
            On Sale
          </a>
          <a
            href="#"
            className="py-2 px-4 hover:bg-gray-200 border-b-2 border-gray-400"
          >
            New Arrivals
          </a>
          <a
            href="#"
            className="py-2 px-4 hover:bg-gray-200 border-b-2 border-gray-400"
          >
            Brands
          </a>
        </div>
      )}

      {/* Desktop Navbar */}
      <div
        className={`hidden lg:flex h-[48px] w-[1240px] mx-[100px] gap-10 my-6 justify-center items-center ${inter.className}`}
      >
        <img
          src="/assets/brandLogo.png"
          alt="logo"
          className="w-[160px] h-[22px]"
        />
        <ul className="h-[22px] w-[321px] flex gap-4 font-normal text-base">
          <li className="cursor-pointer flex items-center gap-1">
            Shop <img src="/assets/Frame.png" alt="downwardArrow" />
          </li>
          <li className="cursor-pointer">On Sale</li>
          <li className="cursor-pointer">New Arrivals</li>
          <li className="cursor-pointer">Brands</li>
        </ul>
        <input
          type="search"
          placeholder="Search for Products..."
          className="w-[577px] h-[48px] rounded-[62px] bg-[#F0F0F0] py-3 px-4 bg-no-repeat bg-[url('/assets/searchGrey.png')] bg-[left_16px_center] pl-16 font-normal text-base text-[#00000066]"
        />
        <div className="w-[62px] h-6 flex gap-[14px]">
          <img
            src="/assets/cart.png"
            alt="cart"
            className="w-6 cursor-pointer"
          />
          <img
            src="/assets/profile.png"
            alt="profile"
            className="w-6 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
