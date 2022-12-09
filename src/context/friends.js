import { createContext} from "react";

const FriendsContext = createContext({
    // dealing with the current friends of a user
    friends:[],
    setFriends:() =>{},
    // dealing with requests received by a user
    requests:[],
    setRequests:() =>{},
    favourites:[],
    setFavourites:() =>{},
    notes:[],
    setNotes:() =>{},
});


export default FriendsContext;