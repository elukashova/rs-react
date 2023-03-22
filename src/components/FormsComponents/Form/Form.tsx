import styles from './Form.module.css';
import React, { Component, SyntheticEvent } from 'react';
import Review from '../ReviewCard/ReviewCard.types';
import StarRadio from './Star/Star';
import Input from './Input/Input';
import Select from './Select/Select';
import Confirmation from './Confirmation/Confirmation';

type Props = {
  reviewCallback: (review: Review) => void;
};

type State = {
  confirmation: React.ReactNode | boolean;
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
      confirmation: true,
    };
  }

  handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const review: Review = {
      name: this.nameInput.current?.value ?? '',
      hut: this.selectHut.current?.value ?? '',
      arrival: this.arrivalInput.current?.value ?? '',
      departure: this.departureInput.current?.value ?? '',
      rating: this.pickRatingValue(),
      image: this.createAvatarUrl(this.avatarInput) ?? '',
      privacyConsent: Boolean(this.checkPrivacy.current?.value) ?? '',
    };

    //this.resetFormInputs();
    this.showConfirmation();
    this.resetForm();
    this.props.reviewCallback(review);
  }

  createAvatarUrl(input: React.RefObject<HTMLInputElement>): string | null {
    if (!input?.current?.files?.[0]) {
      return null;
    }

    return URL.createObjectURL(input?.current?.files[0]);
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
    // this.hideConfirmation();
  }

  showConfirmation(): void {
    this.setState({
      confirmation: <Confirmation />,
    });
  }

  hideConfirmation(): void {
    this.setState({
      confirmation: true,
    });
  }

  // resetFormInputs(): void {
  //   [this.nameInput, this.arrivalInput, this.departureInput].forEach((input) =>
  //     this.resetInput(input)
  //   );

  //   this.ratingInputs.forEach((input) => this.resetCheckboxAndRadio(input));
  // }

  // resetInput(input: React.RefObject<HTMLInputElement>): void {
  //   if (!input.current?.value) {
  //     return;
  //   }

  //   input.current.value = '';
  // }

  // resetCheckboxAndRadio(input: React.RefObject<HTMLInputElement>): void {
  //   if (!input.current?.checked) {
  //     return;
  //   }

  //   input.current.checked = false;
  // }

  render(): JSX.Element {
    const ratings: number[] = [5, 4, 3, 2, 1];
    const dateLabels: string[] = ['From:', 'To;'];
    return (
      <form className={styles.form} ref={this.reviewForm} onSubmit={this.handleSubmit}>
        <Input label="Name" reference={this.nameInput} type="text" name="text" />
        <Select reference={this.selectHut} />

        <div className={styles.stay}>
          {[this.arrivalInput, this.departureInput].map((input, idx) => (
            <Input
              key={idx}
              label={dateLabels[idx]}
              reference={input}
              type="date"
              name="date"
              className="date"
            />
          ))}
        </div>

        <div>
          <legend className={styles.legend}>Your review</legend>
          <div className={styles.stars}>
            {ratings.map((num) => (
              <StarRadio key={num} reference={this.ratingInputs[num - 1]} rating={`${num}`} />
            ))}
          </div>
        </div>

        <div className={styles.avatar}>
          <Input
            label="Add your avatar"
            reference={this.avatarInput}
            type="file"
            name="file"
            className="file"
          />
        </div>

        <div className={styles.privacy}>
          <Input
            reference={this.checkPrivacy}
            type="checkbox"
            className="checkbox"
            name="privacy"
          />
          <p>I consent to the processing of my personal data</p>
        </div>

        <>
          <input className={styles.submit} ref={this.submitInput} type="submit" value="Send" />
          {this.state.confirmation}
        </>
      </form>
    );
  }
}

export default Form;
