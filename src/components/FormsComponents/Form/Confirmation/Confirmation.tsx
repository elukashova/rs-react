import styles from '../Form.module.css';
import React, { Component } from 'react';

class Confirmation extends Component {
  render(): JSX.Element {
    return (
      <div>
        <p className={styles.confirmation}>Your review has been successfully submitted!</p>
      </div>
    );
  }
}

export default Confirmation;
