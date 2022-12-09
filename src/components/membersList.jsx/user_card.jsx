import React, { useState , useContext , useEffect } from "react";

import "./membership.css";

import friends from "../../pages/friends/add-user.png";
import ClickFriends from "../../pages/friends/add-user-click.png";
import heart from "../../pages/friends/heart.png";
import ClickHeart from "../../pages/friends/heart-click.png";
import note from "../../pages/friends/note.png";
import ClickNote from "../../pages/friends/note-click.png";
import picture from "../../pages/friends/picture.png";
import ClickPicture from "../../pages/friends/picture-click.png";
import video from "../../pages/friends/video.png";
import ClickVideo from "../../pages/friends/video-click.png";
import check from "../../pages/friends/check.png";
import checkClick from "../../pages/friends/check-click.png";
import FriendsContext from "../../context/friends";
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

// 
import axios from "axios";

export default function UserCard({ name, id , my_id , index }) {

  // context
  const { setFavourites , favourites } = useContext(FriendsContext);
  // check if user is in favourites list
  const is_in_favourites = favourites.find(user => user.id === id);
  const [showNote, setShowNote] = useState(false);

  const [overVideo, setOverVideo] = useState(false);
  const [overHeart, setOverHeart] = useState(false);
  const [overNote, setOverNote] = useState(false);
  const [overPicture, setOverPicture] = useState(false);
  useEffect(() =>{
    const note = document.getElementById(`note${index}`);
    note.style.display = "none";
  } ,[])
  // if the id passed is similar to my id (basically the user listed is me then return null)
  if((my_id && id) && (my_id == id)) return null;
  const sendFriendRequest = async (id) => {
    try {
      let token = localStorage.getItem("auth");
      if (!token) {
        return console.log("No token was found");
      }
      const id1 = { id: id };
      console.log(id1);

      await axios
        .post(
          "/account/follow",
          { id: id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const RemoveFromFav = async (id) => {
    let token = localStorage.getItem("auth");
    if (!token) {
      return console.log("No token found");
    }
    await axios
      .patch(`/account/favourites`, {
        id
      } , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.result === "0") {
          return console.log("Error fetching data");
        }
        setOverHeart(false);
        // remove user from favourites context
        const new_favourites = favourites.filter(user => user.id != id);
        setFavourites([...new_favourites]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async function addToFav(id){
    let token = localStorage.getItem('auth');
    if(!token) return alert("Could not make the request");

    if(is_in_favourites){
      // remove from favourites
      return RemoveFromFav(id);
    }
    await axios.post(`/account/favourites` , {
      id,
    } , {
      headers:{
        'Authorization':`Bearer ${token}`,
      },
    })
    .then(response =>{
      console.log(response);
      if(response.data.result != 1){
        return console.log("Could not add user to favourites");
      }
      // add to the favourites context
      setFavourites([...favourites , response.data.favourite]);
    })
    .catch(error =>{
      console.log("error adding user to favourites");
      console.log(error)
    })
  }

  function viewNotes() {
    var x = document.getElementById(`note${index}`);
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
  async function noteSubmit (event){
    event.preventDefault();
    let token = localStorage.getItem("auth");
    if(!token) return console.log("Could not upload note");
    await axios.post(`/account/notes` , {
      note:event.target.note.value,
      id,
    } , {
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    .then(response =>{
      console.log(response , "from note save");
    })
    .catch(error =>{
      console.log(error , " saving note");
    })
  }
  
  return (
    <>
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
              <div
                onClick={() => {
                  sendFriendRequest(id);
                }}
              >
                <img src={friends} alt="" className="w-5" />
                <img src={check} alt="" className="w-4 mx-auto mt-2" />
              </div>
              <div onClick={() => setOverVideo(true)}>
                <img
                  src={overVideo ? ClickVideo : video}
                  alt=""
                  className="w-5"
                />
                <img src={check} alt="" className="w-4 mx-auto mt-2" />
              </div>
              <div onClick={() => setOverPicture(true)}>
                <img
                  src={overPicture ? ClickPicture : picture}
                  alt=""
                  className="w-5"
                />
                <img src={check} alt="" className="w-4 mx-auto mt-2" />
              </div>
              <div onClick={() => {
                setOverHeart(true)
                // add to favourites
                addToFav(id)
              }}>
                {/* add to favourites image */}
                <img
                  src={ is_in_favourites ? ClickHeart : overHeart ? ClickHeart : heart}
                  alt=""
                  className="w-5"
                />
                <img src={check} alt="" className="w-4 mx-auto mt-2" />
              </div>
              {/* <div onClick={() => setOverNote(true)}>
                <img src={overNote ? ClickNote : note} alt="" className="w-5" />
                <img src={checkClick} alt="" className="w-4 mx-auto mt-2" />
              </div> */}
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
          </div>
          <div className="lg:ml-4">
            <div className="lg:flex lg:justify-between">
              <div>
                <div className="flex justify-center items-center text-center text-sm mt-2 lg:mt-0 text-[#969696] lg:flex lg:justify-start ">
                  <div className="pr-2 ">{name}</div>
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
        {/* notes section */}
        <form className="m-3" 
        // generate unique ids for each note
        id={`note${index}`}
        onSubmit={noteSubmit}
        >
                  <div className="border-solid border-2 mb-3">
                    <div className="bg-[#D8E1E5] m-4 p-4 rounded-xl">
                      <p>
                        <span className="uppercase">
                          ADD PRIVATE NOTES, IMAGES & FILES "(.PNG, .JPG, .JPEG,
                          .GIF, .BMP, .PDF, .TXT)"
                        </span>
                      </p>
                      <p>
                        Only you can see this! Save private notes and details
                        about your conversation and interaction with this
                        profile member! You can download and share your uploads
                        with other members of your team.
                      </p>
                    </div>
                  </div>
                  <textarea
                    className="border-dashed border-2 w-full p-4"
                    name="note"
                    cols="30"
                    rows="10"
                    placeholder="Add your Private Notes here or Drag and Drop your files or images to upload!"
                  ></textarea>
                  <div className="flex justify-between ">
                    <button className="bg-[#337ab7] px-3 py-2 rounded mt-3 text-white text-xs">
                      Upload Files
                    </button>
                    <div>
                      <button className="bg-[#dc3545] px-3 py-2 rounded mt-3 text-white text-xs mr-3">
                        Close
                      </button>
                      <button className="bg-[#28a745] px-3 py-2 rounded mt-3 text-white text-xs">
                        Save Note
                      </button>
                    </div>
                  </div>
                </form>
        {/* end of notes section */}
         
      </div>
    </>
  );
}
