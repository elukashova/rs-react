import Modal from './Modal';
import React from 'react';
import { renderWithProviders } from '../../../test/test-utils';
import data from '../../../assets/data/cardsData';
import { setupStore } from '../../../store/store';
import { setSelectedHut } from '../../../store/slices/apiSlice';
import Hut from '../Card/Card.types';
import { screen } from '@testing-library/react';

describe('<Modal />', () => {
  it('renders modal window', async () => {
    const store = setupStore();
    const hutData: Hut = data[7];
    store.dispatch(setSelectedHut(hutData));

    renderWithProviders(<Modal />, {
      store,
    });
    expect(await screen.findByText(/garibaldi/i)).toBeInTheDocument();
    expect(await screen.findByRole('img')).toBeInTheDocument();
    expect(await screen.findAllByRole('button')).toHaveLength(1);
  });
});
