import styles from './Error.module.css';
import React, { Component } from 'react';
import { Errors, Messages } from './Error.consts';

class ValidationError extends Component<{ error?: string }> {
  defineErrorMessage(error?: string): string {
    const errorMessage =
      error === Errors.name
        ? `${Messages.name}`
        : error === Errors.image
        ? `${Messages.avatar}`
        : error === Errors.date
        ? `${Messages.date}`
        : error === Errors.early
        ? `${Messages.departure}`
        : `${Messages.required}`;

    return errorMessage;
  }

  render(): JSX.Element {
    const { error } = this.props;
    return (
      <>
        <div className={styles['error-wrapper']}>
          <p className={styles.exclamation}>!!!</p>
          <p className={styles.error}>{this.defineErrorMessage(error)}</p>
        </div>
      </>
    );
  }
}

export default ValidationError;
