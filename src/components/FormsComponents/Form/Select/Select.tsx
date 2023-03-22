import styles from '../Form.module.css';
import React, { Component } from 'react';
import data from '../../../../assets/data/cardsData';
import Hut from '../../../HomeComponents/Card/Card.types';

class Select extends Component<{ reference: React.RefObject<HTMLSelectElement> }> {
  render() {
    const { reference } = this.props;
    const dataWithDefault: string[] = ['--Choose a hut--'];
    data.forEach((item: Hut) => dataWithDefault.push(item.name));
    return (
      <div>
        <legend className={styles.label}>Stayed at</legend>
        <select className={styles.input} ref={reference} name="hut" required>
          {dataWithDefault.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Select;
