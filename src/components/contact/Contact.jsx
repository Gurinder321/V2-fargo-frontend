import React from 'react';
import GetStarted from '../homepage/GetStarted';
import Footer from '../Layout/footer';
import Header1 from '../Layout/Header1';
import { FaBeer } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <Header1 />
      <div>
        <div className="bg-[url('https://i.imgur.com/yam0Jgt.png')] h-44"></div>
        <div className="m-4 md:max-w-3xl ">
          <form action="">
            <div className="border-2 border-grey p-10 rounded">
              <h4 className="text-center text-2xl mb-4">Contact Us</h4>
              <div className="md:flex md:justify-between">
                <div className="md:w-80">
                  <label className="" htmlFor="">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2"
                  />
                </div>
                <div className="md:w-80">
                  <label className="block" htmlFor="">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2"
                  />
                </div>
              </div>
              <div>
                <label className="block" htmlFor="">
                  Title
                </label>
                <input
                  type="title"
                  placeholder="Title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2"
                />
              </div>
              <label htmlFor="">Message</label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  my-2"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <div className="text-right">
                <button
                  type="submit"
                  class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-sm
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800   my-2
          "
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="my-14">
          <h4 className="text-center text-3xl">Connect With Us</h4>
          <div className="lg:flex lg:justify-evenly">
            <div className="flex flex-col justify-center items-center my-10">
              <FaBeer className="text-4xl my-2" />
              <p className="text-lg font-semibold my-2">no-reply@mypitchvault.com</p>
              <p>We will need up to 2 business days</p>
            </div>
            <div className="flex flex-col justify-center items-center my-10">
              <FaBeer className="text-4xl my-2" />
              <p className="text-lg font-semibold my-2">no-reply@mypitchvault.com</p>
              <p>We will need up to 2 business days</p>
            </div>
            <div className="flex flex-col justify-center items-center my-10">
              <FaBeer className="text-4xl my-2" />
              <p className="text-lg font-semibold my-2">no-reply@mypitchvault.com</p>
              <p>We will need up to 2 business days</p>
            </div>
          </div>
        </div>
      </div>
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Contact;
