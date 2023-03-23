import React from 'react';
import { RATINGS } from '../../Form/Form.consts';
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
    return (
      <div className={styles.rating}>
        Review:
        <div className={styles.stars}>
          {RATINGS.map((rating) => (
            <span
              key={rating}
              data-testid="star"
              className={styles[this.defineClass(rating)]}
            ></span>
          ))}
        </div>
      </div>
    );
  }
}

export default Rating;
