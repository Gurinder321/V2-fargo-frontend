import { useState } from "react";
import { MdAddCircle } from 'react-icons/md';

export default function Ticket({ seen , title , ticket , id , createdOn }){
  const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <div className="border-2 rounded mt-4">
          {/* Accordian header and body */}
          <div>
            {/* Header */}
            <div
              className=" px-2 py-3 flex justify-between items-center border-b cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <div className="flex justify-left items-center">
                <MdAddCircle className="text-[#0040ff] text-2xl border-2 border-[#aaaaaa] rounded-xl mr-2" />
                <p>Ticket id : {id}</p>
              </div>
              <p>{Date(createdOn)}</p>
            </div>
            {/* Body */}

            <div className={isOpen ? 'visible' : 'hidden'}>
              <div className="mx-3 mt-3 ">
                <div>
                  <div className="pb-2 font-bold border-b">
                    Status:{' '}
                    <span className="bg-[#ffc107] p-1 font-semibold text-sm rounded ">
                      {seen ? "Seen" : "Not seen"}
                    </span>
                  </div>
                  <div className="font-bold py-1 border-b">
                    Title: <span className="font-normal">{title}</span>
                  </div>
                </div>
                <div className="py-1">
                  <p className="pb-2">
                    <span className="font-bold ">Message: </span>
                    <span>
                      {ticket}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}