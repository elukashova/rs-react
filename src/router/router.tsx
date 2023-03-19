import React from 'react';
import NotFoundPage from '../pages/404/404';
import AboutPage from '../pages/About/About';
import HomePage from '../pages/Home/Home';
import Layout from '../pages/Layout';
import { RoutesConfig } from './router.types';

const ROUTES: RoutesConfig = {
  path: '/*',
  key: 'app',
  element: <Layout />,
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
