import { configureStore } from '@reduxjs/toolkit';
import formSlice from './slices/formSlice';
import apiSlice from './slices/apiSlice';

const store = configureStore({
  reducer: {
    form: formSlice,
    api: apiSlice,
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
