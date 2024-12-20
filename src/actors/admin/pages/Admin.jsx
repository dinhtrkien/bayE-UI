import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import UserList from '../components/UserList';
import CarList from '../components/CarList';

const Admin = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to={`${url}/users`}>User List</Link></li>
          <li><Link to={`${url}/cars`}>Car List</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path={`${path}/users`} component={UserList} />
        <Route path={`${path}/cars`} component={CarList} />
      </Switch>
    </div>
  );
};

export default Admin;
