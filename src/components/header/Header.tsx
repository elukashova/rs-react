import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { Route, Routes } from 'react-router-dom';
import ROUTES from '../../router/router';
import { RouteConfig } from '../../router/router.types';

class Header extends Component {
  render(): JSX.Element {
    return (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <h1>
            <Routes>
              {ROUTES.subroutes.map(({ key, path, title }: RouteConfig) => {
                return <Route key={key} path={path} element={title} />;
              })}
            </Routes>
          </h1>
          <nav className={styles.menu}>
            <NavLink to="/" end data-testid="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" data-testid="nav-link">
              About us
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
