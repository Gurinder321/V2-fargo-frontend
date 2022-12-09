import axios from 'axios';
import { useEffect, useState } from 'react';

import avatar from './user.png'

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);

  const PF = 'http://localhost:3000/assets/';

  // useEffect(() => {
  //   const friendId = conversation.members.find((m) => m !== currentUser._id);

  //   const getUser = async () => {
  //     try {
  //       const res = await axios('/users/' + friendId);
  //       setUser(res.data);
  //       // username showing up 21 times
  //       // console.log(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUser();
  // }, [currentUser, conversation]);

  return (
    <div className="flex items-center p-2 cursor-pointer hover:bg-[#e6e6e6] mt-5">
      <img
        className="w-10 h-10 border-2 border-black rounded-full object-cover"
        src={avatar}
        alt=""
      />
      {/* <span className="conversationName">{user?.username}</span> */}
      <span className="conversationName">John Smith</span>
    </div>
  );
}
