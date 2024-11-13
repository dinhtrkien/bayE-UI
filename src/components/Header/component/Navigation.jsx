import React from 'react';

function Navigation() {
  const navItems = ['Home', 'Contact', 'About'];

  return (
    <nav className="flex gap-10 items-start px-8 text-base text-center text-black whitespace-nowrap min-w-[240px] max-md:px-5">
      {navItems.map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="w-12">
          {item}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;