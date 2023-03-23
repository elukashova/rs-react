import styles from '../Form.module.css';
import React, { Component } from 'react';
import data from '../../../../assets/data/cardsData';
import Hut from '../../../HomeComponents/Card/Card.types';
import { DEFAULT_OPTION } from '../Form.consts';

class Select extends Component<{ reference: React.RefObject<HTMLSelectElement> }> {
  render() {
    const { reference } = this.props;
    const dataWithDefault: string[] = [DEFAULT_OPTION];
    data.forEach((item: Hut) => dataWithDefault.push(item.name));
    return (
      <>
        <legend className={styles.label}>Stayed at</legend>
        <select className={styles.input} ref={reference} name="hut">
          {dataWithDefault.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </>
    );
  }
}

export default Select;
