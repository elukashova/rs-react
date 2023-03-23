import styles from './Star.module.css';
import React, { Component } from 'react';

type Props = {
  refObj: React.RefObject<HTMLInputElement>;
  rating: string;
};

class StarRadio extends Component<Props> {
  render() {
    const { refObj, rating } = this.props;
    return (
      <>
        <label className={styles['label-radio']} htmlFor={`radio${rating}`}>
          {rating}
        </label>
        <input
          className={styles.radio}
          ref={refObj}
          type="radio"
          value={rating}
          name="review"
          id={`radio${rating}`}
        />
      </>
    );
  }
}

export default StarRadio;
