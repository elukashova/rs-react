import { screen, waitFor } from '@testing-library/react';
import Catalogue from './Catalogue';
import React from 'react';
import { renderWithProviders } from '../../../test/test-utils';
import { setupStore } from '../../../store/store';
import {
  setLoading,
  setSearchQuery,
  setSelected,
  setSelectedHut,
} from '../../../store/slices/apiSlice';
import Hut from '../Card/Card.types';
import data from '../../../assets/data/cardsData';

describe('<Catalogue />', () => {
  it('renders catalogue', async () => {
    renderWithProviders(<Catalogue />);
    const cards = await screen.findAllByTestId('catalogue-card');
    expect(cards).not.toBeNull();
    expect(cards).toHaveLength(8);
  });

  it('renders catalogue with search query', async () => {
    const store = setupStore();
    const searchQuery = 'az';
    store.dispatch(setSearchQuery(searchQuery));
    renderWithProviders(<Catalogue />, {
      store,
    });
    const cards = await screen.findAllByTestId('catalogue-card');
    expect(cards).toHaveLength(1);
  });

  it('renders loader', async () => {
    const store = setupStore();
    store.dispatch(setLoading(true));
    renderWithProviders(<Catalogue />, {
      store,
    });
    const loader = await screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('renders modal window', async () => {
    const store = setupStore();
    store.dispatch(setSelected(true));
    const hutData: Hut = data[7];
    store.dispatch(setSelectedHut(hutData));
    renderWithProviders(<Catalogue />, {
      store,
    });
    await waitFor(() => expect(screen.getByTestId('modal')).toBeInTheDocument());
  });
});
