import React from "react";
import { FaEllipsisH  } from 'react-icons/fa';

export default function NoUser(){
    return (
        <>
        <div className = 'w-full border' >
           <div className='flex justify-between py-3 border-b px-4'>
               <div className='flex justify-center items-center'>
                   <div className='text-xl font-medium'>
                       <FaEllipsisH />
                   </div>
               </div>
           </div>

   {/* Actual chat */ }
   <div className='px-3'>

       <div className='flex justify-start px-2 py-1'>
           <div className='my-auto'>
               {/* <img src={user} alt="" className='border w-10 rounded-full' /> */}
           </div>
           <div className=' w-full p-3  py-2'>
               {/* <div className='font-medium'>Me <span className='text-sm text-[#7d7d7d] ml-2'>Oct 23, 2022, 4:40 PM</span></div> */}
               <p className='font-normal'>Select a user to start chatting</p>
           </div>
       </div>


       


   </div>

   </div>
   </>
    );
}