import styles from './Star.module.css';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  rating: string;
  register: UseFormRegisterReturn<'rating'>;
};

const RadioStar = ({ rating, register }: Props): JSX.Element => {
  return (
    <>
      <label className={styles['label-radio']} htmlFor={`radio${rating}`}>
        {rating}
      </label>
      <input
        className={styles.radio}
        type="radio"
        value={rating}
        id={`radio${rating}`}
        data-testid={`radio${rating}`}
        data-cy="rating"
        {...register}
      />
    </>
  );
};
export default RadioStar;
