import styles from '../Form.module.css';
import React, { Component } from 'react';
import { Errors } from '../Form.consts';
import ValidationError from '../Error/Error';

type Props = {
  refObj: React.RefObject<HTMLInputElement>;
  type: string;
  name: string;
  errState: boolean;
  className?: string;
  label?: string;
  format?: string;
  parentClass?: string;
};

class Input extends Component<Props> {
  defineErrorMessage(inputType: string): string {
    const errorMessage =
      inputType === 'text'
        ? `${Errors.required} ${Errors.name}`
        : inputType === 'file'
        ? `${Errors.avatar}`
        : `${Errors.required}`;

    return errorMessage;
  }

  render() {
    const { label, refObj, type, name, className, format, errState, parentClass } = this.props;
    return (
      <>
        <div className={parentClass ? styles[parentClass] : ''}>
          <label className={styles.label}>
            {label}
            <input
              className={className ? styles[className] : styles.input}
              ref={refObj}
              type={type}
              name={name}
              accept={format}
            />
          </label>
          {name === 'privacy' && <p>I consent to the processing of my personal data</p>}
          {!errState && name !== 'privacy' && (
            <ValidationError message={this.defineErrorMessage(type)} />
          )}
        </div>
        {!errState && name === 'privacy' && (
          <ValidationError message={this.defineErrorMessage(type)} />
        )}
      </>
    );
  }
}

export default Input;
