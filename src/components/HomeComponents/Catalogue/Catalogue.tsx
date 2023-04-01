import React, { useEffect, useState } from 'react';
import styles from './Catalogue.module.css';
import Card from '../Card/Card';
import Hut from '../Card/Card.types';
import { API_PATH } from '../../../utils/consts';

const Catalogue = (): JSX.Element => {
  const [huts, setHuts] = useState<Hut[]>([]);

  useEffect(() => {
    fetch(API_PATH)
      .then((response: Response) => response.json())
      .then((hutsData: Hut[]) => {
        setHuts(hutsData);
      });
  }, []);

  const openModalWindow = (hut: Hut) => {
    console.log('hello');
  };

  return (
    <div className={styles.catalogue}>
      {huts &&
        huts.map((item: Hut) => <Card key={item.id} modalCallback={openModalWindow} hut={item} />)}
    </div>
  );
};

export default Catalogue;
