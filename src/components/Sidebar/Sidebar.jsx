import React from 'react';

const menuItems = [
  { label: 'Manage My Account', active: false },
  { label: 'My Profile', active: true },
  { label: 'My Informations', active: false },
  { label: 'My Orders', active: false },
  { label: 'Followed Listings', active: false },
  { label: 'My Purchased', active: false },
  { label: 'My WishList', active: false }
];

export function Sidebar() {
  return (
    <nav className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
      <ul className="flex flex-col text-base font-medium max-md:mt-10">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`${
              item.active ? 'text-red-500' : 'text-black opacity-50'
            } ${index > 0 ? 'mt-2' : ''}`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
