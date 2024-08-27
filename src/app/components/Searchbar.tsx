import React from "react";
import { FaPlus } from "react-icons/fa"; // Import the plus icon from react-icons

const HeaderComponent = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 mb-1">
      {/* Title */}
      <h1 className="font-montserrat text-2xl text-[#000000] font-bold leading-12 text-start">
        Blogs
      </h1>

      {/* Search Box and Button */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-64 px-4 py-2 border-2 border-[#CFCFCF] rounded-3xl"
        />

        {/* Button */}
        <button className="flex items-center gap-2 px-6 py-3 bg-[#264FAD] text-white font-montserrat text-20 font-medium leading-20 rounded-full">
          {/* Plus Icon */}+ New Blog
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
