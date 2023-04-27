import styles from './Form.module.css';
import React from 'react';
import Review from '../ReviewCard/ReviewCard.types';
import ValidationError from './Validation/Error/Error';
import data from '../../../assets/data/cardsData';
import LabelInput from './Input/Input';
import RadioStar from './RadioStar/Star';
import { useForm } from 'react-hook-form';
import { Errors } from './Validation/Error/Error.consts';
import useValidation from './Validation/Validation';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { RootState } from '../../../store/store';
import { setReviewData } from '../../../store/slices/formSlice';
import { FormData } from './Form.types';

const Form = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const { onArrivalChange, dateRules, avatarRules } = useValidation();
  const ratingsDescOrder: number[] = [5, 4, 3, 2, 1];

  const dispatch = useAppDispatch();
  const reviews = useAppSelector((state: RootState) => state.form.reviews);

  const onSubmit = (review: FormData) => {
    setTimeout(() => reset(), 1500);

    const newReview: Review = {
      ...review,
      image: URL.createObjectURL(review.image[0]),
    };

    setTimeout(
      () => dispatch(setReviewData([...reviews, { ...newReview, id: reviews.length }])),
      1500
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <LabelInput
          label="name"
          type="text"
          register={register('name', {
            required: Errors.required,
            pattern: {
              value: /^([A-Z]+[a-zA-Z]{2,})$/,
              message: Errors.name,
            },
          })}
          data-cy="name"
        />
        {errors.name?.types && <ValidationError message={errors.name.message} />}
      </div>

      <div className={styles.wrapper}>
        <legend className={styles.label}>Stayed at</legend>
        <select
          className={styles.select}
          {...register('hut', {
            required: Errors.required,
          })}
          data-cy="hut"
        >
          <option hidden value="">
            --Choose a hut--
          </option>
          {data.map((item) => (
            <option data-testid={item.id} key={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        {errors.hut && <ValidationError message={errors.hut.message} />}
      </div>

      <div className={styles.stay}>
        <div className={styles.wrapper}>
          <LabelInput
            label="from:"
            type="date"
            register={register('arrival', {
              required: Errors.required,
              validate: dateRules.realDate,
            })}
            data-cy="arrival"
            onChange={onArrivalChange}
          />
          {errors.arrival?.types && <ValidationError message={errors.arrival.message} />}
        </div>
        <div className={styles.wrapper}>
          <LabelInput
            label="to:"
            type="date"
            register={register('departure', {
              required: Errors.required,
              validate: dateRules,
            })}
            data-cy="departure"
          />
          {errors.departure?.types && <ValidationError message={errors.departure.message} />}
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
                required: Errors.required,
              })}
            />
          ))}
        </div>
        {errors.rating && <ValidationError message={errors.rating.message} />}
      </fieldset>

      <div className={styles.avatar}>
        <LabelInput
          label="add your avatar"
          type="file"
          accept="image/*"
          register={register('image', {
            required: Errors.required,
            validate: avatarRules,
          })}
          data-cy="image"
        />
        {errors.image?.types && <ValidationError message={errors.image.message} />}
      </div>

      <div className={styles.wrapper}>
        <div className={styles.privacy}>
          <input
            className={styles.checkbox}
            type="checkbox"
            data-testid="privacy"
            {...register('privacy', {
              required: Errors.required,
            })}
            data-cy="privacy"
          />
          <p>I consent to the processing of my personal data</p>
        </div>
        {errors.privacy && <ValidationError message={errors.privacy.message} />}
      </div>

      <div>
        <input
          className={styles.submit}
          type="submit"
          value="submit"
          data-testid="submit"
          data-cy="submit"
        />
        {isSubmitSuccessful && (
          <p className={styles.confirmation} data-cy="submit-message">
            Your review has been successfully submitted!
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;
