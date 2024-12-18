import React from 'react';
import './styles.css'
const Woodpecker = ({ visible, className, message }) => {
  return (
    <div className={`${visible ? '' : 'hidden'} ${className} flex flex-col`}>
      <div className="loader"></div>
      <div className='text-3xl mt-2'>{message}</div>
    </div>
  );
};

export default Woodpecker;
