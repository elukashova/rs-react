import { createSlice } from '@reduxjs/toolkit';
import data from '../../assets/data/cardsData';

const hutsSlice = createSlice({
  name: 'components',
  initialState: {
    huts: data,
  },
  reducers: {
    setHutCards(state, action) {
      state.huts = action.payload;
    },
  },
});

export const { setHutCards } = hutsSlice.actions;

export default hutsSlice.reducer;
