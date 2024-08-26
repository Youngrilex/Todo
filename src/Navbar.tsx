import React, { useState } from "react";
import { Link } from "react-router-dom"; // Make sure you have react-router-dom installed
import DarkModeToggle from "./DarkModeToggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#b3c2f4] dark:bg-[#5b69c7] p-4 shadow-md z-50">
      <div className="container mx-auto justify-between flex sm:gap-44 ">
        <div className="flex gap-2 items-center text-2xl font-semibold text-gray-800 dark:text-white">
          <img src="/akintrack.png" alt="" className="w-12 h-12" />
          <Link to="" className="hover:underline">
            AkinTrack
          </Link>
        </div>
        <div className="max-h-12 flex sm:hidden">
          <DarkModeToggle />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-200 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`lg:flex flex-grow items-center  ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex gap-4 flex-col lg:flex-row lg:space-x-4">
            <Link
              to="/weather"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Weather
            </Link>
            <Link
              to="/quote"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Quote
            </Link>
            <Link
              to="/tasks"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Tasks
            </Link>
          </div>
         
        </div>
        <div className=" hidden sm:flex">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
