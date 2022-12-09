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

const RegisterStep3 = () => {
  const number = useRef();
  const navigate = useNavigate();

  const handleVerification = async (event) => {
    event.preventDefault();
    const body = {
      otp: event.target.otp.value,
    };
    let token = localStorage.getItem("auth");
    if (!token) return console.log("No token found");
    await axios
      .post("/auth/verification/number/otp", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data === "0") {
          return console.log("Error -- otp");
        }
        localStorage.removeItem("auth");
        // navigate to login
        navigate("/login");
      })
      .catch(() => {
        console.log("OTP data");
      });
  };
  const handleClick = async (event) => {
    event.preventDefault();
    let token = localStorage.getItem("auth");
    if (!token) return console.log("No token found");

    const user = {
      // profile_picture: profile_picture.current.value,
      number: number.current.value,
    };
    // return console.log(user)
    try {
      // localhost:3000/auth/signup
      await axios
        .post("/account/update", user, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (response) => {
          console.log(response.data);
          if (response.data.result === "0") {
            return console.log(`An error`);
          }
          await axios
            .get("/auth/verification/number", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response) => {
              console.log();
              console.log(response.data, "OTP sent");
              console.log();
            });

          // get the otp
          // navigate('/register3')
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
      <div className=" h-[180px]  bg-[url('https://i.imgur.com/6ZyzH0D.png')] drop-shadow-lg text-center">
        <h1 className="text-white text-4xl font-semibold pt-20">
          Create Your Profile
        </h1>
      </div>
      <div className="border bg-[#EBEFF4] pb-10">
        {/* Basic Info, this information is already filled out */}
        <div className=" max-w-[840px] mx-auto">
          <div className=" text-3xl py-10  text-center">
            <h6 className="text-sm mb-3">
              <span>Profile • </span>
              <span>Preference • </span>
              <span>Network • </span>
              <span className="text-[#4335dc] font-medium">Done</span>
            </h6>
            <h3>Verify your phone number</h3>
            <p className="text-base mt-5 px-10">
              Your phone number will only ever be used to verify your identity.
            </p>
          </div>
          <div className="border m-4 rounded-lg bg-white mb-0">
          <form
            onSubmit={handleClick}
            action=""
            className=""
          >

            <div className="md:flex md:justify-between">
              <div className="flex flex-col m-4 bg-white md:w-full">
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  placeholder="+1 555-555-5555"
                  ref={number}
                  className="bg-white mb-4 md:mb-0 border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 focus:outline-none  focus:border-blue-500 mt-1"
                />
                <button
                  type="submit"
                  className="bg-white text-[#4335dc] border border-[#4335dc] px-3 py-2 rounded mt-3 hover:text-white hover:bg-[#4335dc]  text-sm"
                >
                  Send Code
                </button>

                <div>
                  <p className="text-[#4335dc] text-xs p-5 px-10 text-center">
                    {" "}
                    We sent a verification code to vour phone. If vou don't
                    receive an SMS message within 3 minutes check vour phone
                    number and resubmit it to recond the code
                  </p>
                </div>
              </div>
            </div>

            {/* <button className="bg-[#4335dc] px-3 py-2 rounded mt-3 text-white text-sm">
                  Save and Continue
                </button> */}
          </form>
          <form onSubmit={handleVerification} >
            <div className="flex flex-col   bg-white  md:w-full p-4">
              <label htmlFor="">Enter Verification Code</label>
              <input
                type="text"
                className="bg-white mb-4 md:mb-0 border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 focus:outline-none  focus:border-blue-500 mt-1"
                name="otp"
                required
              />
              <button
                type="submit"
                className="bg-[#4335dc] border border-[#4335dc] px-3 py-2 rounded mt-3 text-white text-sm hover:bg-[#4f43db]"
              >
                Verify Phone Number
              </button>
            </div>
          </form>
                </div>
        
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterStep3;
