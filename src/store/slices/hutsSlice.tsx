import { createSlice } from '@reduxjs/toolkit';
import data from '../../assets/data/cardsData';
import Hut from '../../components/HomeComponents/Card/Card.types';

const hutsReducer = createSlice({
  name: 'huts',
  initialState: {
    huts: data,
  },
  reducers: {
    setComponents(state, action) {
      data.filter(
        (item: Hut) =>
          !action.payload.value ||
          item.name.toLowerCase().includes(action.payload.value.toLowerCase())
      );
    },
  },
});

export const { setComponents } = hutsReducer.actions;

export default hutsReducer.reducer;
