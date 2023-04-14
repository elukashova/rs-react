import { configureStore } from '@reduxjs/toolkit';
import hutsReducer from './slices/hutsSlice';
import Hut from '../components/HomeComponents/Card/Card.types';
import Review from '../components/FormsComponents/ReviewCard/ReviewCard.types';
import formSlice from './slices/formSlice';

export interface State {
  cards: {
    huts: Hut[];
  };
  form: {
    reviews: Review[];
    form: Review;
  };
}

const store = configureStore({
  reducer: {
    cards: hutsReducer,
    form: formSlice,
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
