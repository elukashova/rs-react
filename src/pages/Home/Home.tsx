import React, { Component } from 'react';
import Catalogue from '../../components/Catalogue/Catalogue';
import SearchBar from '../../components/search-bar/SearchBar';

class HomePage extends Component {
  render() {
    return (
      <section className="section">
        <SearchBar />
        <Catalogue />
      </section>
    );
  }
}

export default HomePage;
