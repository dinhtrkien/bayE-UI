import { ToolIcon } from '@src/components/Icon/ToolIcon';
import React from 'react';
import date from 'date-and-time'
import formatPrice from '@src/utils/formatPrice';

export default function HorizontalCard({ id, name, addedDate, price, viewedCount = 6, testRequestCount, imageURL, openWaiterList }) {

  const dateCount = date.subtract(new Date(), new Date(addedDate));
  const dayCount = dateCount.toDays() > 24 ? `${parseInt(dateCount.toDays())} days` : `${parseInt(dateCount.toHours())} hours`;

  return (
    <a href={`/car/${id}`}>
    <div className="flex items-start w-full max-w-4xl space-x-4 shadow-lg  bg-white rounded-2xl max-h-56 hover:shadow-xl">
      <div className=" flex flex-row w-3/5 gap-2 overflow-hidden max-h-56">
        <img
          src={imageURL[0]}
          alt="Car"
          className="object-cover w-9/12 rounded-2xl max-h-fit"
        />
        <div className="flex flex-col gap-2 justify-center">
            <img
            src={imageURL[1]}
            alt="Car"
            className="object-cover rounded-lg max-h-1/2 "
          />{' '}
            <img
            src={imageURL[2]}
            alt="Car"
            className="object-cover rounded-lg max-h-1/2 "
          />
        </div>
      </div>
      {/* Car Details */}
      <div className="w-2/5 p-5">
        {/* Title and Heart Icon */}
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-extrabold">{name.slice(0,31).trim()}...</h2>
        </div>

        {/* Condition and Price */}
        <p className="text-lg text-gray-500 ">Added {dayCount} ago</p>
        <div className="mt-2 text-sm text-gray-600">
          <p>{viewedCount} viewed recently</p>
        </div>

        <h1 className="text-xl font-bold">Price: ${formatPrice(price)}</h1>
        <div className="flex items-end justify-between mt-2">
          <div className=" card-actions">
            <button
              type="button"
              className="btn btn-primary"
              htmlFor="upload"
              onClick={openWaiterList}
            >
              {testRequestCount} waiting for car request
            </button>
          </div>
          <ToolIcon />
        </div>

        {/* Additional Details */}
      </div>
    </div>
    </a>

  );
}
