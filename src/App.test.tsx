import { screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import App from './App';
import { renderWithProviders } from './test/test-utils';

describe('<App />', () => {
  it('renders nav links', () => {
    renderWithProviders(<App />);
    expect(screen.getAllByTestId('nav-link')).toHaveLength(3);
  });
});
