import React from 'react';
import Review from './ReviewCard.types';
import styles from './ReviewCard.module.css';
import Rating from './Rating/Rating';

class ReviewCard extends React.Component<Review> {
  render(): JSX.Element {
    const { image, name, hut, arrival, departure, rating } = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.user}>
          <img className={styles.image} alt="user avatar" src={image} />
          <p className={styles.name}>{name}</p>
        </div>
        <div className={styles.review}>
          <p className={styles.hut}>{hut}</p>
          <p className={styles.stay}>
            {arrival} - {departure}
          </p>
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

export default ReviewCard;
