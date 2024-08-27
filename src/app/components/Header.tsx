"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Icon */}
        <div className="flex items-start">
          <Image
            src="/images/a2sv.svg" // Replace with your icon image path
            alt="Icon"
            width={50}
            height={32}
            className="h-10 w-24"
          />
        </div>

        {/* Middle: Text Buttons */}
        <div className="flex space-x-8 text-center">
          {[
            "Home",
            "Teams",
            "Success Stories",
            "About Us",
            "Blogs",
            "Get Involved",
          ].map((buttonText, index) => (
            <a
              key={index}
              href="#"
              className="text-[#565656] font-medium text-[15px] leading-[24.38px] hover:text-[#264FAD] relative hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#264FAD]"
              style={{ fontFamily: "Montserrat", textAlign: "left" }}
            >
              {buttonText}
            </a>
          ))}
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-4">
          <button
            className="text-[#3C3C3C] font-semibold"
            style={{ fontFamily: "Montserrat", fontSize: "18px" }}
          >
            Login
          </button>
          <button className="bg-[#264FAD] text-white font-normal py-2 px-4 rounded-md">
            Donate
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden text-center mt-4">
          {["Home", "About", "Services", "Blog", "Contact", "FAQ"].map(
            (buttonText, index) => (
              <a
                key={index}
                href="#"
                className="block text-[#565656] font-semibold py-2 hover:text-[#264FAD] hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#264FAD]"
                style={{ fontFamily: "Montserrat", textAlign: "left" }}
              >
                {buttonText}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
