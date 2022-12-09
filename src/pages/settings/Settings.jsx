

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

import { HiOutlineUserAdd } from 'react-icons/hi';
import { MdOutlineVerified } from 'react-icons/md';
import { BiWallet } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div className='w-full'>
         <div className=" lg:m-10 lg:mr-0 lg:ml-4  ">
          {/* FIXME:
           menu navigation  */}
          <div className="flex justify-left items-center bg-[#7867a7] text-white font-normal  text-lg py-2 pl-5 mb-5 lg:mx-0 rounded">
                <AiTwotoneBulb className="mr-3 text-3xl" /> Account Settings
              </div>

              <div className=" flex justify-between mb-3">
                <div className="text-3xl ">Profile</div>
                <div className="flex justify-center">
                  <Link to="/verify">
                    <button className="flex justify-center items-center border rounded-l py-1 px-2 hover:bg-[#565656] hover:text-white">
                      <MdOutlineVerified className="mr-1" /> <p className="text-sm">Verification</p>
                    </button>
                  </Link>
                  <Link to="/idverify">
                    <button className="flex justify-center items-center border rounded-r py-1 px-2 hover:bg-[#565656] hover:text-white">
                      <BiWallet className="mr-1" /> <p className="text-sm">Bill Settings</p>{' '}
                    </button>
                  </Link>
                </div>
              </div>

              <div className="border p-1 md:p-4 ">
                <div className="flex justify-start bg-[#CDE4FE] text-3xl text-[#014084] py-3 px-5 m-1 rounded">
                  <AiOutlineInfoCircle className="mr-1" />
                  <h3>Basic Info</h3>
                </div>
                <form action="">
                  <div className="md:m-5 md:flex">
                    <div className="flex flex-col w-full mr-10">
                      <label htmlFor="" className="pb-2">
                        Full Name<span>*</span>
                      </label>
                      <input
                        type="text"
                        name="username"
                        value=""
                        placeholder="Johnny Sims"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                    <div className="flex flex-col  w-full">
                      <label htmlFor="" className="pb-2">
                        Email<span>*</span>
                      </label>
                      <input
                        type="Email"
                        placeholder="johnny@doe.com"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                  </div>

                  {/* Second row */}
                  <div className="md:m-5 md:flex">
                    <div className="flex flex-col w-full mr-10">
                      <label htmlFor="" className="pb-2">
                        Password<span>*</span>
                      </label>
                      <input
                        type="password"
                        name="username"
                        value=""
                        placeholder="*******"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                    <div className="flex flex-col  w-full">
                      <label htmlFor="" className="pb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                  </div>

                  {/* Third row */}
                  <div className="md:m-5 md:flex">
                    <div className="flex flex-col w-full mr-10">
                      <label htmlFor="" className="pb-2">
                        City<span>*</span>
                      </label>
                      <input
                        type="password"
                        name="username"
                        value=""
                        placeholder="*******"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                    <div className="flex flex-col  w-full">
                      <label htmlFor="" className="pb-2">
                        State
                      </label>
                      <input
                        type="text"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                  </div>

                  {/* Forth row */}
                  <div className="md:m-5 md:flex">
                    <div className="flex flex-col w-full mr-10">
                      <label htmlFor="" className="pb-2">
                        Country<span>*</span>
                      </label>
                      <input
                        type="password"
                        name="username"
                        value=""
                        placeholder="*******"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                    <div className="flex flex-col  w-full">
                      <label htmlFor="" className="pb-2">
                        Language
                      </label>
                      <input
                        type="text"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                  </div>
                  {/* Five row */}
                  <div className="md:m-5 md:flex">
                    <div className="flex flex-col w-full mr-10">
                      <label htmlFor="" className="pb-2">
                        Mobile<span>*</span>
                      </label>
                      <input
                        type="text"
                        name="mobile"
                        value=""
                        placeholder="+1 555 555 5555"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                    <div className="flex flex-col  w-full">
                      <label htmlFor="" className="pb-2">
                        Language
                      </label>
                      <input
                        type="text"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="border p-1 md:p-4 ">
                <div className="flex justify-start bg-[#4CB04F] text-3xl text-[#fff] py-3 px-5 m-1 rounded">
                  <AiOutlineInfoCircle className="mr-1" />
                  <h3>Industry Preferences</h3>
                </div>

                <div>
                  <form action="">
                    <div className="md:m-5 md:flex ">
                      <div className="flex flex-col w-full mr-10 mb-4">
                        <label htmlFor="" className="pb-2">
                          Networks<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="username"
                          value=""
                          placeholder="Johnny Sims"
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                      </div>
                      <div className="flex flex-col w-full justify-end">
                        <div className="bg-[#19A1B8] w-full py-2 px-2 text-white border-2 border-[#19A1B8] text-xs font-bold flex justify-center items-center mb-3">
                          <AiOutlineCheckCircle className="font-extrabold mr-2" />
                          <p> I'm seeking Business Partners or Investment Capital</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:m-5 md:flex ">
                      <div className="flex flex-col w-full mr-10 mb-4">
                        <label htmlFor="" className="pb-2">
                          Industry Preferences<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="username"
                          value=""
                          placeholder="Johnny Sims"
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                      </div>
                      <div className="flex flex-col w-full mr-10 mb-4">
                        <label htmlFor="" className="pb-2">
                          Amount<span>*</span>
                        </label>

                        <div className="flex justify-between">
                          {/* <input
                            type="text"
                            placeholder="$US"
                            className="bg-gray-200 border-r-2 border-[#8a8a8a]  rounded-l w-1/12 py-2 px-2 text-gray-700 text-sm"
                          /> */}
                          <input
                            type="text"
                            name="username"
                            value=""
                            placeholder="19"
                            className="mr-2 bg-gray-200 border-2 border-gray-200 rounded-l w-4/12 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          />
                          <input
                            type="text"
                            name="username"
                            value=""
                            placeholder="THOUSAND"
                            className="bg-gray-200 border-2 border-gray-200 rounded w-8/12 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-center"
                          />
                        </div>
                      </div>
                    </div>
                   
                  </form>
                </div>
              </div>

              <div className="border p-1 md:p-4 ">
                <div className="flex justify-start  bg-[#CDE4FE] text-2xl text-[#014084] py-3 px-5 m-1 rounded">
                  <AiOutlineInfoCircle className="mr-1" />
                  <h3>Financial Network Posts</h3>
                </div>
                <form action="">
                  <div className="md:m-5 ">
                    <div className="flex justify-center mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
                        alt=""
                        className="w-40 border p-2"
                      />
                    </div>
                    <div className="border py-5 text-center rounded bg-[#f3f3f3]">
                      <p>
                        Choose an Image that represent you, your product or company brand.
                        <br />
                        Quality images attract 80% more visitors!
                      </p>
                    </div>
                    <div className="mb-6 text-center">
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
                          Total Word Count: <strong>0</strong> words - Words left:{' '}
                          <strong>15</strong>
                        </p>
                      </label>
                      <input
                        type="text"
                        name="username"
                        value=""
                        placeholder="Min. 5 words - Max. 15 words"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-1"
                      />
                    </div>

                    <div>
                      <label htmlFor="" className="pb-2 flex justify-between">
                        <p>
                          Profile Ad <span>*</span>
                        </p>
                        <p className="text-sm">
                          Total Word Count: <strong>0</strong> words - Words left:{' '}
                          <strong>15</strong>
                        </p>
                      </label>
                      <textarea
                        name=""
                        id=""
                        cols="20"
                        rows="4"
                        placeholder="Min. 25 words - Max. 350 words"
                        className="w-full border p-2 mb-1 bg-gray-200"
                      ></textarea>
                    </div>

                    {/* Keyword Tags */}
                    <div>
                      <label htmlFor="" className="pb-2 flex justify-between">
                        <p>
                          Keyword tags <span>*</span>
                        </p>
                        <p className="text-sm">
                          Total Word Count: <strong>0</strong> words - Words left:{' '}
                          <strong>15</strong>
                        </p>
                      </label>
                      <textarea
                        name=""
                        id=""
                        cols="20"
                        rows="4"
                        placeholder="Seperate each keyword with a 'comma' (,)."
                        className="w-full border p-2 bg-gray-200"
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>

              <div className="border p-1 md:p-4 ">
                <div className="flex justify-start  bg-[#CDE4FE] text-2xl text-[#014084] py-3 px-5 m-1 mb-3 rounded">
                  <AiOutlineInfoCircle className="mr-1" />
                  <h3>Video Elevator Pitch</h3>
                </div>
                <form action="">
                  <div className="md:m-5">
                    <div className="flex flex-col w-full mr-10 mb-4">
                      <label htmlFor="" className="pb-2">
                        <p>Video Link (Vimeo, Youtube) or MP4 Direct Upload</p>
                      </label>
                      <input
                        type="text"
                        name="username"
                        value=""
                        placeholder="Vimeo or Youtube Video URL"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-1"
                      />
                    </div>

                    <div>
                      <label htmlFor="" className="pb-2 ">
                        <p className="mb-2">OR Upload Video</p>
                      </label>
                      <div className="text-center border-dashed border-2 border-[#b7b7b7] py-5 rounded">
                        <p>Choose MP4 Video or Drag and Drop your MP4 here</p>
                        <button className="bg-[#4335dc] px-3 py-2 rounded mt-3 text-white text-sm">
                          Upload Video
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-start bg-[#CDE4FE] text-2xl text-[#014084] py-3 px-5 m-1 mt-5 mb-3 rounded">
                      <AiOutlineInfoCircle className="mr-1" />
                      <h3>Upload Images</h3>
                    </div>
                    <div className="text-center border-dashed border-2 border-[#b7b7b7] py-5 rounded md:m-4">
                      <p>Choose Image or Drag and Drop it here</p>
                      <button className="bg-[#4335dc] px-3 py-2 rounded mt-3 text-white text-sm">
                        Upload Image
                      </button>
                    </div>
                  </div>
                </form>
              </div>
        </div>
    </div>
  )
}

export default Settings