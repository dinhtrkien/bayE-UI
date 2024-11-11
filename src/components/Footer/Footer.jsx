import React from 'react';
import FooterLinks from '../FooterLinks';
import FooterBottom from '../FooterBottom';

function Footer() {
  return (
    <footer className="flex overflow-hidden flex-col justify-center items-center px-20 py-12 bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center items-center w-full max-w-[1218px] max-md:max-w-full">
        <div className="flex w-full bg-stone-500 bg-opacity-30 min-h-[1px]" />
        <FooterLinks />
        <div className="flex mt-10 w-full bg-stone-500 bg-opacity-30 min-h-[1px]" />
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
