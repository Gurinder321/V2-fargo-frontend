import { useEffect , useContext } from 'react';
import Menu from '../../components/menu/Menu';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import FavoritesList from './FavoritesList';
import axios from 'axios';
import FriendsContext from '../../context/friends';

const FriendRequests = () => {

  const { setFavourites , favourites} = useContext(FriendsContext);
  async function getFavourites(){
    let token = localStorage.getItem('auth');
    if(!token) return alert("Could not make the request");
    await axios.get(`/account/favourites` , {
      headers:{
        'Authorization':`Bearer ${token}`,
      },
    })
    .then(response =>{
      console.log(response);
      if(response.data.result != 1){
        console.log("Could not get favourites");
        return setFavourites([]);
      }
      // add to the favourites context
      setFavourites([ ...response.data.favourites ]);
    })
    .catch(error =>{
      console.log("error adding user to favourites");
      console.log(error)
      return setFavourites([]);
    })
  }
  useEffect(() =>{
    getFavourites();
  } , []);
  return (
    <>
      <Topbar />
      <Menu />
      <div className="mt-8 lg:flex lg:justify-center max-w-[1240px] mx-auto px-7">
        <Sidebar />
        <FavoritesList />
      </div>
    </>
  );
};

export default FriendRequests;
