import { RouteConfig } from 'react-router-config';

import App from '../app';
import AsyncHome, { loadData as loadHomeData } from '../pages/Home';
import AsyncUserInfo, { loadData as loadUserInfoData } from '../pages/UserInfo';
import NotFound from '../pages/NotFound';

export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: AsyncHome, // Add your page here
        loadData: loadHomeData, // Add your pre-fetch method here
      },
      {
        path: '/UserInfo/:id',
        component: AsyncUserInfo,
        loadData: loadUserInfoData,
      },
      {
        component: NotFound,
      },
    ],
  },
] as RouteConfig[];
