import React, { useState, useEffect } from "react";
import Sidebar from "../../../admin/components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiTwotoneEdit, AiFillEye } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { GrMail } from "react-icons/gr";


import { MdOutlineVerified } from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import { Link } from "react-router-dom";

import friends from "../../../pages/clickIcons/add-user-1.png";
import ClickFriends from "../../../pages/clickIcons/add-user-click.png";
import heart from "../../../pages/clickIcons/heart-1.png";
import ClickHeart from "../../../pages/clickIcons/heart-click.png";
import note from "../../../pages/clickIcons/note-1.png";
import ClickNote from "../../../pages/clickIcons/note-click.png";
import picture from "../../../pages/clickIcons/picture-1.png";
import ClickPicture from "../../../pages/clickIcons/picture-click.png";
import video from "../../../pages/clickIcons/video-1.png";
import ClickVideo from "../../../pages/clickIcons/video-click.png";
import check from "../../../pages/clickIcons/check-1.png";
import checkClick from "../../../pages/clickIcons/check-click.png";

import {
  AiTwotoneBulb,
  AiOutlineClose,
  AiOutlineInfoCircle,
  AiOutlineCheckCircle,
  AiTwotonePushpin,
  AiTwotoneTag,
} from "react-icons/ai";
import axios from "axios";

const AllUsers = () => {

  //
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      let token = localStorage.getItem("auth_admin");
      if (!token) return console.log(`You are not authorized for this project`);
      await axios
        .get(`/admin/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          setUsers(response.data.users);
        })
        .catch((error) => {
          console.log(error, "from fetching all users");
        });
    };
    getUsers();
  }, []);

  // function to verify users
  async function verify(user_id){
    let token = localStorage.getItem("auth_admin");
      if (!token) return alert(`You are not authorized for this`);
    await axios.post('/admin/verify' , {
      user_id
    } , {
      headers:{
        'Authorization':`Bearer ${token}`,
      }
    })
    .then(response =>{
      if(response.data.result != 1){
        return console.log("Unable to verify user");
      }
      // let finduser = users.find(user => user._id == user_id);
      // const filteredUsers = users.filter(user => user._id != user_id);
      // finduser.admin_verified = true;
      // setUsers([ finduser , ...filteredUsers ]);
      const page_href = window.location.href
      window.location.href = page_href;
    })
    .catch((error) =>{
      console.log("Error verifying user");
      console.log(error);
    })
  }

  let tkn = localStorage.getItem('auth_admin');

  if(!tkn) return <h1>You are not logged in <br/>
  <Link
  to={"/admin/login"}
  >Go To Login</Link>

</h1>
  function viewProfile() {
    var x = document.getElementById("profile");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function editUser() {
    var x = document.getElementById("editProfile");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  return (
    <>
      <div className="flex justify-start relative">
        <Sidebar className="absolute" />
        <div className="w-full">
          <Header />

          <div className="m-10 ">
            <h3 className="text-2xl font-medium pb-3 border-b-2">All Users</h3>
            <div className="">
              {/* All Users */}

              <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-4">
                <div className="md:flex md:justify-between md:items-center">
                  <input
                    type="text"
                    id="table-search"
                    className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                    placeholder="Search for items"
                  />

                  <ul className="flex justify-start">
                    <li className="mx-2 font-medium cursor-pointer hover:text-[#7f67ab]">
                      All Users(265)
                    </li>
                    <li className="mx-2 font-medium cursor-pointer hover:text-[#7f67ab]">
                      New Signups(11)
                    </li>
                    <li className="mx-2 font-medium cursor-pointer hover:text-[#7f67ab]">
                      Updates & Approvals(0)
                    </li>
                    <li className="mx-2 font-medium cursor-pointer hover:text-[#7f67ab]">
                      Bronze Emails(0)
                    </li>
                  </ul>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="checkbox-all-search"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Email
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Number
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Verified
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users &&
                      users.map((data, index) => {
                        console.log(data);
                        console.log(data.admin_verified , "admin verfied");

                        return (
                          <>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            key={index}
                            >
                              <td className="p-4 w-4">
                                <div className="flex items-center">
                                  <input
                                    id="checkbox-table-search-2"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    htmlFor="checkbox-table-search-2"
                                    className="sr-only"
                                  >
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <th
                                scope="row"
                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {data.name ? data.name : "N/A"}
                              </th>
                              <td className="py-4 px-6">
                                {" "}
                                {data.email ? data.email : "N/A"}
                              </td>
                              <td className="py-4 px-6">
                                {" "}
                                {data.phone_number ? data.phone_number : "N/A"}
                              </td>
                              <td className="py-4 px-6">{data.admin_verified ? "Yes" : "No"}</td>
                              <td className="">
                                <div className="flex justify-start">
                                  <RiDeleteBin6Fill className="bg-[#FF0100] text-white text-[28px] p-1.5 rounded-l hover:cursor-pointer" />
                                  <AiTwotoneEdit
                                    className="bg-[#28A844] text-white text-[28px] p-1.5 hover:cursor-pointer"
                                    onClick={editUser}
                                  />
                                  <AiFillEye className="bg-[#037AFE] text-white text-[28px] p-1.5 hover:cursor-pointer" />
                                  <BiCopy
                                    className="bg-[#FFC00C] text-white text-[28px] p-1.5 hover:cursor-pointer"
                                    onClick={viewProfile}
                                  />
                                  <div className="inline-flex relative w-fit">
                                    <div className="absolute top-5 left-5 bottom-auto right-auto border rounded-full bg-black text-white text-xs h-4 w-4 flex justify-center items-center">
                                      9
                                    </div>
                                    <GrMail className="bg-[#16A2B8] text-white text-[28px] p-1.5 rounded-r hover:cursor-pointer " />
                                  </div>
                                  <button 
                                  className={`${!data.admin_verified ? "bg-[#16A2B8]" : "bg-[#767676]" } text-white text-[28px] p-1.5 rounded-r hover:cursor-pointer ml-5`}
                                  disabled={data.admin_verified}
                                  onClick={() =>{
                                    verify(data._id)
                                  }}
                                  >{`${data.admin_verified ? "Verified" : "Verify"}`}</button>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    {/* next Product */}
                  </tbody>
                </table>
                <nav
                  className="flex justify-between items-center p-4"
                  aria-label="Table navigation"
                >
                  <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Showing{" "}
                    <span class="font-semibold text-gray-900 dark:text-white">
                      1-10
                    </span>{" "}
                    of{" "}
                    <span class="font-semibold text-gray-900 dark:text-white">
                      1000
                    </span>
                  </span>
                  <ul class="inline-flex items-center -space-x-px">
                    <li>
                      <Link
                        to="#"
                        class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <span class="sr-only">Previous</span>
                        <svg
                          class="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        2
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        aria-current="page"
                        class="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      >
                        3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        ...
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        100
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <span class="sr-only">Next</span>
                        <svg
                          class="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;

// <>
// <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//   <td className="p-4 w-4">
//     <div className="flex items-center">
//       <input
//         id="checkbox-table-search-2"
//         type="checkbox"
//         className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//       />
//       <label
//         htmlFor="checkbox-table-search-2"
//         className="sr-only"
//       >
//         checkbox
//       </label>
//     </div>
//   </td>
//   <th
//     scope="row"
//     className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//   >
//     Microsoft Surface Pro
//   </th>
//   <td className="py-4 px-6">White</td>
//   <td className="py-4 px-6">Laptop PC</td>
//   <td className="py-4 px-6">$1999</td>
//   <td className="">
//     <div className="flex justify-start">
//       <RiDeleteBin6Fill className="bg-[#FF0100] text-white text-[28px] p-1.5 rounded-l hover:cursor-pointer" />
//       <AiTwotoneEdit
//         className="bg-[#28A844] text-white text-[28px] p-1.5 hover:cursor-pointer"
//         onClick={editUser}
//       />
//       <AiFillEye className="bg-[#037AFE] text-white text-[28px] p-1.5 hover:cursor-pointer" />
//       <BiCopy
//         className="bg-[#FFC00C] text-white text-[28px] p-1.5 hover:cursor-pointer"
//         onClick={viewProfile}
//       />
//       <div className="inline-flex relative w-fit">
//         <div className="absolute top-5 left-5 bottom-auto right-auto border rounded-full bg-black text-white text-xs h-4 w-4 flex justify-center items-center">
//           9
//         </div>
//         <GrMail className="  bg-[#16A2B8] text-white text-[28px] p-1.5 rounded-r hover:cursor-pointer " />
//       </div>
//     </div>
//   </td>
// </tr>
// <tr>
//   <td colspan="6" className="">
//     {/* View Ad Admin */}
//     {/* each user */}
//     <div className="flex justify-center">
//       <div id="editProfile">
//         <div className="w-full">
//           <div className=" lg:m-10 lg:mr-0 lg:ml-4  ">
//             {/* FIXME:
// menu navigation  */}
//             <div className="flex justify-left items-center bg-[#7867a7] text-white font-normal  text-lg py-2 pl-5 mb-5 lg:mx-0 rounded">
//               <AiTwotoneBulb className="mr-3 text-3xl" />{" "}
//               Account Settings
//             </div>

//             <div className=" flex justify-between mb-3">
//               <div className="text-3xl ">
//                 Profile
//               </div>
//               <div className="flex justify-center">
//                 <Link to="/verify">
//                   <button className="flex justify-center items-center border rounded-l py-1 px-2 hover:bg-[#565656] hover:text-white">
//                     <MdOutlineVerified className="mr-1" />{" "}
//                     <p className="text-sm">
//                       Verification
//                     </p>
//                   </button>
//                 </Link>
//                 <Link to="/idverify">
//                   <button className="flex justify-center items-center border rounded-r py-1 px-2 hover:bg-[#565656] hover:text-white">
//                     <BiWallet className="mr-1" />{" "}
//                     <p className="text-sm">
//                       Bill Settings
//                     </p>{" "}
//                   </button>
//                 </Link>
//               </div>
//             </div>

//             <div className="border p-1 md:p-4 ">
//               <div className="flex justify-start bg-[#CDE4FE] text-3xl text-[#014084] py-3 px-5 m-1 rounded">
//                 <AiOutlineInfoCircle className="mr-1" />
//                 <h3>Basic Info</h3>
//               </div>
//               <form action="">
//                 <div className="md:m-5 md:flex">
//                   <div className="flex flex-col w-full mr-10">
//                     <label
//                       htmlFor=""
//                       className="pb-2"
//                     >
//                       Full Name<span>*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="username"
//                       value=""
//                       placeholder="Johnny Sims"
//                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     />
//                   </div>
//                   <div className="flex flex-col  w-full">
//                     <label
//                       htmlFor=""
//                       className="pb-2"
//                     >
//                       Email<span>*</span>
//                     </label>
//                     <input
//                       type="Email"
//                       placeholder="johnny@doe.com"
//                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     />
//                   </div>
//                 </div>

//                 {/* Second row */}
//                 <div className="md:m-5 md:flex">
//                   <div className="flex flex-col w-full mr-10">
//                     <label
//                       htmlFor=""
//                       className="pb-2"
//                     >
//                       Password<span>*</span>
//                     </label>
//                     <input
//                       type="password"
//                       name="username"
//                       value=""
//                       placeholder="*******"
//                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     />
//                   </div>
//                   <div className="flex flex-col  w-full">
//                     <label
//                       htmlFor=""
//                       className="pb-2"
//                     >
//                       Company Name
//                     </label>
//                     <input
//                       type="text"
//                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     />
//                   </div>
//                 </div>

//                 {/* Third row */}
//                 <div className="md:m-5 md:flex">
//                   <div className="flex flex-col w-full mr-10">
//                     <label
//                       htmlFor=""
//                       className="pb-2"
//                     >
//                       City<span>*</span>
//                     </label>
//                     <input
//                       type="password"
//                       name="username"
//                       value=""
//                       placeholder="*******"
//                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     />
//                   </div>
//                   <div className="flex flex-col  w-full">
//                     <label
//                       htmlFor=""
//                       className="pb-2"
//                     >
//                       State
//                     </label>
//                     <input
//                       type="text"
//                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     />
//                   </div>
//                 </div>

//                 {/* Forth row */}
//                 <div className="md:m-5 md:flex">
//                   <div className="flex flex-col w-full mr-10">
//                     <label
//                       htmlFor=""
//                       className="pb-2"
//                     >
//                       Country<span>*</span>
//                     </label>
//                     <input
//                       type="password"
//                       name="username"
//                       value=""
//                       placeholder="*******"
//                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     />
//                   </div>
//                   <div className="flex flex-col  w-full">
//                     <label
//                       htmlFor=""
//                       className="pb-2"
//                     >
//                       Language
//                     </label>
//                     <input
//                       type="text"
//                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     />
//                   </div>
//                 </div>
//                 {/* Five row */}
//                 <div className="md:m-5 md:flex">
//                   <div className="flex flex-col w-full mr-10">
//                     <label
//                       htmlFor=""
//                       className="pb-2"
//                     >
//                       Mobile<span>*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="mobile"
//                       value=""
//                       placeholder="+1 555 555 5555"
//                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     />
//                   </div>
//                   <div className="flex flex-col  w-full">
//                     <label
//                       htmlFor=""
//                       className="pb-2"
//                     >
//                       Language
//                     </label>
//                     <input
//                       type="text"
//                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                     />
//                   </div>
//                 </div>
//               </form>
//             </div>

//             <div className="border p-1 md:p-4 ">
//               <div className="flex justify-start bg-[#4CB04F] text-3xl text-[#fff] py-3 px-5 m-1 rounded">
//                 <AiOutlineInfoCircle className="mr-1" />
//                 <h3>Industry Preferences</h3>
//               </div>

//               <div>
//                 <form action="">
//                   <div className="md:m-5 md:flex ">
//                     <div className="flex flex-col w-full mr-10 mb-4">
//                       <label
//                         htmlFor=""
//                         className="pb-2"
//                       >
//                         Networks<span>*</span>
//                       </label>
//                       <input
//                         type="text"
//                         name="username"
//                         value=""
//                         placeholder="Johnny Sims"
//                         className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                       />
//                     </div>
//                     <div className="flex flex-col w-full justify-end">
//                       <div className="bg-[#19A1B8] w-full py-2 px-2 text-white border-2 border-[#19A1B8] text-xs font-bold flex justify-center items-center mb-3">
//                         <AiOutlineCheckCircle className="font-extrabold mr-2" />
//                         <p>
//                           {" "}
//                           I'm seeking Business
//                           Partners or Investment
//                           Capital
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="md:m-5 md:flex ">
//                     <div className="flex flex-col w-full mr-10 mb-4">
//                       <label
//                         htmlFor=""
//                         className="pb-2"
//                       >
//                         Industry Preferences
//                         <span>*</span>
//                       </label>
//                       <input
//                         type="text"
//                         name="username"
//                         value=""
//                         placeholder="Johnny Sims"
//                         className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                       />
//                     </div>
//                     <div className="flex flex-col w-full mr-10 mb-4">
//                       <label
//                         htmlFor=""
//                         className="pb-2"
//                       >
//                         Amount<span>*</span>
//                       </label>

//                       <div className="flex justify-between">
//                         {/* <input
// type="text"
// placeholder="$US"
// className="bg-gray-200 border-r-2 border-[#8a8a8a]  rounded-l w-1/12 py-2 px-2 text-gray-700 text-sm"
// /> */}
//                         <input
//                           type="text"
//                           name="username"
//                           value=""
//                           placeholder="19"
//                           className="mr-2 bg-gray-200 border-2 border-gray-200 rounded-l w-4/12 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                         />
//                         <input
//                           type="text"
//                           name="username"
//                           value=""
//                           placeholder="THOUSAND"
//                           className="bg-gray-200 border-2 border-gray-200 rounded w-8/12 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-center"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>

//             <div className="border p-1 md:p-4 ">
//               <div className="flex justify-start  bg-[#CDE4FE] text-2xl text-[#014084] py-3 px-5 m-1 rounded">
//                 <AiOutlineInfoCircle className="mr-1" />
//                 <h3>Financial Network Posts</h3>
//               </div>
//               <form action="">
//                 <div className="md:m-5 ">
//                   <div className="flex justify-center mb-4">
//                     <img
//                       src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
//                       alt=""
//                       className="w-40 border p-2"
//                     />
//                   </div>
//                   <div className="border py-5 text-center rounded bg-[#f3f3f3]">
//                     <p>
//                       Choose an Image that represent
//                       you, your product or company
//                       brand.
//                       <br />
//                       Quality images attract 80%
//                       more visitors!
//                     </p>
//                   </div>
//                   <div className="mb-6 text-center">
//                     <button className="bg-[#28a745] px-3 py-2 rounded mt-3 text-white">
//                       UPLOAD AVATAR
//                     </button>
//                   </div>
//                   <div className="flex flex-col w-full mr-10 mb-4">
//                     <label
//                       htmlFor=""
//                       className="pb-2 flex justify-between"
//                     >
//                       <p>
//                         Ad Headline <span>*</span>
//                       </p>
//                       <p className="text-sm">
//                         Total Word Count:{" "}
//                         <strong>0</strong> words -
//                         Words left:{" "}
//                         <strong>15</strong>
//                       </p>
//                     </label>
//                     <input
//                       type="text"
//                       name="username"
//                       value=""
//                       placeholder="Min. 5 words - Max. 15 words"
//                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-1"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor=""
//                       className="pb-2 flex justify-between"
//                     >
//                       <p>
//                         Profile Ad <span>*</span>
//                       </p>
//                       <p className="text-sm">
//                         Total Word Count:{" "}
//                         <strong>0</strong> words -
//                         Words left:{" "}
//                         <strong>15</strong>
//                       </p>
//                     </label>
//                     <textarea
//                       name=""
//                       id=""
//                       cols="20"
//                       rows="4"
//                       placeholder="Min. 25 words - Max. 350 words"
//                       className="w-full border p-2 mb-1 bg-gray-200"
//                     ></textarea>
//                   </div>

//                   {/* Keyword Tags */}
//                   <div>
//                     <label
//                       htmlFor=""
//                       className="pb-2 flex justify-between"
//                     >
//                       <p>
//                         Keyword tags <span>*</span>
//                       </p>
//                       <p className="text-sm">
//                         Total Word Count:{" "}
//                         <strong>0</strong> words -
//                         Words left:{" "}
//                         <strong>15</strong>
//                       </p>
//                     </label>
//                     <textarea
//                       name=""
//                       id=""
//                       cols="20"
//                       rows="4"
//                       placeholder="Seperate each keyword with a 'comma' (,)."
//                       className="w-full border p-2 bg-gray-200"
//                     ></textarea>
//                   </div>
//                 </div>
//               </form>
//             </div>

//             <div className="border p-1 md:p-4 ">
//               <div className="flex justify-start  bg-[#CDE4FE] text-2xl text-[#014084] py-3 px-5 m-1 mb-3 rounded">
//                 <AiOutlineInfoCircle className="mr-1" />
//                 <h3>Video Elevator Pitch</h3>
//               </div>
//               <form action="">
//                 <div className="md:m-5">
//                   <div className="flex flex-col w-full mr-10 mb-4">
//                     <label
//                       htmlFor=""
//                       className="pb-2"
//                     >
//                       <p>
//                         Video Link (Vimeo, Youtube)
//                         or MP4 Direct Upload
//                       </p>
//                     </label>
//                     <input
//                       type="text"
//                       name="username"
//                       value=""
//                       placeholder="Vimeo or Youtube Video URL"
//                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-1"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor=""
//                       className="pb-2 "
//                     >
//                       <p className="mb-2">
//                         OR Upload Video
//                       </p>
//                     </label>
//                     <div className="text-center border-dashed border-2 border-[#b7b7b7] py-5 rounded">
//                       <p>
//                         Choose MP4 Video or Drag and
//                         Drop your MP4 here
//                       </p>
//                       <button className="bg-[#4335dc] px-3 py-2 rounded mt-3 text-white text-sm">
//                         Upload Video
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="flex justify-start bg-[#CDE4FE] text-2xl text-[#014084] py-3 px-5 m-1 mt-5 mb-3 rounded">
//                     <AiOutlineInfoCircle className="mr-1" />
//                     <h3>Upload Images</h3>
//                   </div>
//                   <div className="text-center border-dashed border-2 border-[#b7b7b7] py-5 rounded md:m-4">
//                     <p>
//                       Choose Image or Drag and Drop
//                       it here
//                     </p>
//                     <button className="bg-[#4335dc] px-3 py-2 rounded mt-3 text-white text-sm">
//                       Upload Image
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className="bg-[#ffffff] md:m-10 md:w-[850px] rounded-tr-md rounded-tl-md mb-5 border border-[#bebebe]"
//         id="profile"
//       >
//         <div className="bg-[#ededed] rounded-tr rounded-tl px-2 py-3 flex justify-between items-center  ">
//           <div className="text-lg font-bold">
//             Duis aute irure dolor in reprehenderit{" "}
//             <span>X</span>
//           </div>
//           <button className="bg-[#ff1717] text-white p-2 rounded ">
//             <AiOutlineClose />
//           </button>
//         </div>
//         <div className="lg:flex lg:justify-between px-3   mt-8">
//           <div className="  ">
//             <p className="text-center text-sm text-[#969696]">
//               PROFILE ID: 89149
//             </p>
//             <div className="flex m-2 p-2 border w-40  lg:w-36 mx-auto">
//               <img
//                 src="https://i.imgur.com/1Ge7acx.png"
//                 alt=""
//               />
//             </div>
//             {/* TODO: */}
//             <div className="flex justify-between items-center ">
//               <div className="relative">
//                 <img
//                   src={ClickFriends}
//                   alt=""
//                   className="w-5	"
//                 />
//                 <img
//                   src={friends}
//                   alt=""
//                   className="	absolute top-0 left-0 hover:opacity-0 w-5"
//                 />
//                 <img
//                   src={check}
//                   alt=""
//                   className="w-4 mx-auto mt-2"
//                 />
//               </div>
//               <div className="relative">
//                 <img
//                   src={ClickVideo}
//                   alt=""
//                   className="w-5	"
//                 />
//                 <img
//                   src={video}
//                   alt=""
//                   className="	absolute top-0 left-0 hover:opacity-0 w-5"
//                 />
//                 <img
//                   src={check}
//                   alt=""
//                   className="w-4 mx-auto mt-2"
//                 />
//               </div>

//               <div className="relative">
//                 <img
//                   src={ClickPicture}
//                   alt=""
//                   className="w-5	"
//                 />
//                 <img
//                   src={picture}
//                   alt=""
//                   className="	absolute top-0 left-0 hover:opacity-0 w-5"
//                 />
//                 <img
//                   src={check}
//                   alt=""
//                   className="w-4 mx-auto mt-2"
//                 />
//               </div>
//               <div className="relative">
//                 <img
//                   src={ClickHeart}
//                   alt=""
//                   className="w-5	"
//                 />
//                 <img
//                   src={heart}
//                   alt=""
//                   className="	absolute top-0 left-0 hover:opacity-0 w-5"
//                 />
//                 <img
//                   src={check}
//                   alt=""
//                   className="w-4 mx-auto mt-2"
//                 />
//               </div>
//               <div className="relative">
//                 {/* FIXME: */}
//                 <button className=" flex items-center">
//                   <img
//                     src={ClickNote}
//                     alt=""
//                     className="w-5	"
//                   />
//                 </button>
//                 <img
//                   src={note}
//                   alt=""
//                   className="	absolute top-0 left-0 hover:opacity-0 w-5"
//                 />
//                 <img
//                   src={checkClick}
//                   alt=""
//                   className="w-4 mx-auto mt-2"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="lg:ml-4">
//             <div className="lg:flex lg:justify-between">
//               <div>
//                 <div className="flex justify-center items-center text-center text-sm mt-2 lg:mt-0 text-[#969696] lg:flex lg:justify-start ">
//                   <div className="pr-2 ">
//                     JOSH A.
//                   </div>
//                   <AiTwotonePushpin />
//                   <div className="pl-1">
//                     TEXAS, UNITED STATES
//                   </div>
//                 </div>

//                 <div className="lg:flex lg:justify-between">
//                   <div className="flex  justify-center lg:flex lg:justify-start">
//                     <button className="bg-[#f0ad4e] px-3 py-2 rounded mt-3 mr-2 text-white text-sm">
//                       STARTUP
//                     </button>
//                     <button className="bg-[#dc3545] px-3 py-2 rounded mt-3 text-white text-sm">
//                       FUNDING NEEDED $512K
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex  justify-center lg:flex lg:flex-col lg:w-32">
//                 <button className="bg-[#ffc107] px-3 py-2 rounded mt-3 mr-2 lg:m-0 text-white text-sm">
//                   Send Message
//                 </button>
//                 <button className="bg-[#007bff] px-3 py-2 rounded mt-3 text-white text-sm">
//                   Update to View
//                 </button>
//               </div>
//             </div>

//             {/* paragraph about the company */}
//             <div>
//               <div className="h-5 border-b-2 border-[#b4b4b4] text-center text-2xl "></div>
//               <p className="text-center lg:text-left mt-2">
//                 Lorem ipsum dolor sit amet
//                 consectetur, adipisicing elit. Quam
//                 perferendis facere ea ipsa possimus
//                 officiis eius voluptates provident
//                 libero reprehenderit dignissimos
//                 aspernatur...
//                 <span className="font-semibold text-[#17a2b8]">
//                   view more{" "}
//                 </span>
//               </p>
//               <div className="h-5 border-b-2 border-[#b4b4b4] text-center text-2xl "></div>

//               <div className="lg:flex lg:justify-between">
//                 <div className="flex justify-start mt-3">
//                   <p className="mr-8">
//                     <span className="font-bold">
//                       INVESTOR TYPE:
//                     </span>{" "}
//                     Venture open
//                   </p>
//                   <p>
//                     <span className="font-bold">
//                       INDUSTRY:
//                     </span>{" "}
//                     Computers open
//                   </p>
//                 </div>
//                 <div className="flex justify-center items-center bg-[#0C0] text-white text-center my-3  py-3 font-semibold lg:bg-[#fff0] lg:text-[#0C0] lg:text-xl lg:semi-bold lg:my-0 lg:py-0 lg:text-left">
//                   <div className="pr-1">
//                     <AiOutlineCheckCircle />
//                   </div>
//                   <div>ID VERIFIED</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-wrap justify-center pb-3 lg:justify-start lg:mt-2 px-3">
//           <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
//             <AiTwotoneTag />
//             <p className="ml-1">IT Consulting</p>
//           </button>
//           <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
//             <AiTwotoneTag />
//             <p className="ml-1">IT Consulting</p>
//           </button>
//           <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
//             <AiTwotoneTag />
//             <p className="ml-1">IT Consulting</p>
//           </button>
//           <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
//             <AiTwotoneTag />
//             <p className="ml-1">IT Consulting</p>
//           </button>
//           <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
//             <AiTwotoneTag />
//             <p className="ml-1">IT Consulting</p>
//           </button>
//           <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
//             <AiTwotoneTag />
//             <p className="ml-1">IT Consulting</p>
//           </button>
//           <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
//             <AiTwotoneTag />
//             <p className="ml-1">IT Consulting</p>
//           </button>
//           <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
//             <AiTwotoneTag />
//             <p className="ml-1">IT Consulting</p>
//           </button>
//           <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
//             <AiTwotoneTag />
//             <p className="ml-1">IT Consulting</p>
//           </button>
//           <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
//             <AiTwotoneTag />
//             <p className="ml-1">IT Consulting</p>
//           </button>
//           <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
//             <AiTwotoneTag />
//             <p className="ml-1">IT Consulting</p>
//           </button>
//           <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
//             <AiTwotoneTag />
//             <p className="ml-1">IT Consulting</p>
//           </button>
//         </div>
//       </div>
//     </div>
//   </td>
// </tr>
// </>
