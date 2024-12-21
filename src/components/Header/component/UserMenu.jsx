import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../redux/userSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogoutClick = () => {
    dispatch(logout());
    window.location.href = '/'; // Redirect to home page after logout
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative my-auto">
      <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
        <span className="ml-5 mr-2 text-grey-800">{user.name}</span>
        <img
          src={user.profilePicture || 'https://res.cloudinary.com/dhgwdfhcf/image/upload/v1734632425/profilePictures/wvk5hiy5xtwydttzqxa3.jpg'} // Replace with the actual avatar URL or a default avatar
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Edit Profile
          </a>
          <button onClick={handleLogoutClick} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
