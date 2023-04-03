import React, { useEffect, useState } from 'react';
import Hut from '../../components/HomeComponents/Card/Card.types';
import Catalogue from '../../components/HomeComponents/Catalogue/Catalogue';
import SearchBar from '../../components/HomeComponents/SearchBar/SearchBar';
import { API_PATH } from '../../utils/consts';
import styles from '../Layout.module.css';

const HomePage = (): JSX.Element => {
  const [huts, setHuts] = useState<Hut[]>([]);

  const filterByQuery = (filteredHuts: Hut[]) => {
    setHuts(filteredHuts);
  };

  useEffect(() => {
    fetch(API_PATH)
      .then((response: Response) => response.json())
      .then((hutsData: Hut[]) => {
        setHuts(hutsData);
      });
  }, []);

  return (
    <section className={styles.section}>
      <SearchBar filterHuts={filterByQuery} />
      <Catalogue currentHuts={huts} />
    </section>
  );
};

export default HomePage;
