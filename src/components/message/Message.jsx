import React from 'react'
import avatar from './user.png'
import "./message.css"

const Message = ({own}) => {
  return (
    <div className={ own ? 'flex flex-col mt-5 items-end': 'flex flex-col mt-5 '}>
        <div className='flex items-center'>
            <img src={avatar} alt="" className="w-10 h-10 border-2 border-black rounded-full object-cover mr-2" />
            <p className={own ? 'p-2 rounded-2xl bg-[#e3e3e3] text-black max-w-xl' : 'p-2 rounded-2xl bg-[#6169ff] text-white max-w-xl'}>Hello, this is a message Lorem, ipsum dolor sit </p>

        </div>
        <div className='text-xs mt-2'>1 hour ago</div>
    </div>
  )
}

export default Message