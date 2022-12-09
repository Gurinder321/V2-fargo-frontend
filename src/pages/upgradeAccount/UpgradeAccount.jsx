import React from 'react';

import Menu from '../../components/menu/Menu';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

import Upgrade from './Upgrade';

const UpgradeAccount = () => {
  return (
    <>
      <Topbar />
      <Menu />
      <div className="mt-8 lg:flex lg:justify-start max-w-[1240px] mx-auto px-7">
        <Sidebar />
        <Upgrade />
      </div>
    </>
  );
};

export default UpgradeAccount;
