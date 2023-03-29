import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import './Header.styles.css';
import { Route, Routes } from 'react-router-dom';
import ROUTES from '../../utils/router/router';
import { RouteConfig } from '../../utils/router/router.types';

const Header = (): JSX.Element => {
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
        <nav className="menu">
          <NavLink to="/" end data-testid="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" data-testid="nav-link">
            About us
          </NavLink>
          <NavLink to="/forms" data-testid="nav-link">
            Forms
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
