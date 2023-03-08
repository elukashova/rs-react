import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export default Main;
