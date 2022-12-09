import React from 'react';
import MembersList from '../../components/membersList.jsx/MembersList';
import Menu from '../../components/menu/Menu';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import UserRequests from './UserRequests';

const FriendRequests = () => {
  return (
    <>
      <Topbar />
      <Menu />
      <div className="mt-8 lg:flex lg:justify-start max-w-[1240px] mx-auto px-7">
        <Sidebar />
        <UserRequests />
      </div>
    </>
  );
};

export default FriendRequests;
 


