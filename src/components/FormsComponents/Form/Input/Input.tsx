import styles from '../Form.module.css';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  type: string;
  className?: string;
  label?: string;
  accept?: string;
  value?: string;
  id?: string;
  name?: string;
  labelClass?: string;
  register: UseFormRegisterReturn<'name' | 'arrival' | 'departure' | 'image'>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LabelInput = (props: Props): JSX.Element => {
  const { label, className, type, labelClass, register, ...rest } = props;
  return (
    <>
      <label className={labelClass ? styles[labelClass] : styles.label}>
        {label}
        <input className={styles[type]} data-testid={type} type={type} {...register} {...rest} />
      </label>
    </>
  );
};

export default LabelInput;
