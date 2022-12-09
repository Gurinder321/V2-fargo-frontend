import React from 'react'
import user from './user.png'

import { FaEllipsisH } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';

const Messages = () => {
  return (
<>

<div className='w-full border md:flex md:justify-center md:items-start'>
<div className=' w-full md:w-80'>
{/* user 1 */}
<div className='text-center text-lg py-3 pt-4 border-b'><h5>All Conversations</h5></div>
    <div className='flex justify-start px-2 border-b'>
      <div className='my-auto'>
        <img src={user} alt="" className='w-12 rounded-full' />
      </div>
  <div className="flex justify-between items-start w-full p-2 py-4">
<div className='ml-2'>
  
  <h6 className='font-semibold pb-1'>John Doe</h6>
  <p className='text-sm text-[#7d7d7d]'>How, How are you?</p>
  </div>
  <div>
  <div className='text-sm text-[#7d7d7d] pb-1'>1 day</div>  
<div className='mx-auto border bg-[#1CBF73] text-white  rounded-full w-6'><p className='text-center text-sm'>1</p></div>
  </div>
    </div>
    </div>
{/* user 2 */}
    <div className='flex justify-start px-2 border-b'>
      <div className='my-auto'>
        <img src={user} alt="" className='border w-12 rounded-full' />
      </div>
  <div className="flex justify-between items-start w-full p-2  py-4">
<div className='ml-2'>
  
  <h6 className='font-semibold'>John Doe</h6>
  <p className='text-sm text-[#7d7d7d]'>How, How are you?</p>
  </div>
  <div>
  <div className='text-sm text-[#7d7d7d] pb-1'>1 day</div>  
<div className='mx-auto border bg-[#1CBF73] text-white  rounded-full w-6'><p className='text-center text-sm'>1</p></div>
  </div> 
    </div>
    </div>
{/* user 3 */}
    <div className='flex justify-start px-2 border-b'>
      <div className='my-auto'>
        <img src={user} alt="" className='border w-12 rounded-full' />
      </div>
  <div className="flex justify-between items-start w-full p-2  py-4">
<div className='ml-2'>
  
  <h6 className='font-semibold'>John Doe</h6>
  <p className='text-sm text-[#7d7d7d]'>How, How are you?</p>
  </div>
  <div>
  <div className='text-sm text-[#7d7d7d] pb-1'>1 day</div>  
<div className='mx-auto border bg-[#1CBF73] text-white  rounded-full w-6'><p className='text-center text-sm'>1</p></div>
  </div> 
    </div>
    </div>
{/* user 4 */}
    <div className='flex justify-start px-2 border-b'>
      <div className='my-auto'>
        <img src={user} alt="" className='border w-12 rounded-full' />
      </div>
  <div className="flex justify-between items-start w-full p-2  py-4">
<div className='ml-2'>
  
  <h6 className='font-semibold'>John Doe</h6>
  <p className='text-sm text-[#7d7d7d]'>How, How are you?</p>
  </div>
  <div>
  <div className='text-sm text-[#7d7d7d] pb-1'>1 day</div>  
<div className='mx-auto border bg-[#1CBF73] text-white  rounded-full w-6'><p className='text-center text-sm'>1</p></div>
  </div> 
    </div>
    </div>
{/* user 5 */}
    <div className='flex justify-start px-2 border-b'>
      <div className='my-auto'>
        <img src={user} alt="" className='border w-12 rounded-full' />
      </div>
  <div className="flex justify-between items-start w-full p-2  py-4">
<div className='ml-2'>
  
  <h6 className='font-semibold'>John Doe</h6>
  <p className='text-sm text-[#7d7d7d]'>How, How are you?</p>
  </div>
  <div>
  <div className='text-sm text-[#7d7d7d] pb-1'>1 day</div>  
<div className='mx-auto border bg-[#1CBF73] text-white  rounded-full w-6'><p className='text-center text-sm'>1</p></div>
  </div> 
    </div>
    </div>

</div>
{/* The actual message box */}
<div className='w-full border'>
<div className='flex justify-between py-3 border-b px-4'>
  <div className='text-3xl'><BiArrowBack /></div>
  <div className='flex justify-center items-center'>
<div className='w-2 h-2 bg-[#1CBF73] rounded-full mr-2'></div>
  <div className='text-xl font-medium'>Johnathon Roberts</div>
  </div>
  <div className='text-3xl'><FaEllipsisH /></div>
</div>

{/* Actual chat */}
<div className='px-3'>

{/* Other recipient */}
 <div className='flex justify-start px-2 py-2'>
<div className='my-auto'>
        <img src={user} alt="" className='w-10 rounded-full' />
      </div>
<div className=' w-full p-3  py-2'>
  <div className='font-medium'>Timothy Divers <span className='text-sm text-[#7d7d7d] ml-2'>Oct 23, 2022, 4:40 PM</span></div>
  <p className='font-normal'>This is a test. This is a test</p>
</div>
</div>

{/* Me */}
 <div className='flex justify-start px-2 py-1'>
<div className='my-auto'>
        <img src={user} alt="" className='w-10 rounded-full' />
      </div>
<div className='w-full p-3  py-2'>
  <div className='font-medium'>Me <span className='text-sm text-[#7d7d7d] ml-2'>Oct 23, 2022, 4:40 PM</span></div>
  <p className='font-normal'>This is a test. This is a test</p>
</div>
</div>
{/* Me */}
 <div className='flex justify-start px-2 py-1'>
<div className='my-auto'>
        <img src={user} alt="" className='border w-10 rounded-full' />
      </div>
<div className='border w-full p-3  py-2'>
  <div className='font-medium'>Me <span className='text-sm text-[#7d7d7d] ml-2'>Oct 23, 2022, 4:40 PM</span></div>
  <p className='font-normal'>This is a test. This is a test</p>
</div>
</div>

{/* Other recipient */}
<div className='flex justify-start px-2 py-1'>
<div className='my-auto'>
        <img src={user} alt="" className='border w-10 rounded-full' />
      </div>
<div className='border w-full p-3  py-2'>
  <div className='font-medium'>Timothy Divers <span className='text-sm text-[#7d7d7d] ml-2'>Oct 23, 2022, 4:40 PM</span></div>
  <p className='font-normal'>This is a test. This is a test</p>
</div>
</div>

{/* Other recipient */}
<div className='flex justify-start px-2 py-1'>
<div className='my-auto'>
        <img src={user} alt="" className='border w-10 rounded-full' />
      </div>
<div className='border w-full p-3  py-2'>
  <div className='font-medium'>Timothy Divers <span className='text-sm text-[#7d7d7d] ml-2'>Oct 23, 2022, 4:40 PM</span></div>
  <p className='font-normal'>This is a test. This is a test</p>
</div>
</div>

</div>

{/* Message box */}
<div className='mt-6 border-t-4 md:flex md:justify-start items-center'>
  <div className='m-4'>
    <textarea name="" id="" cols="100" rows="3" placeholder='Start typing...' className='py-1 px-1 border w-full'></textarea>
  </div>
  <div className='text-right'>
  <button className="bg-[#4335dc] px-5 py-2 rounded mr-4 mb-2 text-white text-sm">
                        Send
                      </button>

  </div>
</div>


</div>
</div>
    </>
  )
  
}

export default Messages