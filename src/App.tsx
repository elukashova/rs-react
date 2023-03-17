import React, { Component, ReactNode } from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ROUTES from './router/router';
import MainLayout from './pages/MainLayout';
import RouteConfig from './router/router.types';

interface AppProps {
  title: string;
  page: ReactNode;
}

class AppWrapper extends Component<AppProps> {
  render(): JSX.Element {
    return (
      <>
        <Header title={this.props.title} />
        <MainLayout page={this.props.page} />
      </>
    );
  }
}

export default class App extends Component {
  render(): JSX.Element {
    return (
      <BrowserRouter>
        <Routes>
          {ROUTES.map((route: RouteConfig) => {
            return (
              <Route
                key={route.key}
                path={route.path}
                index={route.index}
                element={<AppWrapper title={route.title} page={route.element} />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    );
  }
}
