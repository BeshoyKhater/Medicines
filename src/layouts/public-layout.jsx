import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Footer from '../components/layout/footer/Footer';
import Header from '../components/layout/header/Header';

function PublicLayout({secret}) {
   const isAuthenticated = localStorage.getItem("LoginUser") === "true";
  if(secret && !isAuthenticated){
    return <Navigate to="/login" replace/>
  } else{
  return (
    <>
      <Header />
      <div style={{ minHeight: '63.5vh' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
  }

}

export default PublicLayout;