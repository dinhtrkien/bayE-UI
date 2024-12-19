import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ROUTE from '@src/constants/route';

const RoleBasedRoute = ({ component: Component, requiredRole, ...rest }) => {
  const user = useSelector((state) => state.user.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.role === requiredRole ? (
          <Component {...props} />
        ) : (
          <Redirect to={ROUTE.HOME} />
        )
      }
    />
  );
};

export default RoleBasedRoute;
