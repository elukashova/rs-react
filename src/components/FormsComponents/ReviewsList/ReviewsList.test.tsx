import { render, screen } from '@testing-library/react';
import ReviewsList from './ReviewsList';
import React from 'react';
import urlForTest from '../../../assets/images/coca.jpg';
import Review from '../ReviewCard/ReviewCard.types';

const mockData: Review = {
  id: 0,
  name: 'Name',
  hut: 'Garibaldi hut',
  arrival: '2023-03-01',
  departure: '2023-03-05',
  image: urlForTest,
  rating: '4',
  privacy: true,
};

describe('<ReviewsList />', () => {
  it('renders reviews', () => {
    render(<ReviewsList reviews={[mockData]} />);

    expect(screen.getAllByTestId('review')).toHaveLength(1);
    expect(screen.getByText(/Garibaldi hut/i)).toBeInTheDocument();
  });
});
