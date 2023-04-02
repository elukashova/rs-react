import { render, screen } from '@testing-library/react';
import React from 'react';
import ReviewCard from './ReviewCard';
import Review from './ReviewCard.types';
import urlForTest from '../../../assets/images/coca.jpg';

const mockData: Review = {
  name: 'Name',
  hut: 'Garibaldi hut',
  arrival: '2023-03-01',
  departure: '2023-03-05',
  image: urlForTest,
  rating: '4',
  privacy: true,
};

describe('<Review />', () => {
  it('renders review', () => {
    render(<ReviewCard {...mockData} />);

    expect(screen.getAllByTestId('star')).toHaveLength(5);
    expect(screen.getAllByRole('img')).toHaveLength(1);
  });
});
