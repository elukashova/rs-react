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
    return (
      <div className={styles.rating}>
        <span className={styles[this.defineClass(1)]}></span>
        <span className={styles[this.defineClass(2)]}></span>
        <span className={styles[this.defineClass(3)]}></span>
        <span className={styles[this.defineClass(4)]}></span>
        <span className={styles[this.defineClass(5)]}></span>
      </div>
    );
  }
}

export default Rating;
