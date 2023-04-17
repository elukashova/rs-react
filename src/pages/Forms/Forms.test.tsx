import { screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test/test-utils';
import FormsPage from './Forms';

describe('<FormsPage />', () => {
  it('renders page layout', () => {
    renderWithProviders(<FormsPage />);
    expect(screen.getByText(/Leave your review/i)).toBeInTheDocument();
  });
});
