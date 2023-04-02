import React from 'react';
import styles from './Rating.module.css';

type Props = {
  rating: string;
};

const Rating = ({ rating }: Props): JSX.Element => {
  const ratingAscOrder: number[] = [1, 2, 3, 4, 5];

  const defineClass = (starOrder: number): string => {
    const defaultClass = 'default';
    const userRatingClass = 'ranked';

    if (starOrder <= Number(rating)) {
      return userRatingClass;
    }
    return defaultClass;
  };

  return (
    <div className={styles.rating}>
      Review:
      <div className={styles.stars}>
        {ratingAscOrder.map((ratingNum) => (
          <span
            key={ratingNum}
            data-testid="star"
            className={styles[defineClass(ratingNum)]}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
