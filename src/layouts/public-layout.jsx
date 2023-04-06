import React from 'react';
import { Route, Outlet } from 'react-router-dom';
import Footer from '../components/layout/footer/Footer';
import Header from '../components/layout/header/Header';

function PublicLayout() {
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

export default PublicLayout;