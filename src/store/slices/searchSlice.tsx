import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'components',
  initialState: {
    query: '',
  },
  reducers: {
    setSearchQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
