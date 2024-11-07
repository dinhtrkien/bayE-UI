import React from 'react';

const CarCard = ({ model, year, price, distance, sellerName, description }) => {
  return (
    <div className="max-w-2xl mx-auto rounded-lg shadow-lg border border-gray-300 p-4 flex items-start space-x-4">
      {/* Car Image */}
      <div className="w-1/3">
        <img src="https://via.placeholder.com/150" alt="Car" className="rounded-lg" />
      </div>

      {/* Car Details */}
      <div className="w-2/3">
        {/* Title and Heart Icon */}
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold">{model} ({year})</h2>
          <button className="text-gray-500 hover:text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </button>
        </div>

        {/* Condition and Price */}
        <div className="text-gray-500">Used</div>
        <div className="text-xl font-bold mt-1">Price: ${price}</div>

        {/* Additional Details */}
        <div className="text-sm text-gray-600 mt-2">
          <p>Distance: {distance} km</p>
          <p>Seller name: {sellerName}</p>
          <p>Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
