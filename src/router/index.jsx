import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

import Layout from '@src/containers/Layout';
import ROUTE from '@src/constants/route';
import { getCookie } from '@src/utils/cookie';

import appRoutes from './appRoutes';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import RoleBasedRoute from './RoleBasedRoute';
import AdminRoute from './AdminRoute';
import { loginSuccess } from '../redux/userSlice';

const PrivateApp = () => {
  const privateRoutes = appRoutes.filter((route) => route.isPrivate && !route.requiredRole);
  const roleBasedRoutes = appRoutes.filter((route) => route.requiredRole);
  const adminRoutes = appRoutes.filter((route) => route.isAdmin);

  return (
    <Layout>
      <Switch>
        {privateRoutes.map((privateRoute) => (
          <PrivateRoute
            path={privateRoute.path}
            component={privateRoute.component}
            exact
            key={privateRoute.path}
          />
        ))}
        {roleBasedRoutes.map((roleBasedRoute) => (
          <RoleBasedRoute
            path={roleBasedRoute.path}
            component={roleBasedRoute.component}
            exact
            key={roleBasedRoute.path}
            requiredRole={roleBasedRoute.requiredRole}
          />
        ))}

        {adminRoutes.map((adminRoute) => (
          <AdminRoute
            path={adminRoute.path}
            component={adminRoute.component}
            exact
            key={adminRoute.path}
          />
        ))}

        <Redirect to={ROUTE.HOME} />
      </Switch>
    </Layout>
  );
};

const AppRouter = () => {
  const [isFirstTime, setIsFirstTime] = useState(true);
  const dispatch = useDispatch();
  const { accessToken, verifying } = useSelector((state) => state.user);

  useEffect(() => {
    if (isFirstTime) {
      nprogress.start();
      setIsFirstTime(false);
    } else {
      nprogress.done();
    }
  }, [isFirstTime]);

  useEffect(() => {
    if (!accessToken) {
      const accessTokenFromCookie = getCookie('accessToken');
      if (accessTokenFromCookie) {
        // Dispatch action to verify token
        dispatch(loginSuccess({ accessToken: accessTokenFromCookie }));
      }
    }

    setIsFirstTime(false);
  }, [accessToken, dispatch]);

  if (isFirstTime || verifying) {
    return 'loading';
  }

  const publicRoutes = appRoutes.filter((route) => !route.isPrivate);

  return (
    <BrowserRouter>
      <Switch>
        {publicRoutes.map((publicRoute) => (
          <PublicRoute
            exact
            path={publicRoute.path}
            component={publicRoute.component}
            restricted={publicRoute.restricted}
            key={publicRoute.path}
          />
        ))}

        <PrivateRoute component={PrivateApp} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
