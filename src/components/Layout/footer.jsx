import React from 'react';
import { Link } from 'react-router-dom';

import { AiFillCaretUp } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="   h-full  bg-[#252525]">
      <div className="flex justify-between items-center px-7 py-5 text-[#bfbfbf]">
        <div className="flex justify-left items-center ">
          <div className="mr-6">
            <Link to="/terms">Terms of agreement</Link>
          </div>
          <div>
            <Link to="/privacy">Privacy policy</Link>
          </div>
        </div>

        <div className="flex justify-between items-center px-3 py-2 text-[#000000] border bg-[#ffffff] border-[#ffffff] rounded-md">
          <button className="pr-1 ">Language</button>
          <AiFillCaretUp />
        </div>
      </div>
    </div>
  );
};
export default Footer;
