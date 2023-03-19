import { render, screen } from '@testing-library/react';
import Catalogue from './Catalogue';
import React from 'react';
import data from '../../assets/data/cards-data';

const length: number = data.length;

describe('<Catalogue />', () => {
  it('renders catalogue', () => {
    render(<Catalogue />);

    expect(screen.getAllByTestId('catalogue-card')).toHaveLength(length);
  });
});
