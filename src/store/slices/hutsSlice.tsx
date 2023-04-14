import { createSlice } from '@reduxjs/toolkit';
import data from '../../assets/data/cardsData';

const hutsSlice = createSlice({
  name: 'components',
  initialState: {
    huts: data,
  },
  reducers: {
    setComponents(state, action) {
      state.huts = action.payload;
    },
  },
});

export const { setComponents } = hutsSlice.actions;

export default hutsSlice.reducer;
