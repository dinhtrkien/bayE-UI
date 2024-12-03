import React from 'react';
import CardContainer from '@src/actors/buyer/components/Common/CardContainer';

const SellerInfoCard = ({ sellerData }) => {
  return (
    <CardContainer className="w-80 h-96 mx-auto bg-white rounded-xl shadow-lg p-8 text-center space-y-6 flex flex-col justify-between">
      {/* Seller Avatar */}
      <div className="flex justify-center">
        <img
          src="https://via.placeholder.com/80" // Replace with the actual image URL
          alt="Seller Avatar"
          className="w-20 h-20 rounded-full border-2 border-gray-200"
        />
      </div>
      {/* Seller Name and Location */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900">
          {sellerData?.Name}
        </h3>
        <p className="text-gray-500">{sellerData?.Location}</p>
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        <button className="w-full py-2 text-white bg-blue-600 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-blue-700 transition">
          Drive request
          <span className="ml-1">→</span>
        </button>

        <button className="w-full py-2 text-green-600 border border-green-600 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-green-50 transition">
          Call Seller
          <span className="ml-1">→</span>
        </button>
      </div>

      {/* View All Listings Link */}
      <div>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-700 font-medium flex items-center justify-center"
        >
          View All listing at this seller
          <span className="ml-1">→</span>
        </a>
      </div>
    </CardContainer>
  );
};

export default SellerInfoCard;
