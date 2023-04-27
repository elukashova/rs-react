import React from 'react';
import styles from './Loader.module.css';

const ProgressIndicator = (): JSX.Element => {
  return (
    <div className={styles.loader} data-testid="loader" data-cy="loader">
      <span className={styles.ball} />
      <span className={styles.ball} />
      <span className={styles.ball} />
      <span className={styles.ball} />
    </div>
  );
};

export default ProgressIndicator;
