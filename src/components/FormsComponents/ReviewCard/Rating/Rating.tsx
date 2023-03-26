import React from 'react';
import styles from './Rating.module.css';

class Rating extends React.Component<{ rating: string }> {
  defineClass(starOrder: number): string {
    const defaultClass = 'default';
    const userRatingClass = 'ranked';

    if (starOrder <= Number(this.props.rating)) {
      return userRatingClass;
    }

    return defaultClass;
  }

  render(): JSX.Element {
    const ratingAscOrder: number[] = [1, 2, 3, 4, 5];
    return (
      <div className={styles.rating}>
        Review:
        <div className={styles.stars}>
          {ratingAscOrder.map((ratingNum) => (
            <span
              key={ratingNum}
              data-testid="star"
              className={styles[this.defineClass(ratingNum)]}
            ></span>
          ))}
        </div>
      </div>
    );
  }
}

export default Rating;
