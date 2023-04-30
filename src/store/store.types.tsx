import Review from '../components/FormsComponents/ReviewCard/ReviewCard.types';
import Hut from '../components/HomeComponents/Card/Card.types';

export type HutsState = {
  huts: Hut[] | null;
};

export type FormState = {
  reviews: Review[];
  form: Review;
};

export type ApiState = {
  isLoading: boolean;
  query: string;
  result: Hut[];
  isSelected: boolean;
  selectedHut: Hut | null;
};

export type State = {
  form: FormState;
  api: ApiState;
};
