import React from 'react';

export default function AddCar() {
  return (
    <div className="w-full max-w-4xl p-6 mx-auto border border-gray-200 rounded-lg shadow-md">
      {/* Header */}
      <h1 className="mb-4 text-3xl font-bold">Add car info</h1>

      {/* Main Container */}
      <div className="flex flex-row space-x-8">
        {/* Image Upload Section */}
        <div className="flex items-center justify-center flex-1 h-48 bg-gray-100 rounded-lg">
          <img
            src="placeholder-image-path"
            alt="Car Preview"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Car Info Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Add Car Name</h2>
          <p className="mb-4 italic text-gray-500">
            Description: Add description here
          </p>

          {/* Price Range */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-700">$ 10000.00</span>
            <div className="w-3/5 mx-4">
              <input
                type="range"
                className="w-full"
                min="10000"
                max="42000"
                defaultValue="25000"
              />
            </div>
            <span className="text-gray-700">$ 42000.00</span>
          </div>

          {/* Price Label */}
          <div className="mb-4 text-lg font-bold">Price:</div>

          {/* Tag Input */}
          <div className="flex items-center space-x-2">
            <label htmlFor="tag" className="font-semibold text-gray-700">
              Tag:
            </label>
            <input
              type="text"
              id="tag"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter tag"
            />
          </div>
        </div>
      </div>

      {/* Thumbnail Images */}
      <div className="flex mt-4 space-x-4">
        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
}
