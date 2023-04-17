import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Review from '../../components/FormsComponents/ReviewCard/ReviewCard.types';
import { FormState } from '../store.types';

const initialState: FormState = {
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
};

const formReducer = createSlice({
  name: 'components',
  initialState,
  reducers: {
    setFormValues(state, action: PayloadAction<Review>) {
      state.form = action.payload;
    },
    setReviewData(state, action: PayloadAction<Review[]>) {
      state.reviews = action.payload;
    },
  },
});

export const { setFormValues, setReviewData } = formReducer.actions;

export default formReducer.reducer;
