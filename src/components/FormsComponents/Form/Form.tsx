import styles from './Form.module.css';
import React, { Component, SyntheticEvent } from 'react';
import Review from '../ReviewCard/ReviewCard.types';
import StarRadio from './Star/Star';
import Input from './Input/Input';
import Select from './Select/Select';
import Confirmation from './Confirmation/Confirmation';
import { DEFAULT_OPTION, Errors, VALID_NAME } from './Form.consts';

type Props = {
  reviewCallback: (review: Review) => void;
};

type State = {
  form: {
    name: boolean;
    hut: boolean;
    arrival: boolean;
    departure: boolean;
    rating: boolean;
    image: boolean;
    privacy: boolean;
  };
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
  private checkPrivacy: React.RefObject<HTMLInputElement> = React.createRef();
  private submitInput: React.RefObject<HTMLInputElement> = React.createRef();

  private ratingInputs: React.RefObject<HTMLInputElement>[] = [
    this.ratingOneInput,
    this.ratingTwoInput,
    this.ratingThreeInput,
    this.ratingFourInput,
    this.ratingFiveInput,
  ];

  constructor(props: { reviewCallback: (review: Review) => void }) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      form: {
        name: true,
        hut: true,
        arrival: true,
        departure: true,
        rating: true,
        image: true,
        privacy: true,
      },
      confirmation: false,
    };
  }

  handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    if (this.validateForm()) {
      const review: Review = {
        name: this.nameInput.current?.value ?? '',
        hut: this.selectHut.current?.value ?? '',
        arrival: this.arrivalInput.current?.value ?? '',
        departure: this.departureInput.current?.value ?? '',
        rating: this.pickRatingValue(),
        image: this.createAvatarUrl() ?? '',
        privacyConsent: Boolean(this.checkPrivacy.current?.checked) ?? '',
      };

      this.showConfirmation();
      this.resetForm();
      this.props.reviewCallback(review);
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
    setTimeout(() => this.hideConfirmation(), 2000);
  }

  showConfirmation(): void {
    this.setState({
      confirmation: true,
    });
  }

  hideConfirmation(): void {
    this.setState({
      confirmation: false,
    });
  }

  validateForm(): boolean {
    const currentState: State = {
      ...this.state,
      form: {
        name: this.validateInput(),
        hut: this.validateSelectInput(),
        arrival: Boolean(this.arrivalInput.current?.value),
        departure: Boolean(this.arrivalInput.current?.value),
        rating: this.validateRadioInput(),
        image: Boolean(this.createAvatarUrl()),
        privacy: Boolean(this.checkPrivacy.current?.checked) ?? '',
      },
    };
    this.setState(currentState);

    const isValid: boolean = Object.values(currentState.form).every((value) => value === true);
    return isValid;
  }

  validateInput(): boolean {
    if (!this.nameInput.current?.value || !VALID_NAME.test(this.nameInput.current.value)) {
      return false;
    }
    return true;
  }

  validateSelectInput(): boolean {
    if (this.selectHut.current?.value === DEFAULT_OPTION) {
      return false;
    }
    return true;
  }

  validateRadioInput(): boolean {
    const isChecked = this.ratingInputs.some((input) => input.current?.checked);
    return isChecked;
  }

  render(): JSX.Element {
    const ratings: number[] = [5, 4, 3, 2, 1];
    const dateLabels: string[] = ['From:', 'To:'];
    const showError = (message: string): JSX.Element => <p className={styles.error}>{message}</p>;
    return (
      <form className={styles.form} ref={this.reviewForm} onSubmit={this.handleSubmit}>
        <div>
          <Input label="name" reference={this.nameInput} type="text" name="text" />
          {showError(this.state.form.name ? '' : `${Errors.required} ${Errors.name}`)}
        </div>
        <div>
          <Select reference={this.selectHut} />
          {showError(this.state.form.hut ? '' : `${Errors.required}`)}
        </div>

        <div className={styles.stay}>
          {[this.arrivalInput, this.departureInput].map((input, idx) => (
            <div key={idx} className={styles.wrapper}>
              <Input
                label={dateLabels[idx]}
                reference={input}
                type="date"
                name="date"
                className="date"
              />
              {showError(
                this.state.form.arrival && this.state.form.departure ? '' : `${Errors.required}`
              )}
            </div>
          ))}
        </div>

        <div>
          <legend className={styles.legend}>Your review</legend>
          <div className={styles.stars}>
            {ratings.map((num) => (
              <StarRadio key={num} reference={this.ratingInputs[num - 1]} rating={`${num}`} />
            ))}
          </div>
          {showError(this.state.form.rating ? '' : `${Errors.required}`)}
        </div>

        <div className={styles.avatar}>
          <Input
            label="Add your avatar"
            reference={this.avatarInput}
            type="file"
            name="file"
            className="file"
            format="image/*"
          />
          {showError(this.state.form.image ? '' : `${Errors.avatar}`)}
        </div>

        <div className={styles.wrapper}>
          <div className={styles.privacy}>
            <Input
              reference={this.checkPrivacy}
              type="checkbox"
              className="checkbox"
              name="privacy"
            />
            <p>I consent to the processing of my personal data</p>
          </div>
          {showError(this.state.form.privacy ? '' : `${Errors.required}`)}
        </div>

        <>
          <input className={styles.submit} ref={this.submitInput} type="submit" value="Send" />
          {this.state.confirmation ? <Confirmation /> : ''}
        </>
      </form>
    );
  }
}

export default Form;
