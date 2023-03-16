import React, { Component, ReactNode } from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ROUTES from './router/router';
import MainLayout from './pages/MainLayout';

interface AppProps {
  title: string;
  page: ReactNode;
}

class PageWrapper extends Component<AppProps> {
  render(): JSX.Element {
    return (
      <>
        <Header title={this.props.title} />
        {this.props.page}
      </>
    );
  }
}

export default class App extends Component {
  render(): JSX.Element {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.path} element={ROUTES.element}>
            {ROUTES.subroutes.map((subroute) => {
              return (
                <Route
                  key={subroute.key}
                  path={subroute.path}
                  index={subroute.index}
                  element={<PageWrapper title={subroute.title} page={subroute.element} />}
                />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
