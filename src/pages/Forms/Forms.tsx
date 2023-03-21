import React, { Component } from 'react';
import Form from '../../components/Form/Form';
import styles from '../Layout.module.css';

class FormsPage extends Component {
  render() {
    return (
      <section className={styles.section}>
        <h2 className={styles.title}>Leave your review</h2>
        <Form />
      </section>
    );
  }
}

export default FormsPage;
