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
            {ROUTES.subroutes.map(({ key, index, path, element }) => {
              return <Route key={key} path={index ? '' : path} index={index} element={element} />;
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
