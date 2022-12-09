import { BsCheckLg } from 'react-icons/bs';
import axios from "axios";


export default function UpgradeCard({ data }){
  const { _id , name , amount , description , duration } = data;
  const packageUpdater = async () =>{
    let token = localStorage.getItem('auth');
    if(!token) return console.log("User not logged in");
    // this function creates an achor tag and sets a virtual click on in
    function open_new_tab(link) {
      window.location.href = `${link}`;
    }
    await axios.post(`/account/upgrade` , {
      subscription_id:_id,
    } , {
      headers:{
        'Authorization':`Bearer ${token}`,
    }
    })
    .then(response => {
      console.log(response.data);
      open_new_tab(response.data.url);
    })
    .catch((error) =>{
      console.log(error);
      console.log("error upgrading user account")
    })
    ;
  }
  
  console.log(amount , name , "from data")
  const days = parseInt(duration) / (3600 * 1000 * 24)
    return (
        <div className="relative my-5 lg:my-0">
                  <div className="border border-[#EAE9E6] rounded-t-xl bg-[#EAE9E6]">
                    <div className="text-center mx-20  mt-10">
                      <h4 className="text-3xl uppercase">{name}</h4>
                      <h5 className="border-b text-lg font-light uppercase py-4">Subscription</h5>
                      <h3 className="text-5xl uppercase">${amount}</h3>
                      <h5 className="text-lg font-light pt-3 uppercase">{days} Days</h5>
                    </div>
                    {/* Triangle */}
                  </div>

                  <div className="absolute w-full">
                    <img className="w-full" src="https://i.imgur.com/QpYe9gi.png" alt="" />
                  </div>
                  <div className="bg-[#FCD129] rounded-b-lg ">
                    <div className="h-44 lg:h-32"></div>
                    <div className=" mx-6 py-1 flex justify-between items-center border-b text-sm">
                      <p>Receive Messages</p>
                      <BsCheckLg />
                    </div>
                    <div className=" mx-6 py-1 flex justify-between items-center border-b text-sm">
                      <p> Send Messages</p>
                      <BsCheckLg />
                    </div>
                    <div className=" mx-6 py-1 flex justify-between items-center border-b text-sm">
                      <p>Post Ad to Network</p>
                      <BsCheckLg />
                    </div>
                    <div className=" mx-6 py-1 flex justify-between items-center border-b text-sm">
                      <p>Free Profile Matching</p>
                      <BsCheckLg />
                    </div>
                    <div className=" mx-6 py-1 flex justify-between items-center border-b text-sm">
                      <p>Unlock 32,000+ Investor Database</p>
                      <BsCheckLg />
                    </div>
                    <div className=" mx-6 py-1 flex justify-between items-center border-b text-sm">
                      <p>View Phone Numbers & URL</p>
                      <BsCheckLg />
                    </div>
                    <div className=" mx-6 py-1 flex justify-between items-center border-b text-sm">
                      <p>Private Account Manager</p>
                      <BsCheckLg />
                    </div>
                    <div className="text-center py-6 ">
                      <button className="bg-[#363636] text-white py-2 px-4 rounded-lg"
                      onClick={packageUpdater}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
    )
}