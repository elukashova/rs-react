import React from 'react';
import styles from './ReviewsList.module.css';
import ReviewCard from '../ReviewCard/ReviewCard';
import Review from '../ReviewCard/ReviewCard.types';
import { useAppSelector } from '../../../store/hooks';
import { State } from '../../../store/store';

const ReviewsList = (): JSX.Element => {
  const reviews = useAppSelector((state: State) => state.form.reviews);

  return (
    <div className={styles.reviews}>
      {reviews.map((item: Review) => (
        <ReviewCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ReviewsList;
