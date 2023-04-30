import styles from './Error.module.css';
import React from 'react';

type Props = {
  message?: string;
};

const ValidationError = ({ message }: Props): JSX.Element => {
  return (
    <>
      <div data-testid="error" className={styles['error-wrapper']} data-cy="error">
        <p className={styles.exclamation}>!!!</p>
        <p className={styles.error}>{message}</p>
      </div>
    </>
  );
};

export default ValidationError;
