import { ReactNode } from 'react';

export interface RouteConfig {
  path?: string;
  key: string;
  element: ReactNode;
  title: string;
  index?: boolean;
}

export interface RoutesConfig extends RouteConfig {
  subroutes: RouteConfig[];
}
