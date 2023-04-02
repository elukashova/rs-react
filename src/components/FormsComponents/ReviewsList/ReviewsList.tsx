import React from 'react';
import styles from './ReviewsList.module.css';
import ReviewCard from '../ReviewCard/ReviewCard';
import Review from '../ReviewCard/ReviewCard.types';

type Props = {
  reviews: Review[];
};

const ReviewsList = ({ reviews }: Props): JSX.Element => {
  return (
    <div className={styles.reviews}>
      {reviews.map((item: Review) => (
        <ReviewCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ReviewsList;
