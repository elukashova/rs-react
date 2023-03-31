import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import FormsPage from './Forms';

describe('<FormsPage />', () => {
  it('renders page layout', () => {
    render(<FormsPage />);
    expect(screen.getByText(/Leave your review/i)).toBeInTheDocument();
  });
});
