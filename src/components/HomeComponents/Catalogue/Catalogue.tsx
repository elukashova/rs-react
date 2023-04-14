import React from 'react';
import styles from './Catalogue.module.css';
import Card from '../Card/Card';
import Hut from '../Card/Card.types';
import { RootState } from '../../../store/store';
import { useAppSelector } from '../../../store/hooks';

const Catalogue = (): JSX.Element => {
  const huts: Hut[] = useAppSelector((state: RootState) => state.cards.huts);

  const openModalWindow = (hutId: string): void => {
    console.log(hutId);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.catalogue}>
        {huts.length > 0 &&
          huts.map((item: Hut) => (
            <Card key={item.id} modalCallback={openModalWindow} hut={item} />
          ))}
      </div>
    </div>
  );
};

export default Catalogue;
