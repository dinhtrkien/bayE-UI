import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();
  const currentRoute = location.pathname;

  const menuItems = [
    {
      id: '1',
      label: 'Manage My Account',
      active: false,
      subItems: [
        { id: '1-1', label: 'My Profile', active: currentRoute === '/profile', link: '/profile' },
        { id: '1-2', label: 'My Informations', active: currentRoute === '/informations', link: '/informations' },
      ],
    },
    {
      id: '2',
      label: 'My Orders',
      active: false,
      subItems: [
        { id: '2-1', label: 'Followed Listings', active: currentRoute === '/followed-listings', link: '/followed-listings' },
        { id: '2-2', label: 'My Purchased', active: currentRoute === '/purchased', link: '/purchased' },
      ],
    },
    { id: '3', label: 'My Wishlist', active: currentRoute === '/wishlist', link: '/wishlist' },
  ];

  return (
    <nav className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
      <ul className="list-none">
        {menuItems.map((item) => (
          <React.Fragment key={item.id}>
            <li className="font-bold text-black opacity-100">{item.label}</li>
            {item.subItems && (
              <ul className="ml-4 mb-2 list-none">
                {item.subItems.map((subItem) => (
                  <li
                    key={subItem.id}
                    className={`${
                      subItem.active ? 'text-red-500' : 'text-black opacity-50'
                    } mt-2`}
                  >
                    <Link to={subItem.link}>{subItem.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
