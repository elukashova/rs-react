import { useState } from 'react';
import { Errors } from './Error/Error.consts';
import { DateRules, FileRules, ValidationHook } from './Validation.types';

const useValidation = (): ValidationHook => {
  const [arrival, setArrival] = useState<number>(0);
  const [avatar, setAvatar] = useState({
    format: '',
    value: '',
  });

  const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setAvatar({ format: e.target.files[0].type, value: e.target.value });
    }
  };

  const onArrivalChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setArrival(new Date(e.target.value).setHours(0, 0, 0, 0));
  };

  const dateRules: DateRules = {
    realDate: (date: string) =>
      new Date(date).setHours(0, 0, 0, 0) <= new Date().setHours(0, 0, 0, 0) || Errors.date,
    earlyDate: (date: string) => arrival <= new Date(date).setHours(0, 0, 0, 0) || Errors.departure,
  };

  const avatarRules: FileRules = {
    acceptedFormats: () =>
      ['image/jpeg', 'image/png', 'image/gif'].includes(avatar.format) || Errors.avatar,
  };

  return { onFileUpload, onArrivalChange, dateRules, avatarRules };
};

export default useValidation;
