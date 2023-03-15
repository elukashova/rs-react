import React, { ReactNode } from 'react';
import NotFoundPage from '../pages/404/404';
import AboutPage from '../pages/About/About';
import HomePage from '../pages/Home/Home';
import MainLayout from '../pages/MainLayout';

interface RouteConfig {
  path?: string;
  key: string;
  element: ReactNode;
  title: string;
  index?: boolean;
}

interface Router extends RouteConfig {
  subroutes: RouteConfig[];
}

const ROUTES: Router = {
  path: '/',
  key: 'app',
  element: <MainLayout />,
  title: '',
  subroutes: [
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
  ],
};

export default ROUTES;
