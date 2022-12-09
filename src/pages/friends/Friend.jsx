import React, { useState } from "react";

import friends from "../../pages/clickIcons/add-user-1.png";
import ClickFriends from "../../pages/clickIcons/add-user-click.png";
import heart from "../../pages/clickIcons/heart-1.png";
import ClickHeart from "../../pages/clickIcons/heart-click.png";
import note from "../../pages/clickIcons/note-1.png";
import ClickNote from "../../pages/clickIcons/note-click.png";
import picture from "../../pages/clickIcons/picture-1.png";
import ClickPicture from "../../pages/clickIcons/picture-click.png";
import video from "../../pages/clickIcons/video-1.png";
import ClickVideo from "../../pages/clickIcons/video-click.png";
import check from "../../pages/clickIcons/check-1.png";
import checkClick from "../../pages/clickIcons/check-click.png";

import {
  AiOutlineSetting,
  AiFillCaretDown,
  AiOutlineSearch,
  AiTwotoneBulb,
  AiOutlineClose,
  AiOutlineCheckCircle,
  AiTwotonePushpin,
  AiTwotoneTag,
  AiOutlineCloseCircle,
} from "react-icons/ai";

import { HiOutlineUserAdd } from "react-icons/hi";
import SpecialIcons from "./SpecialIcons";

const Friend = () => {
  const [overFriend, setOverFriend] = useState(false);
  const [overVideo, setOverVideo] = useState(false);
  const [overHeart, setOverHeart] = useState(false);
  const [overNote, setOverNote] = useState(false);
  const [overPicture, setOverPicture] = useState(false);
  return ( 
    <div>
      <div className=" bg-[#ffffff]  lg:m-0 lg:mb-6 lg:mx-0 rounded-tr-md rounded-tl-md mb-5 border border-[#bebebe]">
        <div className="bg-[#ededed] rounded-tr rounded-tl px-2 py-3 flex justify-between items-center  ">
          <div className="text-lg font-bold">
            Duis aute irure dolor in pineapple <span>X</span>
          </div>
          <button className="bg-[#ff1717] text-white p-2 rounded ">
            <AiOutlineClose />
          </button>
        </div>
        <div className="lg:flex lg:justify-between px-3 mt-8">
          <div className="">
            <p className="text-center text-sm text-[#969696]">
              PROFILE ID: 89149
            </p>
            <div className="">
            <div className="flex m-2 p-2 border w-40 mx-auto  lg:w-36">
              <img src="https://i.imgur.com/1Ge7acx.png" alt="" />
            </div>
            {/* TODO: */}
            






<SpecialIcons />








            </div>
          </div>
          <div className="lg:ml-4">
            <div className="lg:flex lg:justify-between">
              <div>
                <div className="flex justify-center items-center text-center text-sm mt-2 lg:mt-0 text-[#969696] lg:flex lg:justify-start ">
                  <div className="pr-2 ">JOSH A.</div>
                  <AiTwotonePushpin />
                  <div className="pl-1">TEXAS, UNITED STATES</div>
                </div>

                <div className="lg:flex lg:justify-between">
                  <div className="flex  justify-center lg:flex lg:justify-start">
                    <button className="bg-[#f0ad4e] px-3 py-2 rounded mt-3 mr-2 text-white text-sm">
                      STARTUP
                    </button>
                    <button className="bg-[#dc3545] px-3 py-2 rounded mt-3 text-white text-sm">
                      FUNDING NEEDED $512K
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex  justify-center lg:flex lg:flex-col lg:w-32">
                <button className="bg-[#ffc107] px-3 py-2 rounded mt-3 mr-2 lg:m-0 text-white text-sm">
                  Send Message
                </button>
                <button className="bg-[#007bff] px-3 py-2 rounded mt-3 text-white text-sm">
                  Update to View
                </button>
              </div>
            </div>

            {/* paragraph about the company */}
            <div>
              <div className="h-5 border-b-2 border-[#b4b4b4] text-center text-2xl "></div>
              <p className="text-center lg:text-left mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                perferendis facere ea ipsa possimus officiis eius voluptates
                provident libero reprehenderit dignissimos aspernatur...
                <span className="font-semibold text-[#17a2b8]">view more </span>
              </p>
              <div className="h-5 border-b-2 border-[#b4b4b4] text-center text-2xl "></div>

              <div className="lg:flex lg:justify-between">
                <div className="flex justify-start mt-3">
                  <p className="mr-8">
                    <span className="font-bold">INVESTOR TYPE:</span> Venture
                    open
                  </p>
                  <p>
                    <span className="font-bold">INDUSTRY:</span> Computers open
                  </p>
                </div>
                <div className="flex justify-center items-center bg-[#0C0] text-white text-center my-3  py-3 font-semibold lg:bg-[#fff0] lg:text-[#0C0] lg:text-xl lg:semi-bold lg:my-0 lg:py-0 lg:text-left">
                  <div className="pr-1">
                    <AiOutlineCheckCircle />
                  </div>
                  <div>ID VERIFIED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center pb-3 lg:justify-start lg:mt-2 px-3">
          <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
            <AiTwotoneTag />
            <p className="ml-1">IT Consulting</p>
          </button>
          <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
            <AiTwotoneTag />
            <p className="ml-1">IT Consulting</p>
          </button>
          <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
            <AiTwotoneTag />
            <p className="ml-1">IT Consulting</p>
          </button>
          <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
            <AiTwotoneTag />
            <p className="ml-1">IT Consulting</p>
          </button>
          <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
            <AiTwotoneTag />
            <p className="ml-1">IT Consulting</p>
          </button>
          <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
            <AiTwotoneTag />
            <p className="ml-1">IT Consulting</p>
          </button>
          <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
            <AiTwotoneTag />
            <p className="ml-1">IT Consulting</p>
          </button>
          <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
            <AiTwotoneTag />
            <p className="ml-1">IT Consulting</p>
          </button>
          <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
            <AiTwotoneTag />
            <p className="ml-1">IT Consulting</p>
          </button>
          <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
            <AiTwotoneTag />
            <p className="ml-1">IT Consulting</p>
          </button>
          <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
            <AiTwotoneTag />
            <p className="ml-1">IT Consulting</p>
          </button>
          <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
            <AiTwotoneTag />
            <p className="ml-1">IT Consulting</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Friend;
