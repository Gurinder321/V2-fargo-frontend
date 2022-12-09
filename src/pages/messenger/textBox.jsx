import React from "react";
import user from './user.png'


export default function TextBox({
    text,
    createdAt,
    sender,
    chat_id,
    sender_name,
}){
    let time = new Date(createdAt).toUTCString();
    return(
        <div className='flex justify-start px-2 py-1'>
            <div className='my-auto'>
                <img src={user} alt="" className='border w-10 rounded-full' />
            </div>
            <div className='w-full p-3  py-2'>
                <div className='font-medium'>{sender_name ? sender_name : "YOU"} <span className='text-sm text-[#7d7d7d] ml-2'>{time}</span></div>
                <p className='font-normal'>{text}</p>
            </div>
        </div>
    )
}