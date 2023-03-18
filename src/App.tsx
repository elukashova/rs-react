import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ROUTES from './router/router';
import './App.css';

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
                  path={subroute.index ? '' : subroute.path}
                  index={subroute.index}
                  element={subroute.element}
                />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
