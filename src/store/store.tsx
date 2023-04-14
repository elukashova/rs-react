import { configureStore } from '@reduxjs/toolkit';
import hutsSlice from './slices/hutsSlice';
import formSlice from './slices/formSlice';
import searchSlice from './slices/searchSlice';

const store = configureStore({
  reducer: {
    cards: hutsSlice,
    form: formSlice,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['payload.image'],
        ignoredPaths: ['form.form.image'],
      },
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
