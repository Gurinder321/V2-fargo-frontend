

import { GoSignOut } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Topbar() {
  return (
    <div className=" w-full h-[80px] bg-[url('https://i.imgur.com/6ZyzH0D.png')] drop-shadow-lg  ">
      <div className=" flex justify-between items-center  w-full h-full max-w-[1240px] m-auto px-7 ">
        <div className="flex items-center text-white ">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl ">BRAND.</h1>
        </div>
        <div>
          <Link to='/logout'>
          <GoSignOut className="text-3xl text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
