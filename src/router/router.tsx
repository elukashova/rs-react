import React from 'react';
import NotFoundPage from '../pages/404/404';
import AboutPage from '../pages/About/About';
import HomePage from '../pages/Home/Home';
import RouteConfig from './router.types';

const ROUTES: RouteConfig[] = [
  {
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
];

export default ROUTES;
