import React from 'react';
import Card from './Card';
import { render, screen } from '@testing-library/react';
import CardType from './Card.types';
import data from '../../assets/data/cards-data';

const randomIdx: number = Math.floor(Math.random() * data.length);
const dataForTest: CardType = data[randomIdx];

describe('<Card />', () => {
  it('renders card', () => {
    render(<Card {...dataForTest} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getAllByText(/hut/i)).not.toHaveLength(0);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
