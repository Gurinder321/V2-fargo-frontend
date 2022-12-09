import React, { useEffect, useState , useContext } from "react";
import axios from "axios";
// context
import FriendsContext from "../../context/friends";

import {
  AiOutlineSetting,
  AiOutlineClose,
  AiOutlineCheckCircle,
  AiTwotonePushpin,
  AiTwotoneTag,
} from "react-icons/ai";
import { HiOutlineUserAdd } from "react-icons/hi";


const RequestCards = ({ id }) => {
  // 
  const { 
    setFriends,
    setRequests,
    requests,
    friends,
    setFavourites,
    favourites,
  } = useContext(FriendsContext);

  

  const is_in_favourites = favourites.find(user => user.id === id);
  const [user, setUser] = useState();
  useEffect(() => { 
    const getUserInfo = async () => {
      let token = localStorage.getItem("auth");
      if (!token) {
        return console.log("No token found");
      }
      await axios
        .get(`/account/details/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setUser(response.data);
          if (response.data.result === "0") {
            return console.log("Error fetching data");
          }

          console.log(response.data.user ? "user found" : "user not found");

          // FIXME: Not working
          // const nameUser = response.data.user
          setUser(response.data.user);

          console.log(response.data.user.name, "response data");
          console.log(id, "id", user.name, "user");
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getUserInfo();
  }, []);
  const acceptFriend = async () => {
    let token = localStorage?.getItem("auth");
    console.log(token);

    await axios
      .post(
        "/account/request/accept",
        {
          id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if(response.data.result != 1){
          console.log("Faced an error while accepting the request");
          return;
        }
        // TODO
        // get instance of that person
        const now_friend = requests.find((friend) => friend.id == id);
        // Remove person from requests
        const new_requests = requests.filter( instance =>{
          return instance.id != id
        });
        // set states
        setRequests([...new_requests]);
        setFriends([...friends , now_friend]);
        console.log("After accepting the request");
        console.log(requests , "these are the requests");
        console.log(friends , "these are the friends");
      })
      .catch((err) => {
        console.log(err.response.status);
      });
  };


  // check if person is in the friends list
  const is_friend_already = friends.find((user) => user.id === id);

  if(is_friend_already) return null;

  return (
    <>
      {/* each user */}
      <div className=" bg-[#ffffff] m-1 lg:mx-4 rounded-tr-md rounded-tl-md mb-5 border border-[#bebebe] ">
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
            <div className="flex justify-center items-center">
              <div className="flex flex-col m-0.5">
                <HiOutlineUserAdd className="text-xl hover:text-xl hover:text-[#ffad41]" />

                <AiOutlineCheckCircle />
              </div>
              <div className="flex flex-col m-0.5">
                <AiOutlineSetting className="mb-0.5" />
                <AiOutlineCheckCircle />
              </div>
              <div className="flex flex-col m-0.5">
                <AiOutlineSetting className="mb-0.5" />
                <AiOutlineCheckCircle />
              </div>
              <div className="flex flex-col m-0.5">
                <AiOutlineSetting className="mb-0.5" />
                <AiOutlineCheckCircle />
              </div>
              <div className="flex flex-col m-0.5">
                <AiOutlineSetting className="mb-0.5" />
                <AiOutlineCheckCircle />
              </div>
            </div>
          </div>
          <div className="lg:ml-4">
            <div className="lg:flex lg:justify-between">
              <div>
                <div className="flex justify-center items-center text-center text-sm mt-2 lg:mt-0 text-[#969696] lg:flex lg:justify-start ">
                  <div className="pr-2 ">{user?.name}</div>
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
              <div className="flex justify-center lg:self-end">
                <div className=" bottom-1 left-16 bg-[#7867a7] px-3 py-2 rounded mt-3 mr-2 lg:m-0 text-white text-sm lg:flex lg:justify-center lg:items-center lg:text-center lg:h-10 lg:mr-2">
                  <p>FRIEND REQUEST</p>
                </div>

                <button
                  className="bg-[#28a745] px-3 py-2 rounded mt-3 mr-2 lg:m-0 text-white text-sm lg:h-10 lg:mr-2"
                  // event listener
                  //event -> hanlder(event:events)
                  // onSubmit={hander}
                  //
                  onClick={() => acceptFriend(id)}
                >
                  Accept
                </button>

                <button className="bg-[#343a40] px-3 py-2 rounded mt-3 lg:mt-0 text-white text-sm lg:h-10 ">
                  Decline
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
    </>
  );
};

export default RequestCards;
