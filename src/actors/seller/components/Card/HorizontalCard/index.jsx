import { ToolIcon } from '@src/components/Icon/ToolIcon';
import React from 'react';

export default function HorizontalCard({ car, openWaiterList }) {
  return (
    <div className="flex items-start w-full max-w-4xl space-x-4 border border-gray-500 shadow-lg rounded-2xl max-h-56">
      <div className="flex flex-row w-3/5 gap-2 overflow-hidden max-h-56">
        <img
          src={car.image}
          alt="Car"
          className="object-cover w-9/12 rounded-2xl max-h-fit"
        />
        <div className="flex flex-col gap-2">
          <img
            src={car.image}
            alt="Car"
            className="object-cover rounded-lg h-1/2 "
          />{' '}
          <img
            src={car.image}
            alt="Car"
            className="object-cover rounded-lg h-1/2 "
          />
        </div>
      </div>
      {/* Car Details */}
      <div className="w-2/5 p-5">
        {/* Title and Heart Icon */}
        <div className="flex items-start justify-between">
          <h2 className="text-3xl font-semibold">{car.name}</h2>
        </div>

        {/* Condition and Price */}
        <p className="text-lg text-gray-500 ">Added {car.addedDate} days ago</p>
        <div className="mt-2 text-sm text-gray-600">
          <p>{car.viewedCount} viewed recently</p>
        </div>

        <h1 className="text-xl font-bold">Price: ${car.price}</h1>
        <div className="flex items-end justify-between mt-2">
          <div className=" card-actions">
            <button
              type="button"
              className="btn btn-primary"
              htmlFor="upload"
              onClick={openWaiterList}
            >
              {car.testRequestCount} waiting for car request
            </button>
          </div>
          <ToolIcon />
        </div>

        {/* Additional Details */}
      </div>
    </div>
  );
}
