import styles from './Error.module.css';
import React from 'react';
import { Errors } from './Error.consts';

type Props = {
  message?: string;
};

const ValidationError = (props: Props): JSX.Element => {
  const { message } = props;
  return (
    <>
      <div className={styles['error-wrapper']}>
        <p className={styles.exclamation}>!!!</p>
        <p className={styles.error}>{message ?? Errors.required}</p>
      </div>
    </>
  );
};

export default ValidationError;
