import React , { useRef } from 'react';

import {
  AiOutlineSetting,
  AiFillCaretDown,
  AiOutlineSearch,
  AiTwotoneBulb,
  AiOutlineClose,
  AiOutlineInfoCircle,
  AiOutlineCheckCircle,
  AiTwotonePushpin,
  AiTwotoneTag,
  AiOutlineCloseCircle,
} from 'react-icons/ai';

import { HiOutlineLightBulb } from 'react-icons/hi';
import { BiWallet } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../../components/Layout/footer';
import axios from 'axios';
const RegisterStep2 = () => {


  const profile_picture = useRef();
  const bio = useRef();
  const description = useRef();

  const navigate = useNavigate();
  
  
  const handleClick = async (event) => {
    event.preventDefault();
    let token = localStorage.getItem('auth');
    if(!token) return console.log('No token found');


    const user = {
      // profile_picture: profile_picture.current.value,
      bio: bio.current.value,
      description: description.current.value,

    }
    // return console.log(user)
    try {
    // localhost:3000/auth/signup
    await axios.post('/account/update', user , {
      headers: {
        'Authorization':`Bearer ${token}`,
      }
    })
    .then(response =>{
      console.log(response.data)
      if(response.data.result === "0"){
        return console.log(`An error`)
      }
      navigate('/register3')
      
    })
    .catch(error =>{
      console.log('Error' , error)
    })
    // navigate('/register1')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div>
      <div className=" h-[180px]  bg-[url('https://i.imgur.com/6ZyzH0D.png')] drop-shadow-lg text-center ">
        <h1 className="text-white text-4xl font-semibold pt-20">Create Your Profile</h1>
      </div>
      <div className="border bg-[#EBEFF4]">
  
          {/* Basic Info, this information is already filled out */}
          <div className=" max-w-[840px] mx-auto">
            <div className=" text-3xl py-10  text-center">
              <h6 className="text-sm mb-3">
                <span>Profile • </span>
                <span>Preference • </span>
                <span className="text-[#4335dc] font-medium">Network • </span>
                <span>Done</span>
              </h6>
              <h3>Financial Network Post</h3>
              <p className="text-base mt-5 px-10">
                Apply privately to thousands of tech companies & startups with one profile.
              </p>
            </div>
            <form  onSubmit={handleClick}  action="" className="border m-4 rounded-lg bg-white">
              <div className="m-5 ">
                <div className="text-center md:flex md:justify-between">
                  <div className="">
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
                      alt=""
                      className="w-40 border p-2 mx-auto"
                    />
                  </div>
                  <div className="border px-5 py-4 md:py-0 text-center rounded bg-[#f3f3f3] mt-3 md:mt-1 md:flex md:items-center md:text-lg relative">
                    <p>
                      Choose an Image that represent you, your product or company brand.
                      <br />
                      Quality images attract 80% more visitors!
                    </p>
                    <HiOutlineLightBulb className="absolute text-3xl bottom-2 right-2" />
                  </div>
                </div>
                <div className="mb-6 text-center md:text-left md:ml-2">
                  <button className="bg-[#28a745] px-3 py-2 rounded mt-3 text-white">
                    UPLOAD AVATAR
                  </button>
                </div>
                <div className="flex flex-col w-full mr-10 mb-4">
                  <label htmlFor="" className="pb-2 flex justify-between">
                    <p>
                      Ad Headline <span>*</span>
                    </p>
                    <p className="text-sm">
                      Total Word Count: <strong>0</strong> words - Words left: <strong>15</strong>
                    </p>
                  </label>
                  <input
                    type="text"
                    ref={bio}
                    name="username"
                 
                    placeholder="Min. 5 words - Max. 15 words"
                    className="border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 mb-1"
                  />
                </div>

                <div>
                  <label htmlFor="" className="pb-2 flex justify-between">
                    <p>
                      Profile Ad <span>*</span>
                    </p>
                    <p className="text-sm">
                      Total Word Count: <strong>0</strong> words - Words left: <strong>15</strong>
                    </p>
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    ref={description}
                    rows="4"
                    placeholder="Min. 25 words - Max. 350 words"
                    className="w-full border p-2 mb-1"
                  ></textarea>
                </div>

                {/* Keyword Tags */}
                <div>
                  <label htmlFor="" className="pb-2 flex justify-between">
                    <p>
                      Keyword tags <span>*</span>
                    </p>
                    <p className="text-sm">
                      Total Word Count: <strong>0</strong> words - Words left: <strong>15</strong>
                    </p>
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="4"
                    placeholder="Seperate each keyword with a 'comma' (,)."
                    className="w-full border p-2"
                  ></textarea>
                </div>
              </div>
              <div className="text-right m-5">
                <button type='submit' className="bg-[#4335dc] px-3 py-2 rounded mt-3 text-white text-sm">
                  Save and Continue
                </button>
                <Link to="/register3">register3</Link>
              </div>
            </form>
          </div>
     
      </div>
      <Footer />
    </div>
  );
};

export default RegisterStep2;
