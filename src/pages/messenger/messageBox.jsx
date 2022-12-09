import React , { useState , useEffect } from "react";
import { FaEllipsisH } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';
import NoUser from "./NoUserSelected";
import axios from "axios";
import TextBox from "./textBox";

export default function MessageBox({ chatInfo }) {
    const [ chats , setChats ] = useState([]);
    useEffect(() =>{
        const get_messages = async () =>{
            if(!chatInfo) return;
            let token = localStorage.getItem('auth');
            if(!token) return console.log("User not authenicated");
            await axios.get(`/message/${chatInfo.conversation_id}` ,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            })
            .then( response =>{
                console.log(response.data , "response");
                console.log(response.data.messages , "messages");
                setChats(response.data.messages , "messages");
            })
            .catch(error =>{
                console.log(error , "error");;
            });
        }
        get_messages();
    } ,[ chatInfo ]);
    console.log(chats , "chats");
    if(!chatInfo) {
        return <NoUser />
    }
    const { name , conversation_id , user_id , receiver_id } = chatInfo;
    async function sendText(event){
        event.preventDefault();
        let token = localStorage.getItem("auth");
        //
        if(!token) return;
        await axios.post(`/message/` , {
            text:event.target.text.value,
            conversation_id,
        } , {
            headers:{
                'Authorization':`Bearer ${token}`,
            }
        })
        .then( response =>{
            console.log(response.data);
            if(response.data.result == 0){
                return;
            }
            event.target.reset();
        })
        .catch(error =>{
            console.log(error);
        })
        console.log(event.target.text.value)
    }
    return (
        <>
         <div className = 'w-full border' >
            <div className='flex justify-between py-3 border-b px-4'>
                <div className='text-3xl'><BiArrowBack /></div>
                <div className='flex justify-center items-center'>
                    <div className='w-2 h-2 bg-[#1CBF73] rounded-full mr-2'></div>
                    <div className='text-xl font-medium'>{name}</div>
                </div>
                <div className='text-3xl'><FaEllipsisH /></div>
            </div>

    {/* Actual chat */ }
    <div className='px-3'>

        { (chats.length > 0) && Array.from(chats).map( ( data , index ) =>{
            console.log(data);
            return <TextBox
            key={index}
            text={data.text}
            createdAt={data.createdAt}
            sender={data.sender}
            chat_id={data._id}
            sender_name={name}
            />
        })}


    </div>

    {/* Message box */ }
    <form className='mt-6 border-t-4 md:flex md:justify-start items-center'
    onSubmit={sendText}
    >
        <div className='m-4'>
            <textarea name="text" cols="100" rows="3" placeholder='Start typing...' className='py-1 px-1 border w-full'></textarea>
        </div>
        <div className='text-right'>
            <button className="bg-[#4335dc] px-5 py-2 rounded mr-4 mb-2 text-white text-sm"
            type="submit"
            >
                Send
            </button>

        </div>
    </form>
    </div>
    </>
    )
}