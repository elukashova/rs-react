import React, { Component } from 'react';
import Form from '../../components/FormsComponents/Form/Form';
import Review from '../../components/FormsComponents/ReviewCard/ReviewCard.types';
import ReviewsList from '../../components/FormsComponents/ReviewsList/ReviewsList';
import styles from '../Layout.module.css';

class FormsPage extends Component<{ reviews: Review[] }> {
  state = {
    reviews: [],
  };

  addReview = (review: Review): void => {
    const updatedReviews: Review[] = [
      ...this.state.reviews,
      { ...review, id: this.state.reviews.length },
    ];

    this.setState({
      reviews: [...updatedReviews],
    });
  };

  render() {
    return (
      <section className={styles.section}>
        <h2 className={styles.title}>Leave your review</h2>
        <Form reviewCallback={this.addReview} />
        <ReviewsList reviews={this.state.reviews} />
      </section>
    );
  }
}

export default FormsPage;
