import { render, screen } from '@testing-library/react';
import Catalogue from './Catalogue';
import React from 'react';
import data from '../../assets/data/cards-data';

const length: number = data.length;

describe('<Catalogue />', () => {
  it('renders catalogue', () => {
    const catalogue = render(<Catalogue />);

    expect(catalogue).toBeTruthy();
    expect(screen.getAllByTestId('catalogue-card')).toHaveLength(length);
  });
});
