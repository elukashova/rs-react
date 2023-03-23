import styles from './Form.module.css';
import React, { Component, SyntheticEvent } from 'react';
import Review from '../ReviewCard/ReviewCard.types';
import StarRadio from './Star/Star';
import Input from './Input/Input';
import Select from './Select/Select';
import { DEFAULT_OPTION, Errors, INPUTS, RATINGS, VALID_NAME } from './Form.consts';
import Submit from './Submit/Submit';
import ValidationError from './Error/Error';

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
  private privacyInput: React.RefObject<HTMLInputElement> = React.createRef();
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

      console.log(review);
      this.handleConfirmation();
      this.props.reviewCallback(review);
      this.resetForm();
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
    setTimeout(() => this.handleConfirmation(), 2000);
  }

  handleConfirmation(): void {
    this.setState({
      confirmation: !this.state.confirmation,
    });
  }

  validateForm(): boolean {
    const currentState: State = {
      ...this.state,
      form: {
        name: this.validateTextInput(),
        hut: this.validateSelectInput(),
        arrival: Boolean(this.arrivalInput.current?.value),
        departure: Boolean(this.arrivalInput.current?.value),
        rating: this.validateRadioInput(),
        image: this.validateFileInput(),
        privacy: Boolean(this.privacyInput.current?.checked) ?? '',
      },
    };
    this.setState(currentState);

    return Object.values(currentState.form).every((value) => value === true);
  }

  validateTextInput(): boolean {
    if (!this.nameInput.current?.value || !VALID_NAME.test(this.nameInput.current.value)) {
      return false;
    }
    return true;
  }

  validateSelectInput(): boolean {
    return this.selectHut.current?.value !== DEFAULT_OPTION;
  }

  validateRadioInput(): boolean {
    return this.ratingInputs.some((input) => input.current?.checked);
  }

  validateFileInput(): boolean {
    if (this.avatarInput.current) {
      const fileName: string = this.avatarInput.current.value;
      const idx: number = fileName.lastIndexOf('.') + 1;
      const ext: string = fileName.substring(idx, fileName.length).toLowerCase();
      return ['jpg', 'jpeg', 'png'].some((fileExt) => ext === fileExt);
    }
    return false;
  }

  render(): JSX.Element {
    const { name, hut, arrival, departure, rating, image, privacy } = this.state.form;
    return (
      <form className={styles.form} ref={this.reviewForm} onSubmit={this.handleSubmit}>
        <Input {...INPUTS.name} refObj={this.nameInput} errState={name} />
        <Select refObj={this.selectHut} errState={hut} />

        <div className={styles.stay}>
          {[this.arrivalInput, this.departureInput].map((input, idx) => (
            <Input
              key={idx}
              {...(idx === 0 ? { ...INPUTS.arrival } : { ...INPUTS.departure })}
              refObj={input}
              errState={idx === 0 ? arrival : departure}
            />
          ))}
        </div>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Your review</legend>
          <div className={styles.stars}>
            {RATINGS.map((num) => (
              <StarRadio key={num} refObj={this.ratingInputs[num - 1]} rating={`${num}`} />
            ))}
          </div>
          {!rating && <ValidationError message={Errors.required} />}
        </fieldset>

        <div className={styles.avatar}>
          <Input {...INPUTS.image} refObj={this.avatarInput} errState={image} />
        </div>
        <div className={styles.wrapper}>
          <Input {...INPUTS.privacy} refObj={this.privacyInput} errState={privacy} />
        </div>

        <Submit refObj={this.submitInput} errState={this.state.confirmation} />
      </form>
    );
  }
}

export default Form;
