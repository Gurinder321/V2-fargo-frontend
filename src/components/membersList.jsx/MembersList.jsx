import React, { useState, useEffect } from "react";
import axios from "axios";
import "./membership.css";

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
  AiOutlineArrowRight,
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

// import rightArrow from "./right-chevron.png";

import UserCard from "./user_card";

const MembersList = () => {
  //
  const [users, setUsers] = useState([]);
  const [showFriend, setShowFriend] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showPicture, setShowPicture] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [showNote, setShowNote] = useState(false);

  const [friendRequestSent, setFriendRequestSent] = useState(
    "Click to Add Friend"
  );
  // state
  // page

  useEffect(() => {
    const get_users = async () => {
      let token = localStorage.getItem("auth");
      if (!token) return console.log(`User not logged in`);
      await axios
        .get(`http://localhost:3600/account/users`, {
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
        })
        .catch(() => {
          console.log(`Error fetching all the users`);
        });
    };
    get_users();
  }, []);
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
                return <UserCard key={index} name={data.name} id={data._id}
                index={index}
                />;
              })}
              {/* <User_card /> */}
              {/* each user */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembersList;