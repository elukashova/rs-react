import { screen } from '@testing-library/react';
import ReviewsList from './ReviewsList';
import React from 'react';
import Review from '../ReviewCard/ReviewCard.types';
import { setupStore } from '../../../store/store';
import { setReviewData } from '../../../store/slices/formSlice';
import { renderWithProviders } from '../../../test/test-utils';

const urlForTest = '../../../assets/images/coca.jpg';

const mockData: Review[] = [
  {
    id: 0,
    name: 'Name',
    hut: 'Garibaldi hut',
    arrival: '2023-03-01',
    departure: '2023-03-05',
    image: urlForTest,
    rating: '4',
    privacy: true,
  },
];

describe('<ReviewsList />', () => {
  it('renders reviews', () => {
    const store = setupStore();
    store.dispatch(setReviewData(mockData));

    renderWithProviders(<ReviewsList />, {
      store,
    });

    expect(screen.getAllByTestId('review')).toHaveLength(1);
    expect(screen.getByText(/Garibaldi hut/i)).toBeInTheDocument();
  });
});
