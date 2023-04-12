import { testIdQuery } from '../../../mocks/handlers';
import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';
import React from 'react';
import { vi } from 'vitest';

const mockCallback = vi.fn();

describe('<Modal />', () => {
  it('renders modal window', async () => {
    render(<Modal hutId={testIdQuery} unselectHut={mockCallback} />);
    expect(await screen.findByText(/garibaldi/i)).toBeInTheDocument();
    expect(await screen.findByRole('img')).toBeInTheDocument();
    expect(await screen.findAllByRole('button')).toHaveLength(1);
  });

  it('closes modal window', async () => {
    render(<Modal hutId={testIdQuery} unselectHut={mockCallback} />);
    const button = await screen.findByTestId('close-btn');
    fireEvent.click(button);
    expect(mockCallback).toHaveBeenCalled();
  });
});
