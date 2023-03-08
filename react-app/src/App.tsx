import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/404';
import { MainPage } from './pages/Main';
import { AboutPage } from './pages/About';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
