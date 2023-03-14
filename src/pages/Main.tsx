import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import './Main.styles.css';

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
