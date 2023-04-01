import React from 'react';
import ButtonDetails from './Buttons/ButtonDetails/ButtonDetails';
import ButtonFavorite from './Buttons/ButtonFavorite/ButtonFavorite';
import Hut from './Card.types';
import styles from './Card.module.css';

type Props = {
  hut: Hut;
  modalCallback: (hut: Hut) => void;
};

const Card = (props: Props): JSX.Element => {
  const { hut, modalCallback } = props;
  const { alt, image, name, location, province, altitude, description } = hut;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    modalCallback(hut);
  };

  return (
    <div className={styles.card} data-testid="catalogue-card" onClick={handleClick}>
      <img className={styles.image} alt={alt} src={image} />
      <div className={styles.bottom}>
        <p className={styles.name}>{name}</p>
        <p className={styles.location}>{location}</p>
        <div className={styles['info-bottom']}>
          <p className={styles.province}>{province}</p>
          <p className={styles.altitude}>{altitude} mt</p>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.buttons}>
          <ButtonFavorite />
          <ButtonDetails />
        </div>
      </div>
    </div>
  );
};

export default Card;
