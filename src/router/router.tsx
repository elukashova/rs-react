import React from 'react';
import NotFoundPage from '../pages/404/404';
import AboutPage from '../pages/About/About';
import HomePage from '../pages/Home/Home';
import MainLayout from '../pages/Layout';
import { Router } from './router.types';

const ROUTES: Router = {
  path: '/*',
  key: 'app',
  element: <MainLayout />,
  title: '',
  subroutes: [
    {
      path: '/',
      key: 'home',
      title: 'home',
      index: true,
      element: <HomePage />,
    },
    {
      path: 'about',
      key: 'about',
      title: 'about us',
      element: <AboutPage />,
    },
    {
      path: '*',
      key: 'notFound',
      title: '404 not found',
      element: <NotFoundPage />,
    },
  ],
};

export default ROUTES;
