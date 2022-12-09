import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  AiOutlineSearch,
  AiTwotoneBulb,
  AiOutlineClose,
  AiTwotonePushpin,
  AiTwotoneTag,
  AiOutlineCloseCircle,
} from "react-icons/ai";

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

import User_card from "./user_card";

const MembersList = () => {
  //
  const [users, setUsers] = useState([]);
  const [ my_id , setMyId ] = useState("");
  const [showNote, setShowNote] = useState(false);
  function viewNotes() {
    var x = document.getElementById("note");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function viewVideos() {
    var x = document.getElementById("video");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function viewPictures() {
    var x = document.getElementById("image");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  // state
  // page

  useEffect(() => {
    const get_users = async () => {
      let token = localStorage.getItem("auth");
      if (!token) return console.log(`User not logged in`);
      await axios
        .get(`/account/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.result === "0") {
            return console.log("Unable to fetch all users");
          }
          setUsers(response.data.all_users);
          setMyId(response.data.my_id);
        })
        .catch(() => {
          console.log(`Error fetching all the users`);
        });
    };
    get_users();
  }, []);
  return (
    <>
      <div className="">
        <div className=" lg:m-10 lg:ml-0 md:w-full">
          {/* FIXME:
           menu navigation  */}

          <div className="mt-8 lg:flex lg:justify-between">
            <div className=" bg-[#ffffff00]   sm:ml-0 sm: mt-4 lg:ml-4 lg:mt-0">
              {/* search box */}
              <div>
                <form className="hidden lg:flex lg:justify-between">
                  <select
                    name="cars"
                    id="cars"
                    className="border border-[#9f9f9f] rounded  px-4 py-2 flex justify-between items-center w-full mr-2 text-sm text-[#a8a8a8]"
                  >
                    <option value="volvo">All Networks</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                  <select
                    name="cars"
                    id="cars"
                    className="border border-[#9f9f9f] rounded  px-4 py-2 flex justify-between items-center w-full mr-2 text-sm text-[#a8a8a8]"
                  >
                    <option value="volvo">All Industries</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                  <select
                    name="cars"
                    id="cars"
                    className="border border-[#9f9f9f] rounded  px-4 py-2 flex justify-between items-center w-full mr-2 text-sm text-[#a8a8a8]"
                  >
                    <option value="volvo">All Countries</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Enter Profile ID"
                    className="border border-[#9f9f9f] rounded  px-4 py-2 flex justify-between items-center w-full mr-2 text-sm text-[#fff]"
                  />
                  <div
                    className="border px-4 py-2 mt-2 lg:mt-0 flex justify-center items-center lg:w-30 
                  
                   bg-[#17a2b8]  border-[#17a2b8] rounded text-sm text-[#fff]"
                  >
                    <AiOutlineSearch className="mr-2" />
                    <button>Search</button>
                  </div>
                </form>
              </div>

            
              {/* purple banner My Website Network */}

              <div className="flex justify-left items-center bg-[#7867a7] text-white font-normal text-lg py-2 pl-5 my-5 lg:mx-0 rounded">
                <AiTwotoneBulb className="mr-3 text-3xl" /> My Website Network
              </div>
              {/*  */}
              {users.map((data, index) => {
                console.log(data);
                // eslint-disable-next-line react/jsx-pascal-case
                return <User_card key={index} name={data.name} id={data._id} my_id={my_id} />;
              })}
              {/* <User_card /> */}
              {/* each user */}
              <div className=" bg-[#ffffff]  lg:m-0 lg:mb-6 lg:mx-0 rounded-tr-md rounded-tl-md mb-5 border border-[#bebebe]">
                <div className="bg-[#ededed] rounded-tr rounded-tl px-2 py-3 flex justify-between items-center  ">
                  <div className="text-lg font-bold">
                    Duis aute irure dolor in reprehenderit <span>X</span>
                  </div>
                  <button className="bg-[#ff1717] text-white p-2 rounded ">
                    <AiOutlineClose />
                  </button>
                </div>
                <div className="lg:flex lg:justify-between px-3   mt-8">
                  <div className="  ">
                    <p className="text-center text-sm text-[#969696]">
                      PROFILE ID: 89149
                    </p>
                    <div className="flex m-2 p-2 border w-40  lg:w-36 mx-auto">
                      <img src="https://i.imgur.com/1Ge7acx.png" alt="" />
                    </div>
                    <div className="flex justify-between items-center ">
                      <div className="relative">
                        <img src={ClickFriends} alt="" className="w-5	" />
                        <img
                          src={friends}
                          alt=""
                          className="	absolute top-0 left-0 hover:opacity-0 w-5"
                        />
                        <img src={check} alt="" className="w-4 mx-auto mt-2" />
                      </div>
                      <div className="relative">
                        <img src={ClickVideo} alt="" className="w-5	" />
                        <img
                          src={video}
                          alt=""
                          className="	absolute top-0 left-0 hover:opacity-0 w-5"
                        />
                        <img src={check} alt="" className="w-4 mx-auto mt-2" />
                      </div>
                      <div className="relative">
                        <img src={ClickPicture} alt="" className="w-5	" />
                        <img
                          src={picture}
                          alt=""
                          className="	absolute top-0 left-0 hover:opacity-0 w-5"
                        />
                        <img src={check} alt="" className="w-4 mx-auto mt-2" />
                      </div>
                      <div className="relative">
                        <img src={ClickHeart} alt="" className="w-5	" />
                        <img
                          src={heart}
                          alt=""
                          className="	absolute top-0 left-0 hover:opacity-0 w-5"
                        />
                        <img src={check} alt="" className="w-4 mx-auto mt-2" />
                      </div>
                      <div className="relative">
                        <img src={ClickNote} alt="" className="w-5	" />
                        <img
                          src={note}
                          alt=""
                          className="	absolute top-0 left-0 hover:opacity-0 w-5"
                        />
                        <img
                          src={checkClick}
                          alt=""
                          className="w-4 mx-auto mt-2"
                        />
                      </div>
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
                            <button className="bg-[#5cb85c] px-3 py-2 rounded mt-3 mr-2 text-white text-sm">
                              INVESTOR
                            </button>
                            <button className="bg-[#17a2b8] px-3 py-2 rounded mt-3 text-white text-sm">
                              AVAILABLE CAPITAL $23M
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quam perferendis facere ea ipsa possimus officiis
                        eius voluptates provident libero reprehenderit
                        dignissimos aspernatur...
                        <span className="font-semibold text-[#17a2b8]">
                          view more{" "}
                        </span>
                      </p>
                      <div className="h-5 border-b-2 border-[#b4b4b4] text-center text-2xl "></div>

                      <div className="lg:flex lg:justify-between">
                        <div className="flex justify-start mt-3">
                          <p className="mr-8">
                            <span className="font-bold">INVESTOR TYPE:</span>{" "}
                            Venture open
                          </p>
                          <p>
                            <span className="font-bold">INDUSTRY:</span>{" "}
                            Computers open
                          </p>
                        </div>
                        <div className="flex justify-center items-center bg-[#ff0000] text-white text-center my-3  py-3 font-semibold lg:bg-[#fff0] lg:text-[#ff0000] lg:text-xl lg:semi-bold lg:my-0 lg:py-0 lg:text-left">
                          <div className="pr-1 ">
                            <AiOutlineCloseCircle />
                          </div>
                          <div>ID NOT VERIFIED</div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MembersList;
const data = `
<div className=" bg-[#ffffff]  lg:m-0 lg:mb-6 lg:mx-0 rounded-tr-md rounded-tl-md mb-5 border border-[#bebebe]">
                <div className="bg-[#ededed] rounded-tr rounded-tl px-2 py-3 flex justify-between items-center  ">
                  <div className="text-lg font-bold">
                    Duis aute irure dolor in reprehenderit <span>X</span>
                  </div>
                  <button className="bg-[#ff1717] text-white p-2 rounded ">
                    <AiOutlineClose />
                  </button>
                </div>
                <div className="lg:flex lg:justify-between px-3   mt-8">
                  <div className="">
                    <p className="text-center text-sm text-[#969696]">
                      PROFILE ID: 89149
                    </p>
                    <div className="w-40 mx-auto">
                      <div className="flex m-2 p-2 border w-40  lg:w-36 mx-auto">
                        <img src="https://i.imgur.com/1Ge7acx.png" alt="" />
                      </div>

                      <div className="flex justify-center lg:justify-between items-center ">
                        {/*TODO: */}

                        {/* Hover and change image */}
                        <div className="relative mx-auto w-5 ">
                          <div>
                            <img
                              src={showFriend ? ClickFriends : friends}
                              className="myDIV w-5"
                              alt=""
                              onClick={() =>
                                setShowFriend((prevState) => !prevState)
                              }
                            />
                            <div className="hide w-40 rounded px-3 py-1 absolute bottom-7 left-[-68px]">
                              <p className=" relative">
                                {friendRequestSent}
                                {/* <p className="absolute bottom-0 left-0 bg-[#ff0000] h-7 w-7"></p> */}
                                <p className="absolute h-0 w-0 left-14 border-x-8 border-x-transparent border-t-[10px] border-t-[#4f4f4f]"></p>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="relative mx-auto w-5 ">
                          <div onClick={viewVideos}>
                            <img
                              src={showVideo ? ClickVideo : video}
                              className="myDIV w-5"
                              alt=""
                              onClick={() =>
                                setShowVideo((prevState) => !prevState)
                              }
                            />
                            <div className="hide w-40 text-center rounded px-1 py-1 absolute bottom-7 left-[-67px]">
                              <p className=" relative">
                                No Videos Uploaded
                                {/* <p className="absolute bottom-0 left-0 bg-[#ff0000] h-7 w-7"></p> */}
                                <p className="absolute h-0 w-0 left-16 border-x-8 border-x-transparent border-t-[10px] border-t-[#4f4f4f]"></p>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="relative mx-auto w-5 ">
                          <div  onClick={viewPictures}>
                            <img
                              src={showPicture ? ClickPicture : picture}
                              className="myDIV w-5"
                              alt=""
                              onClick={() =>
                                setShowPicture((prevState) => !prevState)
                              }
                            />
                            <div className="hide w-36 text-center rounded px-1 py-1 absolute bottom-7 left-[-66px]">
                              <p className=" relative text-sm">
                                No Images Uploaded
                                {/* <p className="absolute bottom-0 left-0 bg-[#ff0000] h-7 w-7"></p> */}
                                <p className="absolute h-0 w-0 left-[64px] border-x-8 border-x-transparent border-t-[10px] border-t-[#4f4f4f]"></p>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="relative mx-auto w-5 ">
                          <div>
                            <img
                              src={showHeart ? ClickHeart : heart}
                              className="myDIV w-5"
                              alt=""
                              onClick={() =>
                                setShowHeart((prevState) => !prevState)
                              }
                            />
                            <div className="hide w-[128px] rounded px-3 py-1 absolute bottom-7 left-[-62px]">
                              <p className=" relative text-sm">
                                Add to Favorites
                                {/* <p className="absolute bottom-0 left-0 bg-[#ff0000] h-7 w-7"></p> */}
                                <p className="absolute h-0 w-0 left-[px] border-x-8 border-x-transparent border-t-[10px] border-t-[#4f4f4f]"></p>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="relative mx-auto w-5  ">
                          <div onClick={viewNotes}>
                            <img
                              src={showNote ? ClickNote : note}
                              className="myDIV w-5"
                              alt=""
                              onClick={() =>
                                setShowNote((prevState) => !prevState)
                              }
                            />
                            <div className="hide w-40 rounded px-3 py-1 absolute bottom-7 left-[-68px]">
                              <p className=" relative">
                                Add Note
                                {/* <p className="absolute bottom-0 left-0 bg-[#ff0000] h-7 w-7"></p> */}
                                <p className="absolute h-0 w-0 left-14 border-x-8 border-x-transparent border-t-[10px] border-t-[#000]"></p>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center lg:justify-between items-center ">
                        <img src={check} alt="" className="w-4 mx-auto mt-2" />
                        <img src={check} alt="" className="w-4 mx-auto mt-2" />
                        <img src={check} alt="" className="w-4 mx-auto mt-2" />
                        <img src={check} alt="" className="w-4 mx-auto mt-2" />
                        <img src={check} alt="" className="w-4 mx-auto mt-2" />
                      </div>
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
                            <button className="bg-[#5cb85c] px-3 py-2 rounded mt-3 mr-2 text-white text-sm">
                              INVESTOR
                            </button>
                            <button className="bg-[#17a2b8] px-3 py-2 rounded mt-3 text-white text-sm">
                              AVAILABLE CAPITAL $23M
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quam perferendis facere ea ipsa possimus officiis
                        eius voluptates provident libero reprehenderit
                        dignissimos aspernatur...
                        <span className="font-semibold text-[#17a2b8]">
                          view more{" "}
                        </span>
                      </p>
                      <div className="h-5 border-b-2 border-[#b4b4b4] text-center text-2xl "></div>

                      <div className="lg:flex lg:justify-between">
                        <div className="flex justify-start mt-3">
                          <p className="mr-8">
                            <span className="font-bold">INVESTOR TYPE:</span>{" "}
                            Venture open
                          </p>
                          <p>
                            <span className="font-bold">INDUSTRY:</span>{" "}
                            Computers open
                          </p>
                        </div>
                        <div className="flex justify-center items-center bg-[#ff0000] text-white text-center my-3  py-3 font-semibold lg:bg-[#fff0] lg:text-[#ff0000] lg:text-xl lg:semi-bold lg:my-0 lg:py-0 lg:text-left">
                          <div className="pr-1 ">
                            <AiOutlineCloseCircle />
                          </div>
                          <div>ID NOT VERIFIED</div>
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

                {/* Notes section */}

               
              </div>
              `