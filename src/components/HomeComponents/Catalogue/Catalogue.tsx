import React, { useEffect, useState } from 'react';
import styles from './Catalogue.module.css';
import Card from '../Card/Card';
import Hut from '../Card/Card.types';

type Props = {
  currentHuts: Hut[];
};

const Catalogue = ({ currentHuts }: Props): JSX.Element => {
  const [huts, setHuts] = useState<Hut[]>([]);

  const openModalWindow = (hut: Hut) => {
    console.log('hello');
  };

  useEffect(() => {
    setHuts(currentHuts);
  }, [currentHuts]);

  return (
    <div className={styles.catalogue}>
      {huts &&
        huts.map((item: Hut) => <Card key={item.id} modalCallback={openModalWindow} hut={item} />)}
    </div>
  );
};

export default Catalogue;
