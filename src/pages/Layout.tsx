import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styles from './Layout.module.css';

class Layout extends Component {
  render(): JSX.Element {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
}

export default Layout;
