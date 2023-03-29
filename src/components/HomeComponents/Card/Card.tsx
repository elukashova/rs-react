import React from 'react';
import ButtonDetails from './Buttons/ButtonDetails/ButtonDetails';
import ButtonFavorite from './Buttons/ButtonFavorite/ButtonFavorite';
import Hut from './Card.types';
import styles from './Card.module.css';

class Card extends React.Component<Hut> {
  render(): JSX.Element {
    return (
      <div className={styles.card} data-testid="catalogue-card">
        <img className={styles.image} alt={this.props.alt} src={this.props.image} />
        <div className={styles.bottom}>
          <p className={styles.name}>{this.props.name}</p>
          <p className={styles.location}>{this.props.location}</p>
          <div className={styles['info-bottom']}>
            <p className={styles.province}>{this.props.province}</p>
            <p className={styles.altitude}>{this.props.altitude} mt</p>
          </div>
          <div className={styles.description}>{this.props.description}</div>
          <div className={styles.buttons}>
            <ButtonFavorite />
            <ButtonDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
