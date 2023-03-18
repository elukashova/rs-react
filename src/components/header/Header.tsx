import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

class Header extends Component<{ title: string }> {
  render(): JSX.Element {
    return (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <h1>{this.props.title}</h1>
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
