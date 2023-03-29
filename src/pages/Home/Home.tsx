import React, { Component } from 'react';
import Catalogue from '../../components/HomeComponents/Catalogue/Catalogue';
import SearchBar from '../../components/HomeComponents/SearchBar/SearchBar';
import styles from '../Layout.module.css';

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
