import React, { useEffect, useState } from 'react';

const CarTitle = ({ carData }) => {
  // const [carData, setCarData] = useState(null);
  //
  // useEffect(() => {
  //   // Fetch car data from API
  //   const fetchCarData = async () => {
  //     try {
  //       const response = await fetch(`/cars/${carId}`);
  //       const data = await response.json();
  //       setCarData(data);
  //     } catch (error) {
  //       console.error('Error fetching car data:', error);
  //     }
  //   };
  //
  //   fetchCarData();
  // }, [carId]);
  //
  // if (!carData) return <div>Loading...</div>;

  return (
    <div className="flex justify-between items-center p-7">
      <div>
        <h1 className="text-2xl font-bold">
          {`${carData.make} ${carData.model} (${carData.year})`}
        </h1>
        <p className="text-gray-600">{carData.shortDescription}</p>
      </div>
      <div className="text-right">
        <div className="text-right flex space-x-4">
          {/* Compare button */}
          <button className="flex items-center text-gray-600 border border-gray-300 px-3 py-2 rounded-full transition-colors hover:border-[#405FF2] hover:text-[#405FF2]">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" strokeLinecap="round" />
                <line x1="8" y1="12" x2="16" y2="12" strokeLinecap="round" />
              </svg>
            </span>
            <span className="ml-2">Compare</span>
          </button>
          {/* Add to Favourites button */}
          <button className="flex items-center text-gray-600 border border-gray-300 px-3 py-2 rounded-full transition-colors hover:border-red-500 hover:text-red-500">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </span>
            <span className="ml-2">Add to Favourites</span>
          </button>
        </div>
        <h2 className="text-right text-3xl font-bold pt-1.5">
          ${carData.price.toLocaleString()}
        </h2>
      </div>
    </div>
  );
};
export default CarTitle;
