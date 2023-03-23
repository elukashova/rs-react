import styles from './Submit.module.css';
import React, { Component } from 'react';
import Confirmation from '../Confirmation/Confirmation';

type Props = {
  refObj: React.RefObject<HTMLInputElement>;
  errState: boolean;
};

class Submit extends Component<Props> {
  render(): JSX.Element {
    const { refObj, errState } = this.props;
    return (
      <div>
        <input className={styles.submit} ref={refObj} type="submit" value="Send" />
        {errState ? <Confirmation /> : ''}
      </div>
    );
  }
}

export default Submit;
