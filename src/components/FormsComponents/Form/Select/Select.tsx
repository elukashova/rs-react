import styles from '../Form.module.css';
import React, { Component } from 'react';
import data from '../../../../assets/data/cardsData';
import Hut from '../../../HomeComponents/Card/Card.types';
import { DEFAULT_OPTION, Errors } from '../Form.consts';
import ValidationError from '../Error/Error';

type Props = {
  refObj: React.RefObject<HTMLSelectElement>;
  errState: boolean;
};

class Select extends Component<Props> {
  render() {
    const { refObj, errState } = this.props;
    const dataWithDefault: string[] = [DEFAULT_OPTION];
    data.forEach((item: Hut) => dataWithDefault.push(item.name));
    return (
      <div>
        <legend className={styles.label}>Stayed at</legend>
        <select className={styles.input} ref={refObj} name="hut">
          {dataWithDefault.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        {!errState && <ValidationError message={Errors.required} />}
      </div>
    );
  }
}

export default Select;
