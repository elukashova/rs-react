import React from 'react';
import Form from '../../components/FormsComponents/Form/Form';
import ReviewsList from '../../components/FormsComponents/ReviewsList/ReviewsList';
import styles from '../Layout.module.css';

const FormsPage = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Leave your review</h2>
      <Form />
      <ReviewsList />
    </section>
  );
};

export default FormsPage;
