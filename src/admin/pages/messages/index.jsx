import { useState , useEffect } from "react";
import axios from "axios";
import TextData from "./text";
import { Link } from "react-router-dom";


export default function MessagesAdmin(){
    const [ undelivered , setUndelivered ] = useState([]);
    async function getUnDelivered(){
        let tkn = localStorage.getItem('auth_admin');
        if(!tkn) return console.log("Not logged in");
        await axios.get(`/admin/undelivered_texts` , {
            headers:{
                'Authorization':`Bearer ${tkn}`,
            }
        })
        .then( response =>{
            console.log("Response from undelivered messages api");
            console.log(response);
            setUndelivered(response.data.messages);

        })
        .catch(error =>{
            console.log("Error while fetching undelivered messages");
            console.log(error);
        })
    }
    useEffect(() =>{
        // invoke the function
        getUnDelivered();
    } ,[]);
    // fetch the messages
    let tkn = localStorage.getItem('auth_admin');
    if(!tkn) return <h1>You are not logged in <br/>
    <Link
    to={"/admin/login"}
    >Go To Login</Link>

  </h1>
    return (
        <div>
            {(undelivered && undelivered.length == 0) && <h1>No Messages from free to pro users</h1>}
            { undelivered && undelivered.map(( textData , index) =>{
                return <TextData
                textData={textData}
                key={index}
                undelivered={undelivered}
                setUndelivered={setUndelivered}
                />
            })}
        </div>
    )
}