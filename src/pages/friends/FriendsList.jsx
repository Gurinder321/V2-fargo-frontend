import React, { useState, useEffect , useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// context
import FriendsContext from "../../context/friends";

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
import Friend from "./Friend";

const FriendsList = () => {
  const [overFriend, setOverFriend] = useState(false);
  const [overVideo, setOverVideo] = useState(false);
  const [overHeart, setOverHeart] = useState(false);
  const [overNote, setOverNote] = useState(false);
  const [overPicture, setOverPicture] = useState(false);

  const { friends , setFriends } = useContext(FriendsContext);
  useEffect(() => {
    const getUsers = async () => {
      let token = localStorage.getItem("auth");
      if (!token) return console.log(`You are not authorized for this project`);
      await axios
        .get(`/account/friends`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          setFriends(response.data.friends);
          console.log(friends , "friends");
        })
        .catch((error) => {
          console.log(error, "from fetching all users");
        });
    };
    getUsers();
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
              <div className="">
                <div className="lg:flex lg:justify-between lg:px-0">
                  <div className="border border-[#9f9f9f] rounded  px-4 py-2 flex justify-between items-center lg:w-full lg:mr-2">
                    <button className="text-sm text-[#aaa]">
                      All Networks
                    </button>
                    <AiFillCaretDown />
                  </div>
                  <div className="border border-[#9f9f9f] rounded px-4 py-2 flex justify-between items-center  lg:w-full lg:mr-2  mt-2 lg:mt-0">
                    <button className="text-sm text-[#aaa]">
                      All Industries
                    </button>
                    <AiFillCaretDown />
                  </div>

                  <div className="border border-[#9f9f9f] rounded px-4 py-2 flex justify-between items-center  lg:w-full lg:mr-2  mt-2 lg:mt-0">
                    <button className="text-sm text-[#aaa]">
                      All Countries
                    </button>
                    <AiFillCaretDown />
                  </div>
                  <div className="border border-[#9f9f9f] rounded lg:px-1 px-4 py-2  lg:mr-2 lg:w-30 mt-2 lg:mt-0">
                    <input
                      className="text-sm text-[#aaa] w-28"
                      type="text"
                      placeholder="Enter Profile ID"
                    />
                  </div>
                  <div
                    className="border px-4 py-2 mt-2 lg:mt-0 flex justify-center items-center lg:w-30 
                  
                   bg-[#17a2b8]  border-[#17a2b8] rounded text-sm text-[#fff] 
                  
                  "
                  >
                    <AiOutlineSearch className="mr-2" />
                    <button>Search</button>
                  </div>
                </div>
              </div>
              {/* purple banner My Website Network */}

              <div className="flex justify-left items-center bg-[#7867a7] text-white font-normal text-lg py-2 pl-5 my-5 lg:mx-0 rounded">
                <AiTwotoneBulb className="mr-3 text-3xl" /> My Friends
              </div>

              {
                (!friends || (friends && friends.length == 0) ) && <h1>No friends currently.Head to the network section to make friends <Link to={"/network"}>Go now</Link>  </h1>
              }
              {/* each user */}
              {friends &&
                friends.map((data, index) => {
                  console.log(data);
                  // 
                  return <Friend
                  key={index}
                  />;
                })}
              {/* each user */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsList;
