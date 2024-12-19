import React from 'react';
import { useSelector } from 'react-redux';
import UserProfileInfo from '../components/Profile/UserProfileInfo';

const ProfileInfo = () => {
  const user = useSelector((state) => state.user.user);

  return <UserProfileInfo user={user} />;
};

export default ProfileInfo;
