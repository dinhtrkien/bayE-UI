import routes from '@src/constants/route';
import Sell from '@src/actors/seller/pages/Seller';
import Form from '@src/actors/buyer/pages/Form';
import Home from '@src/pages/Home';
import CarDetailPage from '@src/actors/buyer/pages/CarDetailPage';
import Login from '@src/pages/Login';
import AddCar from '@src/actors/seller/pages/AddCar';

export default [
  {
    path: routes.ADDCAR,
    component: AddCar,
    exact: true,
    restricted: true,
    isPrivate: false,
  },
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
  {
    path: routes.CAR_DETAIL,
    component: CarDetailPage,
    exact: true,
    restricted: false,
    isPrivate: false,
  },
];
