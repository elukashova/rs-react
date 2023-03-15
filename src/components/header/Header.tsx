import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.styles.css';

class Header extends Component<{ title: string }> {
  render(): JSX.Element {
    return (
      <header className="header">
        <div className="header__wrapper">
          <h1>{this.props.title}</h1>
          <nav className="menu">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">About us</NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
