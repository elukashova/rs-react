import React from 'react';
import Card from './Card';
import { fireEvent, screen } from '@testing-library/react';
import Hut from './Card.types';
import data from '../../../assets/data/cardsData';
import { create, renderWithProviders } from '../../../test/test-utils';

const randomIdx: number = Math.floor(Math.random() * data.length);
const dataForTest: Hut = data[randomIdx];

describe('<Card />', () => {
  it('renders card', () => {
    renderWithProviders(<Card hut={dataForTest} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getAllByText(/hut/i)).not.toHaveLength(0);
    expect(screen.getAllByText(/click for details/i)).toHaveLength(1);
  });

  it('provides card id to open modal window', async () => {
    renderWithProviders(<Card hut={dataForTest} />);
    const card = await screen.findByTestId('catalogue-card');
    fireEvent.click(card);
    const { store, invoke } = create();
    invoke((dispatch, getState) => {
      dispatch(dataForTest.id);
      getState();
    });
    expect(store.dispatch).toHaveBeenCalledWith(dataForTest.id);
    expect(store.getState).toHaveBeenCalled();
  });
});
