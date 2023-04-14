import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Hut from '../../components/HomeComponents/Card/Card.types';
import { ApiState } from '../store.types';

const initialState: ApiState = {
  query: '',
  result: [],
  isSelected: false,
  selectedHut: null,
  isLoading: true,
};

export const fetchApi = createAsyncThunk<Hut[], string>('api/fetchApi', async (url: string) => {
  const response: Response = await fetch(url);
  return await response.json().then((result: Hut[]) => result);
});

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setSelected(state, action: PayloadAction<boolean>) {
      state.isSelected = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        if (!state.isSelected) {
          state.result = action.payload;
        }
        if (!state.selectedHut) {
          state.selectedHut = action.payload[0];
        }
        state.isLoading = false;
      });
  },
});

export const { setSelected, setLoading, setSearchQuery } = apiSlice.actions;

export default apiSlice.reducer;
