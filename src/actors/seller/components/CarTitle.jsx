import React, { useEffect, useState } from 'react';
import Heading from '@components/Heading';
import IconButton from '@components/Button/IconButton';
import PlusRoundedIcon from '@components/Icon/PlusRoundedIcon';
import LoveIcon from '@components/Icon/LoveIcon';
import CloseIcon from '@src/components/Icon/CloseIcon';

const CarTitle = ({ title, price, closeButton }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Heading text={title} />
        <p className="text-gray-600">{title}</p>
      </div>
      <div className="text-right">
        <div className="text-right flex space-x-4">
          {/* Compare button */}
          {/* <IconButton
            text="Compare"
            className="hover:border-primary hover:text-primary"
            icon={<PlusRoundedIcon />}
          /> */}
          {/* Add to Favourites button */}
          <IconButton
            text="Close"
            onClick={closeButton}
            className="hover:border-red-500 hover:text-red-500"
            icon={<CloseIcon />}
          />

        </div>
        <h2 className="text-right text-3xl font-bold pt-1.5">
          ${price.toLocaleString()}
        </h2>
      </div>
    </div>
  );
};
export default CarTitle;
