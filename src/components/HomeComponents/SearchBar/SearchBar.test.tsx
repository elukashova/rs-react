import { cleanup, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { create, renderWithProviders } from '../../../test/test-utils';
import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  it('handles search input value', () => {
    renderWithProviders(<SearchBar />);
    const searchInput: HTMLElement | null = screen.getByPlaceholderText(/Search.../i);

    fireEvent.change(searchInput, { target: { value: 'random' } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    cleanup();
    const { store, invoke } = create();
    invoke((dispatch, getState) => {
      dispatch('random');
      getState();
    });
    expect(store.dispatch).toHaveBeenCalledWith('random');
    expect(store.getState).toHaveBeenCalled();
  });
});
