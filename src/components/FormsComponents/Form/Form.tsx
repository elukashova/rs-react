import styles from './Form.module.css';
import React, { Component, SyntheticEvent } from 'react';
import Review from '../ReviewCard/ReviewCard.types';
import ValidationError from './Error/Error';
import { InputsToValidate, Validation } from './Validation/Validation.types';
import areValidFields from './Validation/Validation.functions';
import data from '../../../assets/data/cardsData';
import Hut from '../../HomeComponents/Card/Card.types';
import { Errors } from './Error/Error.consts';
import LabelInput from './Input/Input';
import RadioStar from './RadioStar/Star';

type Props = {
  reviewCallback: (review: Review) => void;
};

type State = {
  form: Validation;
  confirmation: boolean;
};

class Form extends Component<Props, State> {
  private reviewForm: React.RefObject<HTMLFormElement> = React.createRef();
  private nameInput: React.RefObject<HTMLInputElement> = React.createRef();
  private arrivalInput: React.RefObject<HTMLInputElement> = React.createRef();
  private departureInput: React.RefObject<HTMLInputElement> = React.createRef();
  private selectHut: React.RefObject<HTMLSelectElement> = React.createRef();
  private ratingOneInput: React.RefObject<HTMLInputElement> = React.createRef();
  private ratingTwoInput: React.RefObject<HTMLInputElement> = React.createRef();
  private ratingThreeInput: React.RefObject<HTMLInputElement> = React.createRef();
  private ratingFourInput: React.RefObject<HTMLInputElement> = React.createRef();
  private ratingFiveInput: React.RefObject<HTMLInputElement> = React.createRef();
  private avatarInput: React.RefObject<HTMLInputElement> = React.createRef();
  private privacyInput: React.RefObject<HTMLInputElement> = React.createRef();
  private submitInput: React.RefObject<HTMLInputElement> = React.createRef();

  private ratingInputs: React.RefObject<HTMLInputElement>[] = [
    this.ratingOneInput,
    this.ratingTwoInput,
    this.ratingThreeInput,
    this.ratingFourInput,
    this.ratingFiveInput,
  ];

  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      form: {
        name: true,
        longName: true,
        hut: true,
        arrival: true,
        realArrival: true,
        departure: true,
        realDeparture: true,
        earlyDeparture: true,
        rating: true,
        img: true,
        format: true,
        privacy: true,
      },
      confirmation: false,
    };
  }

  public handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    if (this.validateForm()) {
      const review: Review = {
        name: this.nameInput.current?.value ?? '',
        hut: this.selectHut.current?.value ?? '',
        arrival: this.arrivalInput.current?.value ?? '',
        departure: this.departureInput.current?.value ?? '',
        rating: this.pickRatingValue(),
        image: this.createAvatarUrl() ?? '',
        privacy: Boolean(this.privacyInput.current?.checked) ?? '',
      };

      this.handleConfirmation();
      setTimeout(() => this.resetForm(), 500);
      setTimeout(() => this.props.reviewCallback(review), 1000);
    }
  }

  createAvatarUrl(): string | null {
    if (!this.avatarInput.current?.files?.[0]) {
      return null;
    }

    return URL.createObjectURL(this.avatarInput.current?.files[0]);
  }

  pickRatingValue(): string {
    let rating = '';

    this.ratingInputs.forEach((radio) => {
      if (radio.current?.checked) {
        rating = radio.current?.value;
      }
    });

    return rating;
  }

  resetForm(): void {
    this.reviewForm.current?.reset();
    setTimeout(() => this.handleConfirmation(), 1000);
  }

  handleConfirmation(): void {
    this.setState({
      confirmation: !this.state.confirmation,
    });
  }

  validateForm(): boolean {
    const inputsToValidate: InputsToValidate = {
      nameInput: this.nameInput,
      hutInput: this.selectHut,
      departureInput: this.departureInput,
      arrivalInput: this.arrivalInput,
      ratingInputs: this.ratingInputs,
      imageInput: this.avatarInput,
      privacyInput: this.privacyInput,
    };

    const currentState: State = {
      ...this.state,
      form: { ...areValidFields(inputsToValidate) },
    };
    this.setState(currentState);

    return Object.values(currentState.form).every((value) => value === true);
  }

  createSelectList(): string[] {
    const selectDataWithDefault: string[] = ['--Choose a hut--'];
    data.forEach((item: Hut) => selectDataWithDefault.push(item.name));
    return selectDataWithDefault;
  }

  render(): JSX.Element {
    const { confirmation } = this.state;
    const {
      name,
      longName,
      hut,
      arrival,
      realArrival,
      departure,
      realDeparture,
      earlyDeparture,
      rating,
      img,
      format,
      privacy,
    } = this.state.form;
    const ratingsDescOrder: number[] = [5, 4, 3, 2, 1];
    const selectDataWithDefault: string[] = ['--Choose a hut--'];
    data.forEach((item: Hut) => selectDataWithDefault.push(item.name));
    return (
      <form className={styles.form} ref={this.reviewForm} onSubmit={this.handleSubmit}>
        <div className={styles.wrapper}>
          <LabelInput label="name" type="text" id="name" refObj={this.nameInput} />
          {(!name || !longName) && (
            <ValidationError error={!name ? '' : !longName ? Errors.name : ''} />
          )}
        </div>

        <div className={styles.wrapper}>
          <legend className={styles.label}>Stayed at</legend>
          <select className={styles.select} ref={this.selectHut} name="hut">
            {this.createSelectList().map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          {!hut && <ValidationError />}
        </div>

        <div className={styles.stay}>
          {[this.arrivalInput, this.departureInput].map((input, idx) => (
            <div key={idx} className={styles.wrapper}>
              <LabelInput
                label={idx === 0 ? 'From:' : 'To:'}
                type="date"
                refObj={idx === 0 ? this.arrivalInput : this.departureInput}
                id={idx === 0 ? 'arrival' : 'departure'}
              />
              {(idx === 0
                ? !arrival || !realArrival
                : !departure || !realDeparture || !earlyDeparture) && (
                <ValidationError
                  error={
                    (idx === 0 ? !arrival : !departure)
                      ? ''
                      : (idx === 0 && !realArrival) || (idx === 1 && !realDeparture)
                      ? Errors.date
                      : idx === 1 && !earlyDeparture
                      ? Errors.early
                      : ''
                  }
                />
              )}
            </div>
          ))}
        </div>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Your review</legend>
          <div className={styles.stars}>
            {ratingsDescOrder.map((num) => (
              <RadioStar key={num} refObj={this.ratingInputs[num - 1]} rating={`${num}`} />
            ))}
          </div>
          {!rating && <ValidationError />}
        </fieldset>

        <div className={styles.avatar}>
          <LabelInput
            label="Add your avatar"
            id="name"
            type="file"
            refObj={this.avatarInput}
            accept="image/*"
          />
          {(!img || !format) && <ValidationError error={!img ? '' : !format ? Errors.image : ''} />}
        </div>

        <div className={styles.wrapper}>
          <div className={styles.privacy}>
            <input
              className={styles.checkbox}
              ref={this.privacyInput}
              type="checkbox"
              data-testid="privacy"
            />
            <p>I consent to the processing of my personal data</p>
          </div>
          {!privacy && <ValidationError />}
        </div>

        <div>
          <input
            className={styles.submit}
            ref={this.submitInput}
            type="submit"
            value="submit"
            data-testid="submit"
          />
          {confirmation && (
            <p className={styles.confirmation}>Your review has been successfully submitted!</p>
          )}
        </div>
      </form>
    );
  }
}

export default Form;
