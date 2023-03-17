import { ReactNode } from 'react';

export default interface RouteConfig {
  path?: string;
  key: string;
  element: ReactNode;
  title: string;
  index?: boolean;
}
