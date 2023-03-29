export type Validation = {
  name: boolean;
  longName: boolean;
  hut: boolean;
  arrival: boolean;
  realArrival: boolean;
  departure: boolean;
  realDeparture: boolean;
  earlyDeparture: boolean;
  rating: boolean;
  img: boolean;
  format: boolean;
  privacy: boolean;
};

export type InputsToValidate = {
  nameInput: React.RefObject<HTMLInputElement>;
  hutInput: React.RefObject<HTMLSelectElement>;
  arrivalInput: React.RefObject<HTMLInputElement>;
  departureInput: React.RefObject<HTMLInputElement>;
  ratingInputs: React.RefObject<HTMLInputElement>[];
  imageInput: React.RefObject<HTMLInputElement>;
  privacyInput: React.RefObject<HTMLInputElement>;
};
