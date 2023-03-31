import styles from './Error.module.css';
import React from 'react';

type Props = {
  message?: string;
};

const ValidationError = ({ message }: Props): JSX.Element => {
  return (
    <>
      <div className={styles['error-wrapper']}>
        <p className={styles.exclamation}>!!!</p>
        <p className={styles.error}>{message}</p>
      </div>
    </>
  );
};

export default ValidationError;
