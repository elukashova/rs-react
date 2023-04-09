import React, { useEffect, useState } from 'react';
import styles from './Catalogue.module.css';
import Card from '../Card/Card';
import Hut from '../Card/Card.types';
import Modal from '../Modal/Modal';
import { API_PATH, SEARCH_QUERY } from '../../../utils/consts';
import ProgressIndicator from '../Loader/Loader';

type Props = {
  query?: string;
};

const Catalogue = ({ query }: Props): JSX.Element => {
  const [huts, setHuts] = useState<Hut[]>([]);
  const [selectedHut, setSelectedHut] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const openModalWindow = (hutId: string): void => {
    setSelectedHut(hutId);
  };

  const unselectHut = (): void => {
    setSelectedHut(null);
  };

  useEffect(() => {
    setLoading(true);
    const requestUrl = query ? `${API_PATH}${SEARCH_QUERY}${query}` : API_PATH;
    fetch(requestUrl)
      .then((response: Response) => response.json())
      .then((hutsData: Hut[]) => {
        setHuts(hutsData);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className={styles.wrapper}>
      {loading && <ProgressIndicator />}
      {!loading && (
        <div className={styles.catalogue}>
          {huts.length > 0 &&
            huts.map((item: Hut) => (
              <Card key={item.id} modalCallback={openModalWindow} hut={item} />
            ))}
          {huts.length === 0 && <p className={styles.error}>No data found</p>}
          {selectedHut && <Modal hutId={selectedHut} unselectHut={unselectHut} />}
        </div>
      )}
    </div>
  );
};

export default Catalogue;
