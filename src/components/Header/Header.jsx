import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SearchComponent from './SearchComponent';
import LoginButton from './LoginButton';

function Header() {
  return (
    <header className="flex overflow-hidden flex-col pt-4 w-full bg-white max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-center items-center self-center max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
          <Logo />
          <Navigation />
        </div>
        <div className="flex gap-6 items-center self-stretch my-auto min-w-[240px]">
          <SearchComponent />
          <LoginButton />
        </div>
      </div>
      <div className="flex mt-4 w-full bg-stone-500 bg-opacity-30 min-h-[1px] max-md:max-w-full" />
    </header>
  );
}

export default Header;
