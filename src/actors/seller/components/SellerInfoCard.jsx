import React from 'react';
import CardContainer from '@src/actors/buyer/components/Common/CardContainer';

const SellerInfoCard = ({ avatar_url, name, location = 'Ha Noi', soldCarCount, sellingCarCount, successRate, phone }) => {
  ///TODO: Seller Data here
  return (
    <CardContainer className="w-80 h-96 mx-auto bg-white rounded-xl shadow-lg p-6 text-center space-y-6 flex flex-col justify-between">
      {/* Seller Avatar */}
      <div className="flex justify-center">
        <img
          src={avatar_url} // Replace with the actual image URL
          alt="Seller Avatar"
          className="w-20 h-20 rounded-full border-2 border-gray-200"
        />
      </div>
      {/* Seller Name and Location */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900">
          {name}
        </h3>
        <p className="text-gray-500 text-left">{location}</p>
      </div>

      {/* Buttons */}
        {/* Stats Section */}
        <div className="flex justify-around mt-4 border-2 rounded-2xl pt-4 pb-3 w-full">
          <div className="text-center w-1/3">
            <p className="font-bold text-lg">{successRate}</p>
            <p className="text-sm text-gray-500">Sell Rate</p>
          </div>
          <div className="text-center w-1/3">
            <p className="font-bold text-lg">{soldCarCount}</p>
            <p className="text-sm text-gray-500">Sold Car</p>
          </div>
          <div className="text-center w-1/3">
            <p className="font-bold text-lg">{sellingCarCount}</p>
            <p className="text-sm text-gray-500">Selling Car</p>
          </div>
        </div>

      {/* View All Listings Link */}
      <div>

          <div className='font-semibold text-xl'>Phone Number</div>
          <p className="ml-1">→{phone}→</p>
      </div>
    </CardContainer>
  );
};

export default SellerInfoCard;
