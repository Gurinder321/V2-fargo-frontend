import React from 'react';
import chat from './images/chat.png';
import handshake from './images/handshake.png';
import investing from './images/investing.png';

const About = () => {
  return (
    <div name="about" className="w-full my-10 ">
      <div className="max-w-[1240px] mx-auto px-7">
        <div className="text-center">
          <h2 className="text-4xl font-semibold py-10">
            Over $1Billion Invested in Startups Through FundsGo
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className=" py-8  ">
            <div className="w-24 m-auto mb-3">
              <img src={chat} alt="" />
            </div>
            <p className="text-xl font-bold text-black">Instant Chat Messenger</p>
            <p className="text-gray-400 mt-2 mb-4">
              Pitch Investors Live in Real-Time. Upload your Documents, Videos, Pics, & more!
            </p>
            <button className="text-gray-400 mt-2 border py-2 px-2 rounded ">
              Got Questions? (206) 337-0277
            </button>
          </div>
          <div className=" py-8  ">
            <div className="w-24 m-auto mb-3">
              <img src={investing} alt="" />
            </div>
            <p className="text-xl font-bold text-black">Find Investment Capital</p>
            <p className="text-gray-400 mt-2 mb-4">
              Connect with Funding Partners. Need Private Investors, Angels, VC's, Equity Funding?
            </p>
            <button className="text-gray-400 mt-2 border py-2 px-2 rounded ">
              Got Questions? (206) 337-0277
            </button>
          </div>
          <div className="py-8">
            <div className="w-24 m-auto mb-3">
              <img src={handshake} alt="" />
            </div>
            <p className="text-xl font-bold text-black">Finance Social Network</p>
            <p className="text-gray-400 mt-2 mb-4">
              We have quality funding resources and investors looking for their next opportunity!
            </p>
            <button className="text-gray-400 mt-2 border py-2 px-2 rounded ">
              Got Questions? (206) 337-0277
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
