import React, { 
  useContext,
} from 'react';
import {
  AiTwotoneBulb,
} from 'react-icons/ai';
import FriendsContext from '../../context/friends';
import Favourite from './Favourite';


const FavoritesList = () => {
  const { favourites } = useContext(FriendsContext);

  return (
    <>
         <div>
      <div className=" lg:m-10 lg:ml-0 md:w-full">
          {/* FIXME:
           menu navigation  */}
          <div className="mt-8 lg:flex lg:justify-between">
            <div className=" bg-[#ffffff00]   sm:ml-0 sm: mt-4 lg:ml-4 lg:mt-0">
              {/* search box */}

              {/* purple banner My Website Network */}

              <div className="flex justify-left items-center bg-[#7867a7] text-white font-normal text-lg py-2 pl-5 mb-5 lg:mx-0 rounded">
                <AiTwotoneBulb className="mr-3 text-3xl" /> My Website Network
              </div>

              {/* favourites map */}
              { (!favourites) && <h1>You currently have no one in your favourites list</h1>}
              { (favourites.length === 0) && <h1>You currently have no one in your favourites list</h1>}
              {favourites && favourites.map(( data , index) =>{
                console.log(data , "from fav")
                return (
                  <Favourite
                  key={index}
                  name={data.name}
                  id={data.id}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoritesList;
