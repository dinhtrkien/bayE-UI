import React from 'react';
import CarCard from '@components/CarCard';

const CarExploreSection = ({ heading, subHeading, cars, href, loading }) => {
  console.log(cars);
  return (
    <>
      <div className="max-w-4xl">
        <h1 className="mb-2 text-4xl font-bold">{heading}</h1>
        <h2 className="text-2xl font-semibold text-gray-600">{subHeading}</h2>
      </div>
      <div className="space-y-6">
        {cars?.map((car) => (
          <CarCard key={car?.carId} car={car} />
        ))}
      </div>
      <div className="p-4 mx-auto mt-4">
        <a href={href} className="font-semibold text-blue-600 hover:underline">
          See more cars
        </a>
      </div>
    </>
  );
};

export default CarExploreSection;
