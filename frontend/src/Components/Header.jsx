import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between px-6 py-4 items-center bg-slate-700 shadow-md">
        <Link to="/">
          <h1 className="text-2xl text-white bg-gradient-to-tr from-white to-slate-500 via-pink-600 font-bold p-2 rounded">
            Authen's
          </h1>
        </Link>

        <div className="hidden md:flex gap-6 font-semibold">
          <ul className="flex gap-6">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Project
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Link
            to="/Signup"
            className="hidden md:block text-white bg-gradient-to-tr from-orange-500 to-slate-800 via-pink-600 font-bold p-2 rounded hover:shadow-lg transition duration-300"
          >
            SignUp
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-slate-700">
          <ul className="flex flex-col ps-4 gap-4 py-4">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-300 transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-gray-300 transition duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="text-white hover:text-gray-300 transition duration-300"
                onClick={toggleMenu}
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="text-white hover:text-gray-300 transition duration-300"
                onClick={toggleMenu}
              >
                Project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
