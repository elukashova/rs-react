import styles from '../Form.module.css';
import React, { Component } from 'react';

type Props = {
  reference: React.RefObject<HTMLInputElement>;
  type: string;
  name: string;
  className?: string;
  label?: string;
  onChange?: () => void;
};

class Input extends Component<Props> {
  render() {
    const { label, reference, type, name, className, onChange } = this.props;
    return (
      <label className={styles.label}>
        {label}
        <input
          className={className ? styles[className] : styles.input}
          ref={reference}
          type={type}
          name={name}
          required
          onChange={onChange}
        />
      </label>
    );
  }
}

export default Input;
