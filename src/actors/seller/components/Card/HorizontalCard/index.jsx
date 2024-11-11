import React from 'react';
export default function HorizontalCard({ car }) {
  return (
    <div className="w-full max-w-6xl shadow-xl card lg:card-side bg-base-100 max-h-96">
      <div className="card-body">
        <h2 className="card-title">Mercedes-Benz A32</h2>
        <p className="text-gray-500">Added {car.addedDate} days ago</p>
        <p className="text-gray-500">{car.viewedCount} recently</p>
        <p className="text-gray-500">Price: ${car.price}</p>
        <div className="justify-end card-actions">
          <div className="btn btn-primary" htmlFor="upload">
            {car.testRequestCount} waiting for car request
          </div>
        </div>
      </div>
      <figure>
        <img
          src="/src/mock/hyukohImage.jpg"
          // src='{children.url}'
          alt="Live from space album cover"
          className="object-cover w-32 h-32"
        />
      </figure>
    </div>
  );
}
