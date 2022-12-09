import React, { useState } from 'react';

import {
  AiOutlineInfoCircle,
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineHdd,
  AiOutlineLaptop,
  AiOutlineSetting,
  AiOutlineStar,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Sidebar = ({text="test"}) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <div>
        <div className="m-10 lg:mr-6 max-w-[1240px] mx-auto">
          {/* FIXME:
           menu navigation  */}
          <div className="mt-8 lg:flex lg:justify-between">
            <div className="lg:flex lg:justify-start lg:w-60">
              <ul className="flex flex-col divide-y divide-[#dadada] border border-[#b4b4b4] rounded  lg:w-60 lg:h-fit	">



                <Link to="/network">
                <div className="flex justify-between items-center p-3 hover:bg-[#7867a7] hover:text-[#fff] cursor-pointer">
                  <li className="text-base">
                   Browse Network
                  </li>
                  <div className="flex ">
                    <div className="px-2 ">
                      <AiOutlineUser />
                    </div>

                    <div>
                    
                    <i className='sidebar-icon group'> <div className="relative">
                <AiOutlineInfoCircle className="w-5"/>

               
              </div><span className='sidebar-tooltip group-hover:scale-100 bg-[#6e6e6e]'>{text="Got a Question or Need Support? Create an Online Ticket and we will help. Please allow 24-48 hours for a reply. You can always follow up by calling us directly at (929) 297-0333"}</span>
              
              </i>
              

        </div>
                    </div>
                  </div>
                
                </Link>




                <Link to="/viewmyad">
                  <div className="flex justify-between items-center p-3 hover:bg-[#7867a7] hover:text-[#fff] cursor-pointer">
                    <li className="text-base">View my Ad</li>
                    <div className="flex ">
                      <div className="px-2 ">
                        <AiOutlineEye />
                      </div>
                      <AiOutlineInfoCircle />
                    </div>
                  </div>
                </Link>

                <div className="flex justify-between items-center p-3 hover:bg-[#7867a7] hover:text-[#fff] cursor-pointer">
                  <li className="text-base">Resolution Center</li>
                  <div className="flex ">
                    <div className="px-2 ">
                      <AiOutlineHdd />
                    </div>
                    <AiOutlineInfoCircle />
                  </div>
                </div>

                <Link to="/support">
                  <div className="flex justify-between items-center p-3 hover:bg-[#7867a7] hover:text-[#fff] cursor-pointer">
                    <li className="text-base">Support</li>
                    <div className="flex ">
                      <div className="px-2 ">
                        <AiOutlineLaptop />
                      </div>
                      <AiOutlineInfoCircle />
                    </div>
                  </div>
                </Link>

                <Link to="/settings">
                  <div className="flex justify-between items-center p-3 hover:bg-[#7867a7] hover:text-[#fff] cursor-pointer">
                    <li className="text-base">Account Settings</li>
                    <div className="flex ">
                      <div className="px-2 ">
                        <AiOutlineSetting />
                      </div>
                      <AiOutlineInfoCircle />
                    </div>
                  </div>
                </Link>

                <Link to="/upgrade">
                  <div className="flex justify-between items-center p-3 hover:bg-[#7867a7] hover:text-[#fff] cursor-pointer">
                    <li className="text-base">Upgrade Account</li>
                    <div className="flex ">
                      <div className="px-2 ">
                        <AiOutlineStar />
                      </div>
                      <AiOutlineInfoCircle />
                    </div>
                  </div>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
