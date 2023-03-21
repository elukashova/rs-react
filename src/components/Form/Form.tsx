import styles from './Form.module.css';
import React, { Component } from 'react';
import data from '../../assets/data/cardsData';
import CardType from '../Card/Card.types';

class Form extends Component<Record<string, never>> {
  public nameInput: React.RefObject<HTMLInputElement> | null;
  public arrivalInput: React.RefObject<HTMLInputElement> | null;
  public departureInput: React.RefObject<HTMLInputElement> | null;
  public select: React.RefObject<HTMLSelectElement> | null;
  public checkbox: React.RefObject<HTMLInputElement> | null;
  public radioInput: React.RefObject<HTMLFieldSetElement> | null;
  public uploadInput: React.RefObject<HTMLInputElement> | null;

  constructor(props: Record<string, never>) {
    super(props);
    this.nameInput = React.createRef();
    this.arrivalInput = React.createRef();
    this.departureInput = React.createRef();
    this.select = React.createRef();
    this.checkbox = React.createRef();
    this.radioInput = React.createRef();
    this.uploadInput = React.createRef();
  }

  render() {
    return (
      <form className={styles.form}>
        <label className={styles.label}>
          Name
          <input className={styles.input} ref={this.nameInput} type="text" name="text" />
        </label>

        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>Stayed at</legend>
          <select className={styles.input} ref={this.select} name="hut">
            {data.map((item: CardType) => (
              <option key={item.id}>{item.name}</option>
            ))}
          </select>
        </fieldset>

        <div className={styles.stay}>
          <label className={styles.label}>
            From:
            <input className={styles.input} ref={this.arrivalInput} type="date" name="date" />
          </label>
          <label className={styles.label}>
            To:
            <input className={styles.input} ref={this.departureInput} type="date" name="date" />
          </label>
        </div>

        <fieldset className={styles.fieldset} ref={this.radioInput}>
          <legend className={styles.label}>Your review</legend>
          <div className={styles.stars}>
            <label className={styles['label-radio']} htmlFor="radio5">
              5
            </label>
            <input className={styles.radio} type="radio" value="5" name="review" id="radio5" />
            <label className={styles['label-radio']} htmlFor="radio4">
              4
            </label>
            <input className={styles.radio} type="radio" value="4" name="review" id="radio4" />
            <label className={styles['label-radio']} htmlFor="radio3">
              3
            </label>
            <input className={styles.radio} type="radio" value="3" name="review" id="radio3" />
            <label className={styles['label-radio']} htmlFor="radio2">
              2
            </label>
            <input className={styles.radio} type="radio" value="2" name="review" id="radio2" />
            <label className={styles['label-radio']} htmlFor="radio1">
              1
            </label>
            <input className={styles.radio} type="radio" value="1" name="review" id="radio1" />
          </div>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <div className={styles.avatar}>
            <label className={styles.label}>Add your avatar</label>
            <input className={styles.file} ref={this.uploadInput} type="file" />
          </div>
        </fieldset>

        <div className={styles.privacy}>
          <label>
            <input className={styles.checkbox} ref={this.checkbox} type="checkbox" name="privacy" />
          </label>
          I consent to the processing of my personal data
        </div>

        <input className={styles.submit} type="submit" value="Send" />
      </form>
    );
  }
}

export default Form;
