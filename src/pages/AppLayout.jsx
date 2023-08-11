import React from 'react';
import Navbar from '../pages/Navbar';
import Home from '../pages/Home';
import { Outlet, useLocation } from 'react-router-dom';

export default function AppLayout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      {location.pathname !== '/' && <Home />}
      <Outlet />
    </>
  );
}
