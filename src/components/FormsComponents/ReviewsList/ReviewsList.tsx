import React, { Component } from 'react';
import styles from './ReviewsList.module.css';
import ReviewCard from '../ReviewCard/ReviewCard';
import Review from '../ReviewCard/ReviewCard.types';

class ReviewsList extends Component<{ reviews: Review[] }> {
  render(): JSX.Element {
    const { reviews } = this.props;
    return (
      <div className={styles.reviews}>
        {reviews.map((item: Review) => (
          <ReviewCard key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

export default ReviewsList;
