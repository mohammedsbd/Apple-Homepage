import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom';
function SharedComponenet() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedComponenet
