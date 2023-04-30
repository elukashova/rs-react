import { screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import App from './App';
import { renderWithProviders } from './test/test-utils';

describe('<App />', () => {
  it('renders nav links', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getAllByTestId('nav-link')).toHaveLength(3);
  });
});
