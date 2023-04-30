import {
  FieldValues,
  UseFormGetValues,
  UseFormWatch,
  UseFormGetFieldState,
  UseFormSetError,
  UseFormClearErrors,
  UseFormSetValue,
  UseFormTrigger,
  FormState,
  UseFormResetField,
  UseFormReset,
  UseFormHandleSubmit,
  UseFormUnregister,
  UseFormRegister,
  UseFormSetFocus,
} from 'react-hook-form';

export type UseFormReturn<TFieldValues extends FieldValues = FieldValues> = {
  watch: UseFormWatch<TFieldValues>;
  getValues: UseFormGetValues<TFieldValues>;
  getFieldState: UseFormGetFieldState<TFieldValues>;
  setError: UseFormSetError<TFieldValues>;
  clearErrors: UseFormClearErrors<TFieldValues>;
  setValue: UseFormSetValue<TFieldValues>;
  trigger: UseFormTrigger<TFieldValues>;
  formState: FormState<TFieldValues>;
  resetField: UseFormResetField<TFieldValues>;
  reset: UseFormReset<TFieldValues>;
  handleSubmit: UseFormHandleSubmit<TFieldValues>;
  unregister: UseFormUnregister<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  setFocus: UseFormSetFocus<TFieldValues>;
};

export type FormData = {
  name: string;
  arrival: string;
  hut: string;
  departure: string;
  rating: string;
  image: FileList;
  privacy: boolean;
};
