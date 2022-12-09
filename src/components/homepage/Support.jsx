import React from 'react';

const Support = () => {
  return (
    <div name="about" className="w-full py-12 bg-[#f7f9fa]">
      <div className="max-w-[1240px] mx-auto px-7">
        <div className="text-center">
          <h2 className="text-4xl font-semibold py-10">
            Create your Elevator Pitch in less than 5 Minutes - Find Investment Money!
          </h2>
        </div>

        <div></div>

        <div className="mb-10">
          <ul className="flex px-2 text-center items-center justify-center">
            <li
              className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-blue py-2 px-4 border border-[#3008f7] hover:border-transparent rounded-l-lg

"
            >
              <a href="#tab-1">Investors</a>
            </li>
            <li
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-blue py-2 px-4 border border-[#3008f7] hover:border-transparent rounded-r-lg

"
            >
              <a href="#tab-2">Startups</a>
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="  ">
            <div className="flex items-center justify-center">
              <img src="https://i.imgur.com/fYydKtY.png" alt="" className="w-5/6" />
            </div>

            <p className="text-gray-400 mt-2 mb-4">
              <span className="font-bold">1. </span>FUNDED: ROBOTICS - $890,000
            </p>
          </div>
          <div className="  ">
            <div className="flex items-center justify-center">
              <img src="https://i.imgur.com/fYydKtY.png" alt="" className="w-5/6" />
            </div>

            <p className="text-gray-400 mt-2 mb-4">
              <span className="font-bold">1. </span>FUNDED: ROBOTICS - $890,000
            </p>
          </div>
          <div className="  ">
            <div className="flex items-center justify-center">
              <img src="https://i.imgur.com/fYydKtY.png" alt="" className="w-5/6" />
            </div>

            <p className="text-gray-400 mt-2 mb-4">
              <span className="font-bold">1. </span>FUNDED: ROBOTICS - $890,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
