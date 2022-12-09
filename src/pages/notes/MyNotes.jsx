import React, { useState , useContext } from "react";

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
  AiOutlineHeart,
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
import FriendsContext from "../../context/friends";
import NoteCard from "./Note";
const MyNotes = () => {
  const { notes } = useContext(FriendsContext);
  console.log(notes);
  return (
    <>
      <div>
        <div className=" lg:m-10 lg:ml-0 md:w-full">
          {/* FIXME:
           menu navigation  */}
          <div className="mt-8 lg:flex lg:justify-between">
            <div className=" bg-[#ffffff00]   sm:ml-0 sm: mt-4 lg:ml-4 lg:mt-0">
              {/* search box */}

              {/* purple banner My Website Network */}

              <div className="flex justify-left items-center bg-[#7867a7] text-white font-normal text-lg py-2 pl-5 mb-5 lg:mx-0 rounded">
                <AiTwotoneBulb className="mr-3 text-3xl" /> My Website Network
              </div>
              {/* each user */}
              {(notes && notes.length === 0) && <h1>You have notes</h1>}
              {/* map throught notes */}
              { notes && notes.map((note , index) =>{
                return <NoteCard
                id={note.other_user}
                noteText={note.note}
                key={index}
                />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyNotes;
