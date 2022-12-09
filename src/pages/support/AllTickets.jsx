import axios from 'axios';
import { useState , useEffect } from 'react';

import Ticket from './ticket';

const AllTickets = () => {
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [ tickets , setTickets ] = useState([]);
  async function getTickets(){
    let token = localStorage.getItem('auth');
    if(!token) return console.log("No token found");
    await axios.get('/tickets' ,{
      headers:{
        'Authorization':`Bearer ${token}`,
      }
    })
    .then(response =>{
      console.log(response.data)
      setTickets([ ...response.data.tickets ]);
    })
    .catch((error) =>{
      console.log(error , "error getting tickets");
    })
  }
  useEffect(() =>{
    getTickets();
  } ,[]);
  // raise ticket function
  async function raiseTicket(event){
    event.preventDefault();
    let token = localStorage.getItem('auth');
    if(!token) return console.log("No token found");
    const { title , ticket } = event.target;
    await axios.post('/tickets/create' , {
      ticket: ticket.value.trim(),
      title:title.value.trim(),
    } , {
      headers:{
        'Authorization':`Bearer ${token}`,
      }
    })
    .then((response) =>{
      event.target.reset();
      const new_tickets = [ ...tickets , response.data.ticket];
      setTickets(new_tickets);
      setIsSupportOpen(false);
    })
    .catch((error) =>{
      console.log(error , "error submitting ticket");
    })
  }

  return (
    <>
      {/* FIXME: Center h4 and button */}
 
      <div className="lg:mt-9 lg:w-full">
        <div className="flex justify-between items-end">
          <h4 className="text-2xl">All Tickets</h4>

          <div className="bg-[#28a745] px-3 py-2 rounded mt-3 text-white text-xs">
            <button
              onClick={() => setIsSupportOpen((prev) => !prev)}
              className={isSupportOpen ? 'bg-[#28a776]' : 'bg-[#28a745]'}
            >
              {isSupportOpen ? 'Close' : 'New Ticket'}
            </button>
          </div>
        </div>

        {/* Form to submit ticket */}

        <div className="border-2 rounded mt-4">
          <div className={isSupportOpen ? 'visible' : 'hidden'}>
            <form
            onSubmit={raiseTicket}
            >
              <div className="m-1">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className=" text-gray-base w-full mr-3 py-5 px-2 h-2 border border-gray-primary rounded"
                />
              </div>
              <div className="m-1">
                <textarea
                  name="ticket"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className=" text-gray-base w-full mr-3 py-2 px-2 h-40 border border-gray-primary rounded "
                ></textarea>
              </div>
              <div className="text-right m-1">
                <input
                  type="submit"
                  value="Submit"
                  className="bg-[#19A1B8] px-3 py-2 rounded  text-white text-sm"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Loop throught the tickets */}
        { (tickets && tickets.length === 0) && <h1>You have no ticket raised</h1>}
        { (tickets && tickets.length > 0) && tickets.map((data , index) =>{
          console.log(data , "data");
          return <Ticket
          seen={data.seen}
          title={data.title}
          ticket={data.ticket}
          id={data._id}
          key={index}
          createdOn={data.createdAt}
          />
        })}
        
      </div>
    </>
  );
};

export default AllTickets;
