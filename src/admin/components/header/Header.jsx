import { GoSignOut } from 'react-icons/go';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    
    <div className=" w-full h-[56px] bg-white drop-shadow-lg  ">
      <div className=" flex justify-end items-center  w-full h-full max-w-[1240px] m-auto px-7 ">
       
       
       
          <Link to='/logout'>
          <GoSignOut className="text-2xl text-black" />
          </Link>
      
      </div>
    </div>
  );
}
