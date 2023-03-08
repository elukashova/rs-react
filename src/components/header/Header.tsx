import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.styles.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1>React App</h1>
        <nav className="menu">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
            to="/"
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
            to="/about"
          >
            About us
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
