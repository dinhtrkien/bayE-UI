import React from 'react';

export default function VerticalCard({ car }) {
  return (
    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg min-w-72 w-72">
      {/* Image Section */}
      <div className="relative">
        <img
          src={car.image} // Replace with your image URL
          alt={car.name}
          className="object-cover w-full h-48"
        />
        {/* Badge */}
        <div className="absolute px-3 py-1 text-sm font-semibold text-white bg-green-600 rounded-full top-2 left-2">
          {car.duration}
        </div>
        {/* Bookmark Icon */}
        <div className="absolute p-2 bg-white rounded-full shadow-md top-2 right-2">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5 3a2 2 0 00-2 2v14l7-3 7 3V5a2 2 0 00-2-2H5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{car.name}</h2>
        <p className="text-sm text-gray-500">{car.duration} to sell</p>
        <ul className="mt-2 space-y-1 text-sm text-gray-700">
          <li className="flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414L9 14.414l-3.707-3.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Customer feedback
          </li>
          <li className="flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414L9 14.414l-3.707-3.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            ?????
          </li>
        </ul>
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold">${car.price}</span>
          <a
            href="/details" // Replace with your link
            className="flex items-center text-sm text-blue-600 hover:underline"
          >
            View Details
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
