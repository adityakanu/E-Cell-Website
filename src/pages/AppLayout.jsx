import React from 'react';
import Navbar from '../pages/Navbar';

import { Outlet, useLocation } from 'react-router-dom';

export default function AppLayout() {

  return (
    <>
     
      <Navbar />
      <Outlet />
    </>
  );
}
