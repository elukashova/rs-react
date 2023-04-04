import React, { SyntheticEvent, useEffect, useState } from 'react';
import { API_PATH, ID_QUERY } from '../../../utils/consts';
import Hut from '../Card/Card.types';
import styles from './Modal.module.css';

type Props = {
  hutId: string;
  unselectHut: () => void;
};

const Modal = ({ hutId, unselectHut }: Props): JSX.Element => {
  const [hut, setHut] = useState<Hut | null>(null);

  useEffect(() => {
    fetch(`${API_PATH}${ID_QUERY}${hutId}`)
      .then((response: Response) => response.json())
      .then((result: Hut[]) => setHut(result[0]));
  });

  const handleClick = (e: SyntheticEvent) => {
    if (
      e.target instanceof HTMLButtonElement ||
      (e.currentTarget instanceof HTMLDivElement && e.target === e.currentTarget)
    ) {
      unselectHut();
    }
  };

  return (
    <>
      {hut && (
        <div className={styles.background} onClick={handleClick}>
          <div className={styles.modal}>
            <button type="button" className={styles.btn} onClick={handleClick}></button>
            <div className={styles.wrapper}>
              <img className={styles.image} alt={hut.alt} src={hut.image} />
              <div className={styles.details}>
                <h3 className={styles.hut}>{hut.name}</h3>
                <div className={styles.altitude}>
                  <p className={styles.heading}>Altitude:</p> {hut.altitude} mt
                </div>
                <div className={styles.province}>
                  <p className={styles.heading}>Province:</p> {hut.province}
                </div>
                <div className={styles.location}>
                  <p className={styles.heading}>Location:</p> {hut.location}
                </div>
                <p className={styles.description}>{hut.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
