import React, { Component } from 'react';
import styles from '../MainLayout.module.css';

class NotFoundPage extends Component {
  render(): JSX.Element {
    return <section className={styles.section}>Page not found</section>;
  }
}

export default NotFoundPage;
