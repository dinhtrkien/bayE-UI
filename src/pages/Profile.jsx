import React from 'react';
import { useSelector } from 'react-redux';
import UserProfile from '../components/Profile/UserProfile';

const Login = () => {
  const user = useSelector((state) => state.user.user);

  return <UserProfile user={user} />;
};

export default Login;
