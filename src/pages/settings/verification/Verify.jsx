import React from 'react';

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

import { MdOutlineVerified } from 'react-icons/md';
import { BiWallet } from 'react-icons/bi';

const Verify = () => {
  return (
    <>
      <div>
        <div className="m-10 lg:ml-0 lg:w-full">
          {/* FIXME:
           menu navigation  */}
          <div className="mt-8 lg:flex lg:justify-between">
            <div className=" bg-[#ffffff00]   sm:ml-0 sm: mt-4 lg:ml-4 lg:mt-0">
              {/* search box */}

              {/* purple banner My Website Network */}

              <div className="flex justify-left items-center bg-[#7867a7] text-white font-normal text-lg py-2 pl-5 mb-5 rounded w-full">
                <AiTwotoneBulb className="mr-3 text-3xl" /> Account Settings
              </div>

              <div className=" flex justify-between mb-3">
                <div className="text-2xl ">Verification</div>
                <div className="flex justify-center">
                  <div className="">
                    <button className="flex justify-center items-center border rounded-l py-1 px-2 hover:bg-[#565656] hover:text-white">
                      <MdOutlineVerified className="mr-1" /> <p className="text-sm">Verification</p>
                    </button>
                  </div>
                  <div>
                    <button className="flex justify-center items-center border rounded-r py-1 px-2 hover:bg-[#565656] hover:text-white">
                      <BiWallet className="mr-1" /> <p className="text-sm">Bill Settings</p>{' '}
                    </button>
                  </div>
                </div>
              </div>
              <div className="border p-4 ">
                <h5 className="mx-5 mt-2 font-semibold">Standard verification</h5>
                <p className="mx-5">
                  It is required to enter information about your identity and address
                </p>
                <form action="">
                  <div className="my-4 mx-5 md:flex">
                    <div className="flex flex-col w-full mr-10">
                      <label htmlFor="" className="pb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="username"
                        value=""
                        placeholder="Johnny Sims"
                        className="mb-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                    <div className="flex flex-col  w-full">
                      <label htmlFor="" className="pb-2">
                        Country<span>*</span>
                      </label>
                      <input
                        type="Email"
                        placeholder="johnny@doe.com"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                  </div>
                  <div className="my-4 mx-5 md:flex">
                    <div className="flex flex-col w-full mr-10">
                      <label htmlFor="" className="pb-2">
                        ZIP code / POST code
                      </label>
                      <input
                        type="text"
                        name="username"
                        value=""
                        placeholder="Johnny Sims"
                        className="mb-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                    <div className="flex flex-col  w-full">
                      <label htmlFor="" className="pb-2">
                        City<span>*</span>
                      </label>
                      <input
                        type="Email"
                        placeholder="johnny@doe.com"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                  </div>
                  <div className="my-4 mx-5 md:flex">
                    <div className="flex flex-col w-full mr-10">
                      <label htmlFor="" className="pb-2">
                        Address Line 1<span>*</span>
                      </label>
                      <input
                        type="text"
                        name="username"
                        value=""
                        placeholder="Johnny Sims"
                        className="mb-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                    <div className="flex flex-col  w-full">
                      <label htmlFor="" className="pb-2">
                        Phone<span>*</span>
                      </label>
                      <input
                        type="Email"
                        placeholder="johnny@doe.com"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-[#828282] mx-4">
                    You confirm that the entered data is correct and true. Your account can be
                    locked if you entered incorrect information
                  </p>
                  <div className="text-right">
                    <input
                      type="submit"
                      value="Save"
                      className="bg-[#4335dc] px-3 py-2 rounded mt-3 mx-4 text-white text-sm "
                    />
                  </div>
                </form>
              </div>
              <div className="border p-4 mt-5">
                <h5 className="mx-5 mt-2 font-semibold">Extended verification</h5>
                <p className="mx-5">
                  This status is available after the standard verification process
                </p>
                <div className="text-center border-dashed border-2 border-[#b7b7b7] py-5 rounded m-4">
                  <p>Choose Image or Drag and Drop it here</p>
                  <button className="bg-[#4335dc] px-3 py-2 rounded mt-3 text-white text-sm">
                    Upload Image
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
