import styles from './Form.module.css';
import React, { useState } from 'react';
import Review from '../ReviewCard/ReviewCard.types';
import ValidationError from './Error/Error';
import data from '../../../assets/data/cardsData';
import LabelInput from './Input/Input';
import RadioStar from './RadioStar/Star';
import { useForm } from 'react-hook-form';
import { Errors } from './Error/Error.consts';

type Props = {
  reviewCallback: (review: Review) => void;
};

const Form = (props: Props) => {
  const ratingsDescOrder: number[] = [5, 4, 3, 2, 1];
  const [arrival, setArrival] = useState<number>(new Date().setHours(0, 0, 0, 0));
  const [avatar, setAvatar] = useState({
    format: '',
    value: '',
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, submitCount, isValid, isSubmitSuccessful, isDirty, isSubmitted },
  } = useForm<Review>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (review: Review) => {
    setTimeout(() => resetForm(), 2000);
    const url: string =
      typeof review.image === 'string' ? review.image : URL.createObjectURL(review.image[0]);
    setTimeout(
      () =>
        props.reviewCallback({
          ...review,
          image: url,
        }),
      1000
    );
  };

  const resetForm = () => {
    setAvatar({ format: '', value: '' });
    setArrival(new Date().setHours(0, 0, 0, 0));
    reset();
  };

  const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAvatar({ format: e.target.files[0].type, value: e.target.value });
    }
  };

  const onArrivalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrival(new Date(e.target.value).setHours(0, 0, 0, 0));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <label className={styles.label}>
          name
          <input
            className={styles.text}
            data-testid="text"
            type="text"
            {...register('name', {
              required: true,
              minLength: 3,
              pattern: /^([A-Z]+[a-zA-Z]{2,})$/,
            })}
          />
        </label>
        {errors.name?.types && errors.name.types.required && <ValidationError />}
        {errors.name?.types && (errors.name.types.minLength || errors.name.types.pattern) && (
          <ValidationError message={Errors.name} />
        )}
      </div>

      <div className={styles.wrapper}>
        <legend className={styles.label}>Stayed at</legend>
        <select
          className={styles.select}
          {...register('hut', {
            required: true,
          })}
        >
          <option value="">--Choose a hut--</option>
          {data.map((item) => (
            <option key={item.name}>{item.name}</option>
          ))}
        </select>
        {errors.hut && <ValidationError />}
      </div>

      <div className={styles.stay}>
        <div className={styles.wrapper}>
          <label className={styles.label}>
            from
            <input
              className={styles.date}
              data-testid="date"
              type="date"
              {...register('arrival', {
                required: true,
                validate: {
                  realDate: (date) =>
                    new Date(date).setHours(0, 0, 0, 0) <= new Date().setHours(0, 0, 0, 0) || '',
                },
              })}
              onChange={onArrivalChange}
            />
          </label>
          {errors.arrival?.types &&
            ((errors.arrival.types.required && <ValidationError />) ||
              (errors.arrival.types.realDate && <ValidationError message={Errors.date} />))}
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label}>
            to
            <input
              className={styles.date}
              data-testid="date"
              type="date"
              {...register('departure', {
                required: true,
                validate: {
                  realDate: (date) =>
                    new Date(date).setHours(0, 0, 0, 0) <= new Date().setHours(0, 0, 0, 0) || '',
                  earlyDate: (date) => arrival <= new Date(date).setHours(0, 0, 0, 0) || '',
                },
              })}
            />
          </label>
          {(errors.departure?.types && errors.departure.types.required && <ValidationError />) ||
            (errors.departure?.types &&
              ((errors.departure.types.realDate && <ValidationError message={Errors.date} />) ||
                (errors.departure.types.earlyDate && (
                  <ValidationError message={Errors.departure} />
                ))))}
        </div>
      </div>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Your review</legend>
        <div className={styles.stars}>
          {ratingsDescOrder.map((num) => (
            <RadioStar
              key={num}
              rating={`${num}`}
              register={register('rating', {
                required: true,
              })}
            />
          ))}
        </div>
        {errors.rating && <ValidationError />}
      </fieldset>

      <div className={styles.avatar}>
        <label className={styles.label}>
          add your avatar
          <input
            className={styles.file}
            data-testid="file"
            type="file"
            accept="image/*"
            value={avatar.value}
            {...register('image', {
              required: true,
              validate: {
                acceptedFormats: () =>
                  ['image/jpeg', 'image/png', 'image/gif'].includes(avatar.format) || '',
              },
            })}
            onChange={onFileUpload}
          />
        </label>
        {errors.image?.types &&
          ((errors.image.types.required && <ValidationError />) ||
            (errors.image.types.acceptedFormats && <ValidationError message={Errors.avatar} />))}
      </div>

      <div className={styles.wrapper}>
        <div className={styles.privacy}>
          <input
            className={styles.checkbox}
            type="checkbox"
            data-testid="privacy"
            {...register('privacy', {
              required: true,
            })}
          />
          <p>I consent to the processing of my personal data</p>
        </div>
        {errors.privacy && <ValidationError />}
      </div>

      <div>
        <input className={styles.submit} type="submit" value="submit" data-testid="submit" />
        {isSubmitSuccessful && (
          <p className={styles.confirmation}>Your review has been successfully submitted!</p>
        )}
      </div>
    </form>
  );
};

export default Form;
