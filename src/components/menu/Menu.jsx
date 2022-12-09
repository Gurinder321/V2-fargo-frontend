import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FriendsContext from '../../context/friends';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { friends , requests , favourites , notes } = useContext(FriendsContext);
  return (
    <>
      <div>
        <div className="m-10 max-w-[1240px] mx-auto px-7">
          <div className="text-3xl ">
            <h1>Network</h1>
          </div>
          <div>
            <ul className="flex px-2 text-center items-center justify-end mt-10">
              <Link to="/friends">
                <li className=" bg-[#e8e7e779] hover:bg-[#949494] cursor-pointer  font-normal hover:text-blue py-2 px-4  hover:border-transparent rounded-l-lg">
                  My Friends <span className="bg-[#ffc107] py-1 px-2 rounded-full">{ friends ? friends.length : 0}</span>
                </li>
              </Link>

              <Link to="/requests">
                <li className=" bg-[#e8e7e779] hover:bg-[#949494] cursor-pointer  font-normal hover:text-blue py-2 px-4  hover:border-transparent">
                  Friend Requests <span className="bg-[#ffc107] py-1 px-2 rounded-full"> { requests ? requests.length : 0 }</span>
                </li>
              </Link>

              <Link to="/notes">
                <li className=" bg-[#e8e7e779] hover:bg-[#949494] cursor-pointer  font-normal hover:text-blue py-2 px-4  hover:border-transparent ">
                  My Notes <span className="bg-[#ffc107] py-1 px-2 rounded-full">{(notes && notes.length > 0) ? notes.length : 0}</span>
                </li>
              </Link>
              <Link to="/favorites">
                <li className=" bg-[#e8e7e779] hover:bg-[#949494] cursor-pointer  font-normal hover:text-blue py-2 px-4  hover:border-transparent ">
                  My Favorites <span className="bg-[#ffc107] py-1 px-2 rounded-full">{favourites ? favourites.length : 0}</span>
                </li>
              </Link>
              <li
                className=" bg-[#e8e7e779] hover:bg-[#949494] cursor-pointer font-normal hover:text-blue py-2 px-4  hover:border-transparent rounded-r-lg"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <div className="static">
                  <Link to="">
                    My Inbox <span className="bg-[#ffc107] py-1 px-2 rounded-full">6</span>
                    {/* Dropdown menu */}
                    <div className={isOpen ? 'visible' : 'invisible'}>
                      <div className="absolute border border-[#f2f2f2a2] shadow-2xl	 w-80 top-64 right-12 lg:top-60 lg:right-36 ">
                        <div className="text-right text-[#777777] hover:text-[#777777] pr-2 border-[#c1c1c1] border-b py-1 bg-[#fff]">
                          Clear All
                        </div>
                        <div className="flex justify-between bg-[#fff] border-b">
                          <div className="m-1">
                            <img
                              className="rounded-3xl	w-16 "
                              src="https://i.imgur.com/1Ge7acx.png"
                              alt=""
                            />
                          </div>
                          <div className="text-left  p-2 text-[#838383] text-sm">
                            <div className="flex justify-between align-middle mb-2">
                              <p className="text-black font-bold">Robert Black</p>
                              <p className="text-black">Sept 12 08:43 PM</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing Rerum...</p>
                          </div>
                        </div>

                        <div className="flex justify-between bg-[#fff]">
                          <div className="m-1">
                            <img
                              className="rounded-3xl	w-16 "
                              src="https://i.imgur.com/1Ge7acx.png"
                              alt=""
                            />
                          </div>
                          <div className="text-left  p-2 text-[#838383] text-sm">
                            <div className="flex justify-between align-middle mb-2">
                              <p className="text-black font-bold">Robert Black</p>
                              <p className="text-black">Sept 12 08:43 PM</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing Rerum...</p>
                          </div>
                        </div>

                        <div>
                          <Link to="/messenger">
                            <button className="text-white text-sm w-full py-3 bg-[#E44D3A]">
                              View All Messages
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="h-5 border-b-2 border-[#b4b4b4] text-center text-2xl "></div>
        </div>
      </div>
    </>
  );
};

export default Menu;
