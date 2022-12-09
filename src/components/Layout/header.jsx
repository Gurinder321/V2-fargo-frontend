import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-primary ">
      <div className="container mx-auto mx-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to="" aria-label="Instagram logo">
                <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12" />
              </Link>
            </h1>
          </div>
          <div className="text-gray-700 text-center flex items-center align-items">
            <Link to="">
              <button type="button" className="bg-blue-medium font-bold text-white w-20 h-8">
                Login
              </button>
            </Link>
            <Link to="">
              <button type="button" className="font-bold text-sm rounded text-blue-medium w-20 h-8">
                Sign Upsdsfsdf
              </button>
            </Link>
            <Link to="">
              <button type="button" className="font-bold text-sm rounded text-blue-medium w-20 h-8">
                Sign Up1
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
