import { useState } from "react";
import axios from "axios";



export default function TextData({ textData , setUndelivered , undelivered  }){
    const [ text , setText ] = useState(textData.text);
    async function UpdateText({
        updated_text,
        text_id,
    }){
        let tkn = localStorage.getItem('auth_admin');
        if(!tkn) return console.log("Not logged in");
        await axios.patch(`/admin/text` , {
            updated_text,
            text_id,
        } , {
            'Authorization':`Bearer ${tkn}`,
        })
        .then((response) =>{
            // update data
            console.log("Response from update message");
            console.log(response);
            if(response.data.result != 1){
                return console.log("Unable to update message");
            }
            const new_messages = undelivered.filter((message) => message._id != textData._id);
            // update the new undelivered messages list
            setUndelivered([...new_messages]);
        })
        .catch((error) =>{
            console.log("Error updating undelivered text");
        })
    }
    return (
        <div>
            <form
            onSubmit={async (e) =>{
                e.preventDefault();
                await UpdateText({
                    updated_text:text,
                    text_id:textData._id,
                })
            }}
            >
                <input type="text"
                disabled={true}
                value={`Sender id is ${textData.sender}`}
                />
                <input type="text"
                disabled={true}
                value={`Conversation id is ${textData.conversationId}`}
                />
                <input type="text" value={text}
                onChange={e => setText(e.target.value)}
                />
                <input type="submit" value="Set As Delivered" />
            </form>
        </div>
    )
}