import routes from '@src/constants/route';
import Sell from '@src/actors/seller/pages/Seller';
import Form from '@src/actors/buyer/components/Popup/Form';
import Home from '@src/pages/Home';
import CarDetailPage from '@src/actors/buyer/pages/CarDetailPage';
import Login from '@src/pages/Login';
import Register from '@src/pages/Register';
import Profile from '@src/pages/Profile';
import ProfileInfo from '@src/pages/ProfileInfo';
import AddCar from '@src/actors/seller/pages/AddCar';
import CarWishlist from '@src/actors/buyer/pages/WishList';
import Shopping from '@src/actors/buyer/pages/Shopping';
import UserList from '@src/actors/admin/components/UserList';
import CarList from '@src/actors/admin/components/CarList';
import Admin from '@src/actors/admin/pages/Admin';
import NewsPage from '@src/actors/buyer/pages/auctionNews'
import AddAuction from '@src/actors/seller/pages/AddAuction';
import Auction from '@src/actors/buyer/pages/Auction';
export default [
  {
    path: routes.AUCTION,
    component: Auction,
    exact: true,
    restricted: false,
    isPrivate: false,
  },
  {
    path: routes.ADDCAR,
    component: AddCar,
    exact: true,
    restricted: true,
    isPrivate: true,
    requiredRole: 'SELLER',
  },
  {
    path: routes.ADDAUCTION,
    component: AddAuction,
    exact: true,
    restricted: false,
    isPrivate: false,
  },
  {
    path: routes.SELL,
    component: Sell,
    exact: true,
    restricted: true,
    isPrivate: true,
    requiredRole: 'SELLER',
  },
  {
    path: routes.FORM,
    component: Form,
    exact: true,
    restricted: true,
    isPrivate: true,
    requiredRole: 'BUYER',
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
    path: routes.PROFILE,
    component: Profile,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.PERSONAL_INFO,
    component: ProfileInfo,
    exact: true,
    restricted: false,
    isPrivate: true,
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
  {
    path: routes.SHOPPING,
    component: Shopping,
    exact: true,
    restricted: false,
    isPrivate: false,
  },
  {
    path: routes.WISHLIST,
    component: CarWishlist,
    exact: true,
    restricted: false,
    isPrivate: true,
    requiredRole: 'BUYER',
  },
  {
    path: routes.ADMIN,
    component: Admin,
    exact: true,
    restricted: true,
    isPrivate: true,
    isAdmin: true,
  },
  {
    path: routes.USER_LIST,
    component: UserList,
    exact: true,
    restricted: true,
    isPrivate: true,
    isAdmin: true,
  },
  {
    path: routes.CAR_LIST,
    component: CarList,
    exact: true,
    restricted: true,
    isPrivate: true,
    isAdmin: true,
  },
  {
    path: routes.NEWSPAGE,
    component: NewsPage,
    exact: true,
    restricted: false,
    isPrivate: true,
    requiredRole: 'BUYER',
  },
  {
    path: routes.NEWSPAGE,
    component: NewsPage,
    exact: true,
    restricted: false,
    isPrivate: false,
  },
];
