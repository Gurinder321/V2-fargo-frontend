import React , {
  useState ,
  useEffect,
} from 'react';

import shape from "./shape.png"
import shapeHover from "./shape_hover.png"
import UpgradeCard from './UpgradeCard';

import {
  AiOutlineSetting,
  AiFillCaretDown,
  AiOutlineSearch,
  AiTwotoneBulb,
  AiOutlineClose,
  AiOutlineCheckCircle,
  AiTwotonePushpin,
  AiTwotoneTag,
  AiOutlineCloseCircle,
  AiFillCloseCircle,
} from 'react-icons/ai';

import { BsCheckLg, BsTypeH1 } from 'react-icons/bs';

import axios from 'axios';

const Upgrade = () => {
  console.log("first")
  const [ subscriptions , setSubscriptions ] = useState([]);
  const get_subs =  async () =>{
    let token = localStorage.getItem('auth');
    if(!token){
      return console.log(`User is not authenicated`);
    }
    await axios.get(`/subscription` , {
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    .then(response =>{
      setSubscriptions(response.data.subscriptions);
    })
    ;
  }
  useEffect(() =>{
    get_subs();
  } , [])
  return (
    <>
    <div className='w-full'>
         <div className=" lg:m-10 lg:mr-0 lg:ml-4  ">
          {/* FIXME:
           menu navigation  */}
          <div className="flex justify-left items-center bg-[#7867a7] text-white font-normal  text-lg py-2 pl-5 mb-5 lg:mx-0 rounded">
                <AiTwotoneBulb className="mr-3 text-3xl" /> Upgrade your Account! Got Questions? {'  '}
                <span className="font-semibold pl-1"> (929) 297-0333</span>
              </div>
            

             <div className='lg:flex lg:justify-between'>
                {/* tab1 */}
                {(subscriptions && subscriptions.length > 0) && subscriptions.map(( data , index ) =>{
                  console.log(data , "from data loop")
                  return (
                    <UpgradeCard
                    key={index}
                    data={data}
                    />
                  )
                })}
                {/* the card as a component :  */}
                {/* Fetch the susbcriptions : loop over them and then display the from the components */}

                {/* start */}
                {/*  */}
                <div className="relative my-5 lg:my-0">
                 

                  <div className="absolute w-full">
                   <div className='relative'>
     
     {/* <img src={shapeHover} alt="" className='w-full ' /> */}
     <img src={shape} alt="" className='	absolute top-0 left-0 hover: w-full' />

       </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
    
     
    </>
  );
};

export default Upgrade;
