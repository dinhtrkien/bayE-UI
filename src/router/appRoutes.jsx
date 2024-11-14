import routes from '@src/constants/route';
import Sell from '@src/actors/seller/pages/Seller';
import Form from '@src/actors/buyer/pages/Form';
import Home from '@src/pages/Home';
import CarDetail from '@src/actors/buyer/pages/CarDetail';
import Login from '@src/pages/Login';
import Register from '@src/pages/Register';
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
    path: routes.REGISTER,
    component: Register,
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
    component: CarDetail,
    exact: true,
    restricted: false,
    isPrivate: false,
  },
];
