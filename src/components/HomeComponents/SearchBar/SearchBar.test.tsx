import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import SearchBar from './SearchBar';

const storage: Record<string, string> = {};

const mockSetDataToLocalStorage = vi.fn((data: string, key: string): void => {
  delete storage[key];
  storage[key] = JSON.stringify(data);
});

const mockGetDataFromLocalStorage = vi.fn((key: string): string | null => {
  const result: string | null = key in storage ? JSON.parse(storage[key]) : null;
  return result;
});

const mockCallback = vi.fn();

describe('<SearchBar />', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: mockGetDataFromLocalStorage,
        setItem: mockSetDataToLocalStorage,
      },
      writable: true,
    });
  });

  it('handles search input value', () => {
    render(<SearchBar filterHuts={mockCallback} />);
    const searchInput: HTMLElement | null = screen.getByPlaceholderText(/Search.../i);

    fireEvent.change(searchInput, { target: { value: 'random' } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    cleanup();
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
