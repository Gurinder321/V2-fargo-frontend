import React , {
  useState,
  useEffect,
} from 'react'
import MessageBox from "./messageBox";
import axios from "axios";
import UserMessageBox from './userConversation';
import io from 'socket.io-client';

const socket = io("http://localhost:3600");

const MessagesParent = () => {
  const [ conversations , setConversations ]= useState();
  const [ chatInfo , setChatInfo ] = useState()
  const setInfo = ({ name , conversation_id , user_id , receiver_id  }) =>{
    setChatInfo({
      name,
      conversation_id,
      user_id,
      receiver_id,
    })
  }
  useEffect(() =>{
    const token = localStorage.getItem('auth');
    // if there is no token end function here
    if(!token) return;

    const get_conversations =  async () =>{
      await axios.get(`/conversations/` ,{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      })
      .then( response =>{
        console.log(response.data);
        setConversations(response.data);
      })
      .catch((error) =>{
        console.log(`Error from here \n`, error);
      })
    }
    get_conversations();
  },[]);

  // chat 
  useEffect(() =>{
    socket.on('connect', () => {
      console.log("Hi" , socket.id);
      let token = localStorage.getItem('auth');
      if(!token) return;
      socket.emit('online' , { id : socket.id , token });
    });
    socket.on('disconnect', () => {
      console.log("Hi :disconnected" , socket.id);
      let token = localStorage.getItem('auth');
      if(!token) return;
      socket.emit('offline' , { id : socket.id , token });
    });
  } , []);

  console.log(chatInfo , "info");
  return (
<>

<div className='w-full border md:flex md:justify-center md:items-start'>
<div className=' w-full md:w-80'>
{/* user 1 */}
<div className='text-center text-lg py-3 pt-4 border-b'><h5>All Conversations</h5></div>
 {conversations && conversations.conversations.map(( data , index ) =>{
   console.log(data);
   return (<UserMessageBox key={index}
    members={data.members}
    user_id={conversations.id}
    conversation_id={data._id}
    setInfo={setInfo}
    />)
 })}

</div>
{/* message box comes here */}
<MessageBox
chatInfo={chatInfo}
/>
</div>




    </>
  )
  
}

export default MessagesParent;