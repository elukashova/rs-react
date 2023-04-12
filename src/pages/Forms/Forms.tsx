import React, { useState } from 'react';
import Form from '../../components/FormsComponents/Form/Form';
import Review from '../../components/FormsComponents/ReviewCard/ReviewCard.types';
import ReviewsList from '../../components/FormsComponents/ReviewsList/ReviewsList';
import styles from '../Layout.module.css';

const FormsPage = (): JSX.Element => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const addReview = (review: Review): void => {
    setReviews([...reviews, { ...review, id: reviews.length }]);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Leave your review</h2>
      <Form reviewCallback={addReview} />
      <ReviewsList reviews={reviews} />
    </section>
  );
};

export default FormsPage;
