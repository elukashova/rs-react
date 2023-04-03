import React, { useEffect, useState } from 'react';
import styles from './Catalogue.module.css';
import Card from '../Card/Card';
import Hut from '../Card/Card.types';
import Modal from '../Modal/Modal';

type Props = {
  currentHuts: Hut[];
};

const Catalogue = ({ currentHuts }: Props): JSX.Element => {
  const [huts, setHuts] = useState<Hut[]>([]);
  const [selectedHut, setSelectedHut] = useState<Hut | null>(null);

  const openModalWindow = (hut: Hut): void => {
    setSelectedHut(hut);
  };

  const unselectHut = (): void => {
    setSelectedHut(null);
  };

  useEffect(() => {
    setHuts(currentHuts);
  }, [currentHuts]);

  return (
    <div className={styles.catalogue}>
      {huts &&
        huts.map((item: Hut) => <Card key={item.id} modalCallback={openModalWindow} hut={item} />)}
      {selectedHut && <Modal hut={selectedHut} unselectHut={unselectHut} />}
    </div>
  );
};

export default Catalogue;
