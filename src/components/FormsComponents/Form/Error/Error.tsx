import styles from './Error.module.css';
import React, { Component } from 'react';

class ValidationError extends Component<{ message: string }> {
  render(): JSX.Element {
    const { message } = this.props;
    return (
      <>
        <div className={styles['error-wrapper']}>
          <p className={styles.exclamation}>!!!</p>
          <p className={styles.error}>{message}</p>
        </div>
      </>
    );
  }
}

export default ValidationError;
