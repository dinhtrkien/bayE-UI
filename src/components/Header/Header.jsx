/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../redux/userSlice';
import Logo from './component/Logo';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    console.log('Current user:', user);
  }, [user]);

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-white shadow">
      <div className="container flex items-center justify-between py-4 mx-auto">
        <div className="flex items-center">
          <Logo />
          <nav className="space-x-4">
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-500">
              About
            </a>
          </nav>
        </div>
        <div className="flex">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow px-4 py-2 pr-10 border border-gray-300 rounded-md"
            />
            <button className="absolute top-0 right-0 px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          {user ? (
            <button
              onClick={handleLogoutClick}
              className="px-4 py-2 ml-4 text-white bg-blue-500 rounded-md cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <>
              <a
                href="/login"
                className="px-4 py-2 ml-4 text-white bg-blue-500 rounded-md cursor-pointer"
              >
                Login
              </a>
              <a
                href="/register"
                className="px-4 py-2 ml-4 text-white bg-blue-500 rounded-md cursor-pointer"
              >
                Sign Up
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
