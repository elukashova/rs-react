import React, { useState } from 'react';
import Catalogue from '../../components/HomeComponents/Catalogue/Catalogue';
import SearchBar from '../../components/HomeComponents/SearchBar/SearchBar';
import styles from '../Layout.module.css';

const HomePage = (): JSX.Element => {
  const [query, setQuery] = useState<string>(localStorage.getItem('inputValue') || '');

  const filterByQuery = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <section className={styles.section}>
      <SearchBar filterHuts={filterByQuery} query={query} />
      <Catalogue query={query} />
    </section>
  );
};

export default HomePage;
