import { configureStore } from '@reduxjs/toolkit';
import hutsReducer from './slices/hutsSlice';
import Hut from '../components/HomeComponents/Card/Card.types';

export interface State {
  components: {
    huts: Hut[];
  };
}

export default configureStore({
  reducer: {
    components: hutsReducer,
  },
});
