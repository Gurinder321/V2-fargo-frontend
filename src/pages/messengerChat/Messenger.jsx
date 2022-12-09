import React, { useContext } from 'react'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/message/Message'
import { AuthContext } from '../../context/AuthContext'

const Messenger = () => {
    const {user} = useContext(AuthContext)

    console.log(user) 
  return (
    
    <div className='border md:flex w-full h-screen bg-[#ffcc002d] '>
        <div className='border w-full md:w-2/4 lg:w-2/6 h-52 bg-[#11ff0032]'>
            <input type="text" placeholder='Search for friends' className='w-11/12 py-2 px-0 border-b border-1 border-[#000]' />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
        </div>
        {/* chatbox */}
        <div className='border w-full h-2/4 bg-[#000dfd1b] flex flex-col justify-between'>
            {/* chatbox top */}
            <div className='overflow-y-scroll pr-2'>
                <Message />
                <Message own={true} />
                <Message  />
                <Message  />
                <Message  />
                <Message  />
                <Message  />
                <Message  />
                <Message  />
                <Message  />
                <Message  />
                <Message  />
                <Message  />
                <Message  />
                <Message  />
                <Message  />
                <Message  />
                <Message  />
                <Message  />
                <Message  />
            </div>
            {/* chatbox bottom */}
            <div className='mt-1 flex justify-between items-center'>
                <textarea placeholder='Write something...' className='w-4/5 h-28'></textarea>
                <button className='w-20 h-10 border cursor-pointer rounded bg-[#0015f7] hover:bg-[#08f] text-white'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Messenger