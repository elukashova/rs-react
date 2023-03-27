import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ROUTES from './router/router';
import './App.css';

const App = (): JSX.Element => {
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
};

export default App;
