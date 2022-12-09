import React from 'react';
import { FaBeer } from 'react-icons/fa';

const AllInOne = () => {
  return (
    <div
      name="platforms"
      className="w-full  bg-gradient-to-r from-[#553e94] via-[#7867a7] to-[#553e94]"
    >
      <div className="max-w-[1240px] mx-auto text-white px-7 py-14">
        <h2 className="text-3xl font-medium text-center mb-6">
          Join thousands of FundsGo users around the World
        </h2>

        <div className="pt-4 md:flex md:justify-between md:items-start lg:flex lg:justify-between lg:items-start ">
          <div className="mb-14">
            <div className="text-center">
              <h3 className="font-medium text-xl">Private Investors</h3>
              <p className="pt-2 pb-4 p-4">
                Find Funding for Real Estate, Small Business Capital, TV & Film, Inventions and
                more!
              </p>
            </div>
          </div>
          <div className="mb-14">
            <div className="text-center">
              <h3 className="font-medium text-xl">Angel Investors</h3>
              <p className="pt-2 pb-4 p-4">
                Showcase your investment offer to Business Angels and Seed Investors.
              </p>
            </div>
          </div>
          <div className="mb-14">
            <div className="text-center  ">
              <h3 className="font-medium text-xl">Business Partners</h3>
              <p className="pt-2 pb-4 p-4">
                Looking for a Business Partner to kickstart your Startup or existing Business? Pitch
                a Partner Today!
              </p>
            </div>
          </div>
          <div className="mb-4 lg:mb-14">
            <div className="text-center ">
              <h3 className="font-medium text-xl">Venture Capital</h3>
              <p className="pt-2 pb-4 p-4">
                Need first or second round of Venture Funding? Ignite your Startup - Go Social.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
