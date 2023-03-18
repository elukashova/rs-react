import React, { Component, ReactNode } from 'react';
import styles from './MainLayout.module.css';

interface MainProps {
  page: ReactNode;
}

class MainLayout extends Component<MainProps> {
  render(): JSX.Element {
    return (
      <>
        <main className={styles.main}>{this.props.page}</main>
      </>
    );
  }
}

export default MainLayout;
