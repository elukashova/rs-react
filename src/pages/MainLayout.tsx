import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import './MainLayout.styles.css';

class MainLayout extends Component {
  render(): JSX.Element {
    return (
      <>
        <main className="main">
          <Outlet />
        </main>
      </>
    );
  }
}

export default MainLayout;
