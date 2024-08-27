import React from "react";
import Card from "../Carddetail/carddetail";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
export default function Details() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <Navbar />

      <div className="w-full mt-16">
        {/* Centered Header */}
        <h1 className="font-fell text-[24px] font-medium leading-[35px] text-center w-full">
          The essential guide to Competitive Programming
        </h1>
        {/* Subheader */}
        <h2 className="text-center font-extralight mt-4 w-full">
          Programming | tech, 6 min read
        </h2>

        {/* Image Box - Centered */}
        <div className="w-[80%] mt-8 mx-auto">
          <div className="bg-gray-300 h-90 w-full mx-auto">
            <img
              src="./images/person.png"
              className="w-full h-full object-fit"
              alt="Description of Image"
            />
          </div>
        </div>

        {/* Avatar and Text Section - Centered */}
        <div className="flex flex-col items-center mt-12">
          {/* Circular Avatar Image */}
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-400">
            <img
              src="./images/av.png"
              className="w-full h-full object-cover"
              alt="Avatar"
            />
          </div>

          {/* Avatar Details */}
          <div className="mt-4 text-center">
            <span className="mx-2 text-md text-[#264FAD] font-light">
              chaltu kebede
            </span>
            |
            <span className="mx-2 text-md font-light">
              software engineer <br />
            </span>
            <span className="mx-2 font-semibold" style={{ color: "#264FAD" }}>
              @chaltu_kebede
            </span>
          </div>
        </div>

        {/* Informational Section - Aligned with Image */}
        <div className="mt-12 w-[80%] mx-auto">
          <h3 className="font-fell text-[24px] font-semibold leading-[60px] text-left mb-2">
            We know that data structure and algorithm can seem hard at first
            glance...
          </h3>
          <p className="font-montserrat text-[18px] font-extralight leading-[45px] text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...
          </p>
        </div>

        {/* Related Page Section - Aligned with Informational Section */}
        <div className="w-[80%] mx-auto mt-12 mb-2">
          <h3 className="text-left text-xl mb-4">Related Page</h3>
          <div className="flex flex-wrap justify-between">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
