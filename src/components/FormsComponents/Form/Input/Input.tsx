import styles from '../Form.module.css';
import React, { Component } from 'react';

type Props = {
  refObj: React.RefObject<HTMLInputElement>;
  type: string;
  className?: string;
  label?: string;
  accept?: string;
  value?: string;
  id?: string;
  name?: string;
  labelClass?: string;
};

class LabelInput extends Component<Props> {
  render(): JSX.Element {
    const { label, refObj, className, type, labelClass, ...props } = this.props;
    return (
      <>
        <label className={labelClass ? styles[labelClass] : styles.label}>
          {label}
          <input className={styles[type]} ref={refObj} data-testid={type} type={type} {...props} />
        </label>
      </>
    );
  }
}

export default LabelInput;
