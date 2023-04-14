import { fireEvent, screen } from '@testing-library/react';
import Review from '../ReviewCard/ReviewCard.types';
import Form from './Form';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { renderWithProviders } from '../../../test/test-utils';

const mockFormCallback = vi.fn((review: Review): void => {
  if (review) {
    return;
  }
});

describe('<Form />', () => {
  it('renders form', () => {
    renderWithProviders(<Form />);
    expect(screen.getAllByRole('radio')).toHaveLength(5);
    expect(screen.getAllByRole('option')).toHaveLength(8);
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
  });

  it('renders date inputs', () => {
    renderWithProviders(<Form />);
    expect(screen.getAllByTestId('date')).toHaveLength(2);
  });

  it('validates inputs before submitting', async () => {
    renderWithProviders(<Form />);
    const user = userEvent.setup();
    await user.click(screen.getByTestId('submit'));
    expect(mockFormCallback).not.toBeCalled();
  });

  it('shows validation errors', async () => {
    renderWithProviders(<Form />);
    const user = userEvent.setup();
    await user.type(screen.getByTestId('text'), 'test');
    await user.click(screen.getByTestId('submit'));
    expect(
      screen.getByText(
        /Please, provide only one name at least 3 letters long and starting with an uppercase letter/i
      )
    ).toBeInTheDocument();
  });

  it('checks radio buttons', async () => {
    renderWithProviders(<Form />);
    const radioBtns = screen.getAllByRole('radio') as HTMLInputElement[];
    radioBtns.forEach((btn) => expect(btn).not.toBeChecked());
    fireEvent.click(screen.getByTestId('radio2'));
    const checkedBtns = radioBtns.filter((btn) => btn.checked);
    expect(checkedBtns).toHaveLength(1);
  });

  it('uploads file', () => {
    const file = new File(['hello'], 'helloWorld.png', { type: 'image/png' });
    renderWithProviders(<Form />);
    const input = screen.getByTestId('file') as HTMLInputElement;
    fireEvent.change(input, {
      target: { files: [file] },
    });
    expect(input.files!).toHaveLength(1);
    expect(input.files![0]).toStrictEqual(file);
    expect(input.files![0].name).toBe('helloWorld.png');
  });

  it('checks privacy consent', () => {
    renderWithProviders(<Form />);
    expect(screen.getByTestId('privacy')).not.toBeChecked();
    fireEvent.click(screen.getByTestId('privacy'));
    expect(screen.getByTestId('privacy')).toBeChecked();
  });
});
