import styles from './Star.module.css';
import React, { Component } from 'react';

type Props = {
  reference: React.RefObject<HTMLInputElement>;
  rating: string;
};

class StarRadio extends Component<Props> {
  render() {
    const { reference, rating } = this.props;
    return (
      <>
        <label className={styles['label-radio']} htmlFor={`radio${rating}`}>
          {rating}
        </label>
        <input
          className={styles.radio}
          ref={reference}
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
