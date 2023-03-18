import React, { Component } from 'react';
import Catalogue from '../../components/Catalogue/Catalogue';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from '../MainLayout.module.css';

class HomePage extends Component {
  render() {
    return (
      <section className={styles.section}>
        <SearchBar />
        <Catalogue />
      </section>
    );
  }
}

export default HomePage;
