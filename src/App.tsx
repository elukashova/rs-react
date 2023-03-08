import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/404/404';
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About';
import Main from './pages/Main';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
