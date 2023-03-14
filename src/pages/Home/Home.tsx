import React from 'react';
import Catalogue from '../../components/Catalogue/catalogue';
import SearchBar from '../../components/search-bar/SearchBar';

const HomePage: React.FC = () => {
  return (
    <section className="section">
      <SearchBar />
      <Catalogue />
    </section>
  );
};

export default HomePage;
