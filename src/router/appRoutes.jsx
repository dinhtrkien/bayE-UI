import routes from '@src/constants/route';
import Sell from '@src/actors/seller/pages/Sell';
import Form from '@src/actors/buyer/pages/Form';
import Home from '@src/pages/Home';

import Login from '@src/pages/Login';

export default [
  {
    path: routes.SELL,
    component: Sell,
    exact: true,
    restricted: true,
    isPrivate: false,
  },
  {
    path: routes.FORM,
    component: Form,
    exact: true,
    restricted: true,
    isPrivate: false,
  },
  {
    path: routes.LOGIN,
    component: Login,
    exact: true,
    restricted: true,
    isPrivate: false,
  },
  {
    path: routes.HOME,
    component: Home,
    exact: true,
    restricted: false,
    isPrivate: false,
  },
];
