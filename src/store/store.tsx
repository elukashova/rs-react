import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import formReducer from './slices/formSlice';
import apiReducer from './slices/apiSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    api: apiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['payload.image'],
        ignoredPaths: ['form.form.image'],
      },
    }),
});

const rootReducer = combineReducers({
  form: formReducer,
  api: apiReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
