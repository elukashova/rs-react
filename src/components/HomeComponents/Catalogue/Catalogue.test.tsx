import { render, screen } from '@testing-library/react';
import Catalogue from './Catalogue';
import React from 'react';
import { testSearchQuery } from '../../../mocks/handlers';

describe('<Catalogue />', () => {
  it('renders catalogue', async () => {
    render(<Catalogue />);
    const cards = await screen.findAllByTestId('catalogue-card');
    expect(cards).not.toBeNull();
    expect(cards).toHaveLength(8);
  });

  it('renders catalogue with search query', async () => {
    render(<Catalogue query={testSearchQuery} />);
    const cards = await screen.findAllByTestId('catalogue-card');
    expect(cards).toHaveLength(1);
  });
});
