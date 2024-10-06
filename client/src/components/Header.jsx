/* eslint-disable react/prop-types */
import React from "react";
import { HiMenu } from "react-icons/hi";

const Header = ({ selectedSidebarItem, toggleSidebar }) => {
  return (
    <header
      className="w-full bg-[#33eaff] flex items-center justify-between px-4 py-2 fixed md:static z-40"
      style={{ backgroundColor: selectedSidebarItem.color || "#33eaff" }}
    >
      <div className="md:hidden">
        <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
          <HiMenu className="w-6 h-6 text-blue-900" />
        </button>
      </div>

      <div className="flex items-center">
        <div className="px-4 py-1 text-xl cursor-pointer">
          <h2 className=" font-bold text-sm md:text-xl">Home</h2>
        </div>
      </div>

      <div className="px-10 md:mx-44 lg:mx-72 pt-1 font-normal text-blue-800">
        <h1 className="text-lg md:text-2xl">
          {selectedSidebarItem.name || "Thiamine(B1)"}
        </h1>
      </div>
    </header>
  );
};

export default Header;
