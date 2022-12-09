import React , { 
    useEffect,
    useState,
} from "react";
import user_image from './user.png'
import axios from "axios";


export default function UserMessageBox({ members , user_id , conversation_id , setInfo }) {
    const id = members.filter(id => id !== user_id)[0];
    const [user, setUser] = useState();
    useEffect(() => {
        const getUserInfo = async () => {
           let token = localStorage.getItem('auth')
           if(!token) {
               return console.log('No token found')
           }
       await axios.get(`/account/details/${id}`, {
           headers: {
               "Authorization": `Bearer ${token}`
           }
       })
       .then(response => {
           console.log(response.data) 
        //    setUser(response.data) 
           if(response.data.result === "0") {
               return console.log("Error fetching data")
           }
       
           console.log(response.data.user ? 'user found' :'user not found');
       
           setUser(response.data.user)
       
           console.log(response.data.user.name, "response data")
           console.log(id, "id", user.name, "user")
       })
        .catch(error => {
           console.log(error)
        })
        }
       
        getUserInfo()
       
       }, [  ])
       console.log(user);
    return (
        <div className='flex justify-start px-2 border-b'
        onClick={() =>{
            setInfo({
                name:`${(user && user.name) ? user.name : 'User'}`,
                conversation_id,
                user_id,
                receiver_id:id,
            })
        }}
        >
            <div className='my-auto'>
                <img src={user_image} alt="" className='border w-12 rounded-full' />
            </div>
            <div className="flex justify-between items-start w-full p-2  py-4">
                <div className='ml-2'>

                    <h6 className='font-semibold'>{user && user.name}</h6>
                    <p className='text-sm text-[#7d7d7d]'>How, How are you?</p>
                </div>
                <div>
                    <div className='text-sm text-[#7d7d7d] pb-1'>1 day</div>
                    <div className='mx-auto border bg-[#1CBF73] text-white  rounded-full w-6'><p className='text-center text-sm'>1</p></div>
                </div>
            </div>
        </div>
    )
}