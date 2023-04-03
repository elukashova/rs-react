import React, { SyntheticEvent } from 'react';
import Hut from '../Card/Card.types';
import styles from './Modal.module.css';

type Props = {
  hut: Hut;
  unselectHut: () => void;
};

const Modal = ({ hut, unselectHut }: Props): JSX.Element => {
  const { alt, image, name, altitude, description, province, location } = hut;

  const handleClick = (e: SyntheticEvent) => {
    if (
      e.target instanceof HTMLButtonElement ||
      (e.currentTarget instanceof HTMLDivElement && e.target === e.currentTarget)
    ) {
      unselectHut();
    }
  };

  return (
    <div className={styles.background} data-testid="catalogue-card" onClick={handleClick}>
      <div className={styles.modal}>
        <button type="button" className={styles.btn} onClick={handleClick}></button>
        <div className={styles.wrapper}>
          <img className={styles.image} alt={alt} src={image} />
          <div className={styles.details}>
            <h3 className={styles.hut}>{name}</h3>
            <div className={styles.altitude}>
              <p className={styles.heading}>Altitude:</p> {altitude} mt
            </div>
            <div className={styles.province}>
              <p className={styles.heading}>Province:</p> {province}
            </div>
            <div className={styles.location}>
              <p className={styles.heading}>Location:</p> {location}
            </div>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
