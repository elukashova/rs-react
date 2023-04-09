import React from 'react';
import Card from './Card';
import { fireEvent, render, screen } from '@testing-library/react';
import Hut from './Card.types';
import data from '../../../assets/data/cardsData';
import { vi } from 'vitest';

const randomIdx: number = Math.floor(Math.random() * data.length);
const dataForTest: Hut = data[randomIdx];
const mockCallback = vi.fn();

describe('<Card />', () => {
  it('renders card', () => {
    render(<Card hut={dataForTest} modalCallback={mockCallback} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getAllByText(/hut/i)).not.toHaveLength(0);
    expect(screen.getAllByText(/click for details/i)).toHaveLength(1);
  });

  it('opens modal window', async () => {
    render(<Card hut={dataForTest} modalCallback={mockCallback} />);
    const card = await screen.findByTestId('catalogue-card');
    fireEvent.click(card);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
