import React from 'react';

import Menu from '../../components/menu/Menu';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

import Settings from './Settings';

const AccountSettings = () => {
  return (
    <>
      <Topbar />
      <Menu />
      <div className="mt-8 lg:flex lg:justify-start max-w-[1240px] mx-auto px-7">
        <Sidebar />
        <Settings />
      </div>
    </>
  );
};

export default AccountSettings;
