import React, { Component, ReactNode } from 'react';
import './MainLayout.styles.css';

interface MainProps {
  page: ReactNode;
}

class MainLayout extends Component<MainProps> {
  render(): JSX.Element {
    return (
      <>
        <main className="main">{this.props.page}</main>
      </>
    );
  }
}

export default MainLayout;
