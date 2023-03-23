import React from 'react';
import Review from './ReviewCard.types';
import styles from './ReviewCard.module.css';
import Rating from './Rating/Rating';
import PrivacyConsent from './Privacy/Privacy';

class ReviewCard extends React.Component<Review> {
  formatDate(date: string): string {
    return `${new Date(date).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })}`;
  }

  render(): JSX.Element {
    const { image, name, hut, arrival, departure, rating } = this.props;
    console.log(rating);
    return (
      <div className={styles.card}>
        <div className={styles.user}>
          <img className={styles.image} alt="user avatar" src={image} />
          <div className={styles.info}>
            <p className={styles.name}>{name}</p>
            <PrivacyConsent />
          </div>
        </div>
        <div className={styles.review}>
          <div className={styles.hut}>
            <p className={styles.heading}>Hut:</p> {hut}
          </div>
          <div className={styles.stay}>
            <p className={styles.heading}>Travel period:</p> {this.formatDate(arrival)} -{' '}
            {this.formatDate(departure)}
          </div>
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

export default ReviewCard;
