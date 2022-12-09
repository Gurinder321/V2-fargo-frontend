import React, { useEffect , useContext } from 'react';
import axios from 'axios';

// context
import FriendsContext from '../../context/friends';

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
} from 'react-icons/ai';

import { HiOutlineUserAdd } from 'react-icons/hi';

import RequestCards from './RequestCards';



const UserRequests = () => {

  const { requests , setRequests } = useContext(FriendsContext);

  useEffect(() =>{
    const get_users = async () =>{
      let token = localStorage.getItem('auth');
      if(!token) return console.log(`User not logged in`);
      await axios.get(`/account/requests` , {
        headers:{
          'Authorization':`Bearer ${token}`,
        }
      })
      .then( response =>{
        console.log(response.data); 
        if(response.data.result === "0"){
          return console.log("Unable to fetch all users");
        }
        setRequests(response.data.requests);
      })
      .catch(() =>{
        console.log(`Error fetching all the users`)
      })
    }
    get_users();
  } ,[]);
// console.log(users)
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

              <div className="flex justify-left items-center bg-[#7867a7] text-white font-normal text-lg py-2 pl-5 mb-5 lg:mx-4 rounded">
                <AiTwotoneBulb className="mr-3 text-3xl" /> Friend Requests
              </div>

              {/* each user */}

            {/* If no users */}

            {
(requests && requests.length == 0) 
  && <h1> No Requests found </h1>
  
}

            {/* If users exist */}
              {requests && requests.map(( data , index) => {
return <RequestCards key={index} id={data.id} />

              })}
            
            </div>
          </div>
        </div>
      </div>


           

    </>
  );
};

export default UserRequests;
