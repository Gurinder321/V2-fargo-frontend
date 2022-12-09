import React from "react";
import { Link } from "react-router-dom";
import bulbOne from "./light-bulb.png";
import { FiUsers } from "react-icons/fi";
import { AiOutlineDashboard } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-16 h-screen space-x-6 bg-gray-300 shadow-lg">
      {/* Component Start */}

      <div className="flex flex-col items-center w-16 h-full overflow-hidden text-gray-400 bg-gray-900  ">
        <Link className="flex items-center justify-center mt-3" to="#">
          <svg
            className="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
        </Link>
        <div className="flex flex-col items-center mt-3 border-t border-gray-700">
          <div className="static group">
            <Link
              className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300 "
              to="/admin/dashboard"
            >
              <AiOutlineDashboard size={24} />
            </Link>
            <div className="flex justify-start items-center absolute top-[71px] left-20 w-auto p-2 border rounded-md shadow-md bg-gray-900 text-white text-sm font-bold transition-all duration-100 scale-0 group-hover:scale-100 z-10">
              <span>Dashboard</span>
              <img src={bulbOne} alt="" className="w-4 ml-1" />
            </div>
          </div>
          <div className="static group">
            <Link
              className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              to="/admin/all"
            >
             <FiUsers size={24} />
            </Link>
            <div className="flex justify-start items-center absolute top-[126px] left-20 w-auto p-2 border rounded-md shadow-md bg-gray-900 text-white text-sm font-bold transition-all duration-100  scale-0 group-hover:scale-100 z-10">
              <span>Users</span>
              <img src={bulbOne} alt="" className="w-4 ml-1 " />
            </div>
          </div>
          <div className="static group">
            <Link
              className="flex items-center justify-center w-12 h-12 mt-2 text-gray-200 bg-gray-700 rounded"
              to="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </Link>
            <div className="flex justify-start items-center absolute top-[183px] left-20 w-auto p-2 border rounded-md shadow-md bg-gray-900 text-white text-sm font-bold transition-all duration-100  scale-0 group-hover:scale-100 z-10">
              <span>Tooltip</span>
              <img src={bulbOne} alt="" className="w-4 ml-1" />
            </div>
          </div>
          <div className="static group">
            <Link
              className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              to="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                />
              </svg>
            </Link>
            <div className="flex justify-start items-center absolute top-[241px] left-20 w-auto p-2 border rounded-md shadow-md bg-gray-900 text-white text-sm font-bold transition-all duration-100  scale-0 group-hover:scale-100 z-10">
              <span>Tooltip</span>
              <img src={bulbOne} alt="" className="w-4 ml-1" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-2 border-t border-gray-700">
          <Link
            className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
            to="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </Link>
          <Link
            className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
            to="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </Link>
          <Link
            className="relative flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
            to="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full" />
          </Link>
        </div>
        <Link
          className="flex items-center justify-center w-16 h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
          to="#"
        >
          <svg
            className="w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      </div>
      {/* Component End  */}
    </div>
  );
};

export default Sidebar;
