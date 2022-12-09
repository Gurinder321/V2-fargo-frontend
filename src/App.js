import { useState , useEffect } from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Home from './pages/home/Home';

import Login from './pages/login/Login';

import Register from './pages/register/Register';

// import Messenger from './pages/messenger/Messenger';
import Messenger from './pages/messengerChat/MessengerPage';
import Landing from './pages/index/Index';
import Contact from './components/contact/Contact';
import Privacy from './pages/privacy/Privacy';
import Terms from './pages/terms/Terms';

import FriendRequests from './pages/friendRequests/FriendRequests';
import Favorites from './pages/favorites/Favorites';
import Friends from './pages/friends/Friends';
import Notes from './pages/notes/Notes';
import Support from './pages/support/Support';
import ViewMyAd from './pages/viewMyAd/ViewMyAd';
import AccountSettings from './pages/settings/AccountSettings';
import Verification from './pages/settings/verification/Verification';
import IdVerification from './pages/settings/IdVerification/IdVerification';
import UpgradeAccount from './pages/upgradeAccount/UpgradeAccount';
import RegisterStep1 from './pages/register/registersteps/RegisterStep1';
import RegisterStep2 from './pages/register/registersteps/RegisterStep2';
import RegisterStep3 from './pages/register/registersteps/RegisterStep3';

// admin
import AdminLogin from './admin/pages/login/Login';
import AdminDashboard from './admin/pages/dashboard/Dashboard';
import AdminUsers from './admin/pages/allUsers/AllUsers';
import MessagesAdmin from './admin/pages/messages';

// contexts
import FriendsContext from './context/friends';
import axios from 'axios';
import MessagesParent from './pages/messenger/Messages';



function App() {
const token = localStorage.getItem('auth');
const [ friends , setFriends ] = useState([]);
const [ requests , setRequests ] = useState([]);
const [ favourites , setFavourites ] = useState([]);
const [ notes , setNotes ] = useState([]);

// get favourites
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

const getRequests = async () =>{
  let token = localStorage.getItem('auth');
  if(!token) return console.log(`User not logged in`);
  await axios.get(`/account/requests` , {
    headers:{
      'Authorization':`Bearer ${token}`,
    }
  })
  .then( response =>{
    console.log(response.data); 
    if(response.data.result === "0"){
      return console.log("Unable to fetch all users");
    }
    setRequests(response.data.requests);
  })
  .catch(() =>{
    console.log(`Error fetching all the users`)
  })
}

const getFriends = async () => {
  let token = localStorage.getItem("auth");
  if (!token) return console.log(`You are not authorized for this project`);
  await axios
    .get(`/account/friends`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response);
      setFriends(response.data.friends);
      console.log(friends , "friends");
    })
    .catch((error) => {
      console.log(error, "from fetching all users");
    });
};

const getNotes = async () => {
  let token = localStorage.getItem("auth");
  if (!token) return console.log(`You are not authorized for this project`);
  await axios
    .get(`/account/notes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response);
      setNotes(response.data.notes);
      console.log(notes , "notes");
    })
    .catch((error) => {
      console.log(error, "from fetching all notes");
    });
};

useEffect(() =>{
  getFavourites();
  getRequests();
  getFriends();
  getNotes();
} ,[])


  return (
    <FriendsContext.Provider
    value={{
      friends,
      setFriends,
      requests,
      setRequests,
      favourites,
      setFavourites,
      notes,
      setNotes,
    }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Routes>
          <Route path="/privacy" element={<Privacy />}></Route>
        </Routes>
        <Routes>
          <Route path="/terms" element={<Terms />}></Route>
        </Routes>
        <Routes>
          <Route path="/network" element={token ? <Home /> : <Login />}></Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>

        <Routes>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Routes>
          <Route path="/register1" element={<RegisterStep1 />}></Route>
        </Routes>
        <Routes>
          <Route path="/register2" element={<RegisterStep2 />}></Route>
        </Routes>
        <Routes>
          <Route path="/register3" element={<RegisterStep3 />}></Route>
        </Routes>

        <Routes>
          {/* <Route path="/messenger" element={token ? <Messenger /> : <Login />}></Route> */}
          <Route path="/messenger" element={token ? <MessagesParent /> : <Login />}></Route>
        </Routes>
        <Routes>
          <Route path="/requests" element={<FriendRequests />}></Route>
        </Routes>
        <Routes>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
        <Routes>
          <Route path="/viewmyad" element={<ViewMyAd />}></Route>
        </Routes>
        <Routes>
          <Route path="/upgrade" element={<UpgradeAccount />}></Route>
        </Routes>
        <Routes>
          <Route path="/settings" element={<AccountSettings />}></Route>
        </Routes>
        <Routes>
          <Route path="/verify" element={<Verification />}></Route>
        </Routes>
        <Routes>
          <Route path="/idverify" element={<IdVerification />}></Route>
        </Routes>
        <Routes>
          <Route path="/support" element={<Support />}></Route>
        </Routes>
        <Routes>
          <Route path="/friends" element={<Friends />}></Route>
        </Routes>
        <Routes>
          <Route path="/notes" element={<Notes />}></Route>
        </Routes>
        {/* admin */}
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />}></Route>
        </Routes>
        <Routes>
          <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
        </Routes>
        <Routes>
          <Route path="/admin/all" element={<AdminUsers />}></Route>
        </Routes>
        <Routes>
          <Route path="/admin/messages" element={<MessagesAdmin />}></Route>
        </Routes>


      </Router>
    </FriendsContext.Provider>
  );
}

export default App;
