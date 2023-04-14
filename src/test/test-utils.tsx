import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { AppStore, RootState, setupStore } from '../store/store';
import { vi } from 'vitest';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      form: {
        reviews: [],
        form: {
          name: '',
          arrival: '',
          hut: '',
          departure: '',
          rating: '',
          image: '',
          privacy: false,
          id: 0,
        },
      },
      api: {
        query: '',
        result: [],
        isSelected: false,
        selectedHut: null,
        isLoading: true,
      },
    },
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

const thunkMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    return next(action);
  };

export const create = () => {
  const store = {
    getState: vi.fn(() => ({})),
    dispatch: vi.fn(),
  };
  const next = vi.fn();

  const invoke = (action) => thunkMiddleware(store)(next)(action);

  return { store, next, invoke };
};
