import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header1 = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className=" w-full h-[80px] z-10  bg-[#2f2f2f50] drop-shadow-lg absolute">
      <div className=" flex justify-between items-center  w-full h-full max-w-[1240px] m-auto px-7 ">
        <div className="flex items-center text-white ">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl ">BRAND.</h1>
          <ul className="hidden md:flex ">
            <li className="p-4">
              <Link to="/" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="p-4">
              <Link to="/contact" smooth={true} offset={-200} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <Link to="#">
            <Link to="/login">
              <button
                className="px-4 py-2 mr-4 text-white border bg-transparent border-[white]
              rounded-md 
              hover:bg-white hover:text-black "
              >
                Login
              </button>
            </Link>
          </Link>
          <Link to="#">
            {' '}
            <Link to="/register">
              <button
                className="px-4 py-2 text-white border bg-[#28a745] border-[#28a745]
              rounded-md 
                hover:bg-white hover:text-black hover:border-black"
              >
                Sign Up
              </button>
            </Link>
          </Link>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className="border-b-2 border-zinc-300 w-full p-4">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full p-4">
          <Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>
            Contact
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button
            className="bg-transparent px-8 py-3 mb-4 text-[#5967D8] border bg-indigo-600 border-indigo-600
    hover:bg-transparent hover:text-indigo-600 rounded-md"
          >
            Sign In
          </button>
          <button
            className="px-8 py-3 text-white border bg-[#5967D8] border-[#5967D8]
    hover:bg-transparent hover:text-indigo-600 rounded-md"
          >
            Sign Up
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Header1;
