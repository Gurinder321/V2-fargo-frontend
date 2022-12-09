import React from 'react';

import Menu from '../../components/menu/Menu';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

import MyNotes from './MyNotes';

const Friends = () => {
  return (
    <>
      <Topbar />
      <Menu />
      <div className="mt-8 lg:flex lg:justify-center max-w-[1240px] mx-auto px-7">
        <Sidebar />
        <MyNotes />
      </div>
    </>
  );
};

export default Friends;
