import React, { useEffect, useState } from 'react';
import Hut from '../../components/HomeComponents/Card/Card.types';
import Catalogue from '../../components/HomeComponents/Catalogue/Catalogue';
import ProgressIndicator from '../../components/HomeComponents/Loader/Loader';
import SearchBar from '../../components/HomeComponents/SearchBar/SearchBar';
import { API_PATH } from '../../utils/consts';
import styles from '../Layout.module.css';

const HomePage = (): JSX.Element => {
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const [huts, setHuts] = useState<Hut[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const filterByQuery = (filteredHuts: Hut[]) => {
    setLoading(true);
    setTimeout(() => {
      setHuts(filteredHuts);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (firstLoad) {
      setLoading(true);
      setTimeout(() => {
        fetch(API_PATH)
          .then((response: Response) => response.json())
          .then((hutsData: Hut[]) => {
            setHuts(hutsData);
            setLoading(false);
          });
        setFirstLoad(false);
      }, 1000);
    }
  }, [firstLoad]);

  return (
    <section className={styles.section}>
      <SearchBar filterHuts={filterByQuery} />
      {loading && <ProgressIndicator />}
      {!loading && <Catalogue currentHuts={huts} />}
    </section>
  );
};

export default HomePage;
