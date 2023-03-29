import styles from '../Form.module.css';
import React from 'react';
import {
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  UseFormRegisterReturn,
} from 'react-hook-form';
import Review from '../../ReviewCard/ReviewCard.types';

type Props<T extends FieldValues = FieldValues> = {
  type: string;
  className?: string;
  label?: string;
  accept?: string;
  value?: string;
  id?: string;
  name?: string;
  labelClass?: string;
  register: <T>(
    name: T,
    options?: RegisterOptions<Review, Name> | undefined
  ) => UseFormRegisterReturn<string>;
};

const LabelInput = (props: Props): JSX.Element => {
  const { label, className, type, labelClass, ...rest } = props;
  return (
    <>
      <label className={labelClass ? styles[labelClass] : styles.label}>
        {label}
        <input className={styles[type]} data-testid={type} type={type} {...rest} />
      </label>
    </>
  );
};

export default LabelInput;
