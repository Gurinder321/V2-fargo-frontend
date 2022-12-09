import React, { useRef } from "react";

import {
  AiOutlineSetting,
  AiFillCaretDown,
  AiOutlineSearch,
  AiTwotoneBulb,
  AiOutlineClose,
  AiOutlineInfoCircle,
  AiOutlineCheckCircle,
  AiTwotonePushpin,
  AiTwotoneTag,
  AiOutlineCloseCircle,
} from "react-icons/ai";

import { MdOutlineVerified } from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/Layout/footer";
import axios from "axios";

const RegisterStep1 = () => {
  const network = useRef();
  const industry = useRef();
  const amount = useRef();

  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();

    let amount = 0;
    if (event.target.category.value === "Thousand") {
      amount = event.target.amount.value * 1000;
    } else if (event.target.category.value === "Million") {
      amount = event.target.amount.value * 1000000;
    } else amount = 0;
    let token = localStorage.getItem("auth");
    if (!token) return console.log("No token found");

    const user = {
      network: network.current.value,
      industry: industry.current.value,
      amount,
    };
    try {
      // localhost:3000/auth/signup
      await axios
        .post("/account/update", user, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.result === "0") {
            return console.log(`An error`);
          }
          navigate("/register2");
        })
        .catch((error) => {
          console.log("Error", error);
        });
      // navigate('/register1')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" h-[180px]  bg-[url('https://i.imgur.com/6ZyzH0D.png')] drop-shadow-lg text-center ">
        <h1 className="text-white text-4xl font-semibold pt-20">
          Create Your Profile
        </h1>
      </div>
      <div className="border bg-[#EBEFF4]">
        {/* Basic Info, this information is already filled out */}
        <div className=" max-w-[840px] mx-auto">
          <div className=" text-3xl py-10  text-center">
            <h6 className="text-sm mb-3">
              <span>Profile • </span>
              <span className="text-[#4335dc] font-medium">Preference • </span>
              <span>Network • </span>
              <span>Done</span>
            </h6>
            <h3>Industry Preferences</h3>
            <p className="text-base mt-5 px-10">
              Apply privately to thousands of tech companies & startups with one
              profile.
            </p>
          </div>
          <form
            onSubmit={handleClick}
            className="border m-4 rounded-lg bg-white"
          >
            <div className="m-5 md:flex  md:justify-center md:items-end">
              <div className="flex flex-col w-full mr-10 ">
                <label htmlFor="" className="pb-2">
                  Networks<span>*</span>
                </label>
                <input
                  type="text"
                  name="network"
                  ref={network}
                  placeholder="Johnny Sims"
                  className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 focus:outline-none  focus:border-blue-500 mb-4 md:mb-0 lg:mb-0"
                />
              </div>
              <div className="flex flex-col w-full justify-end">
                <div className="bg-[#19A1B8] w-full py-2 px-2  text-white border-4 border-[#19A1B8] text-xs font-bold flex justify-center items-center">
                  <AiOutlineCheckCircle className="font-extrabold mr-2" />
                  <p> I'm seeking Business Partners or Investment Capital</p>
                </div>
              </div>
            </div>

            <div className="m-5 md:flex md:justify-start">
              <div className="flex flex-col w-full md:mr-10">
                <label htmlFor="" className="pb-2">
                  Industry Preferences<span>*</span>
                </label>
                <input
                  type="text"
                  name="industry"
                  ref={industry}
                  placeholder="Johnny Sims"
                  className="bg-white mb-4 md:mb-0 border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 focus:outline-none  focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="" className="pb-2">
                  Amount<span>*</span>
                </label>
                <div className="flex justify-left">
                  {/* amount : input */}
                  {/* category */}
                  <input
                    type="text"
                    name="amount"
                    ref={amount}
                    placeholder="432"
                    className="bg-white w-20 border text-center border-gray-200 rounded  py-2 px-2 text-gray-700 focus:outline-none  focus:border-blue-500"
                  />
                  <select name="category">
                    <option value={"Thousand"}> Thousand</option>
                    <option value={"Million"}> Million</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="text-right m-5">
              <button
                type="submit"
                className="bg-[#4335dc] px-3 py-2 rounded mt-3 text-white text-sm"
              >
                Create Profile
              </button>
              <Link to="/register2">register2</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterStep1;
