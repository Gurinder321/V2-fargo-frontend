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

const SpecialIcons = ({text = "tooltip"}) => {
  return (
    <>
    <div className='w-20 flex justify-between items-center w-40 mx-auto  lg:w-36'>
        <div>
    <i className='sidebar-icon group'> <div className="relative">
                <img src={ClickFriends} alt="" className="w-5"/>

                <img
                  src={friends}
                  alt=""
                  className="	absolute top-0 left-0 hover:opacity-0 w-5"
                />
               
              </div><span className='sidebar-tooltip group-hover:scale-100'>{text="Add Friend"}</span>
              
              </i>
              
              <img src={check} alt="" className="w-4 mx-auto mt-2" />
        </div>

        <div>
    <i className='sidebar-icon group'> <div className="relative">
                <img src={ClickVideo} alt="" className="w-5"/>
                <img
                  src={video}
                  alt=""
                  className="	absolute top-0 left-0 hover:opacity-0 w-5"
                />
              </div><span className='sidebar-tooltip group-hover:scale-100'>{text="No Videos"}</span>
              </i>
              <img src={check} alt="" className="w-4 mx-auto mt-2" />
        </div>
        <div>
    <i className='sidebar-icon group'> <div className="relative">
                <img src={ClickPicture} alt="" className="w-5"/>

                <img
                  src={picture}
                  alt=""
                  className="absolute top-0 left-0 hover:opacity-0 w-5"
                />
               
              </div><span className='sidebar-tooltip group-hover:scale-100'>{text="No Pictures"}</span>
              
              </i>
              
              <img src={check} alt="" className="w-4 mx-auto mt-2" />
        </div>
        <div>
    <i className='sidebar-icon group'> <div className="relative">
                <img src={ClickHeart} alt="" className="w-5"/>

                <img
                  src={heart}
                  alt=""
                  className="	absolute top-0 left-0 hover:opacity-0 w-5"
                />
               
              </div><span className='sidebar-tooltip group-hover:scale-100'>{text="Add to Favorites"}</span>
              
              </i>
              
              <img src={check} alt="" className="w-4 mx-auto mt-2" />
        </div>
        <div>
    <i className='sidebar-icon group'> <div className="relative">
                <img src={ClickNote} alt="" className="w-5"/>

                <img
                  src={note}
                  alt=""
                  className="	absolute top-0 left-0 hover:opacity-0 w-5"
                />
               
              </div><span className='sidebar-tooltip group-hover:scale-100'>{text="Add Notes"}</span>
              
              </i>
              
              <img src={check} alt="" className="w-4 mx-auto mt-2" />
        </div>
     
         </div>
    </>
  )
}

export default SpecialIcons