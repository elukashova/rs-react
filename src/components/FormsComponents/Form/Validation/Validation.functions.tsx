import { InputsToValidate, Validation } from './Validation.types';

const areValidFields = ({
  nameInput,
  hutInput,
  arrivalInput,
  departureInput,
  ratingInputs,
  imageInput,
  privacyInput,
}: InputsToValidate): Validation => {
  return {
    name: !nameInput.current?.value ? false : true,
    longName: validateTextLength(nameInput),
    hut: hutInput.current?.value !== '--Choose a hut--',
    arrival: Boolean(arrivalInput.current?.value),
    realArrival: validateDateInput(arrivalInput.current?.value),
    departure: Boolean(departureInput.current?.value),
    realDeparture: validateDateInput(departureInput.current?.value),
    earlyDeparture: validateDepartureInput(
      arrivalInput.current?.value,
      departureInput.current?.value
    ),
    rating: ratingInputs.some((input) => input.current?.checked),
    img: !imageInput.current?.value ? false : true,
    format: validateFileFormat(imageInput),
    privacy: Boolean(privacyInput.current?.checked),
  };
};

const validateTextLength = (input: React.RefObject<HTMLInputElement>): boolean => {
  const validName = /^([A-Z]+[a-zA-Z]{2,30})$/;
  if (input.current && !validName.test(input.current.value)) {
    return false;
  }
  return true;
};

const validateFileFormat = (input: React.RefObject<HTMLInputElement>): boolean => {
  if (input.current) {
    const fileName: string = input.current.value;
    const idx: number = fileName.lastIndexOf('.') + 1;
    const ext: string = fileName.substring(idx, fileName.length).toLowerCase();
    return ['jpg', 'jpeg', 'png'].some((fileExt) => ext === fileExt);
  }
  return false;
};

const validateDateInput = (value?: string): boolean => {
  if (value) {
    const userDate: number = new Date(value).setHours(0, 0, 0, 0);
    const today: number = new Date().setHours(0, 0, 0, 0);
    return userDate <= today;
  }
  return true;
};

const validateDepartureInput = (arrivalValue?: string, departureValue?: string): boolean => {
  if (arrivalValue && departureValue) {
    const arrival: number = new Date(arrivalValue).setHours(0, 0, 0, 0);
    const departure: number = new Date(departureValue).setHours(0, 0, 0, 0);
    return arrival <= departure;
  }
  return true;
};

export default areValidFields;
