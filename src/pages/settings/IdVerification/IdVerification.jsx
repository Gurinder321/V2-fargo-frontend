import React from 'react';

import Menu from '../../../components/menu/Menu';
import Sidebar from '../../../components/sidebar/Sidebar';
import Topbar from '../../../components/topbar/Topbar';

import Verify from './IdVerify';

const IdVerification = () => {
  return (
    <>
      <Topbar />
      <Menu />
      <div className="mt-8 lg:flex lg:justify-between">
        <Sidebar />
        <Verify />
      </div>
    </>
  );
};

export default IdVerification;
