import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div className="bg-[url('https://i.imgur.com/JfKrkcB.jpg')] bg-cover bg-center clip-your-needful-style w-full flex flex-col justify-between h-[600px]	">
        <div className=" md:grid-cols-2 xl:grid xl:grid-col-6 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-7 py-8 text-white ">
            <h1 className="py-3 text-2xl md:text-3xl font-medium">
              Need Capital? Raise Funding, Pitch Investors & Get Funded!
            </h1>
            <p className="py-3 text-lg">
              Social Networking, Angel Investors, Venture Capitalists, Private Investors, Business
              Partnerships, Entrepreneurs, Incubators, Accelerators and more!
            </p>
            <div className="flex mt-2">
              <Link to="/login">
                <button
                  className="px-4 py-2 mr-4 text-lg text-white border bg-transparent border-[white]
              rounded-md 
              hover:bg-white hover:text-black "
                >
                  Account Login
                </button>
              </Link>
              <Link to="/register">
                <button
                  className="px-4 py-2 text-lg text-white border bg-[#28a745] border-[#28a745]
              rounded-md 
                hover:bg-white hover:text-black hover:border-black "
                >
                  Create Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
