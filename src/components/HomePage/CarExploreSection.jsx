import React from 'react';
import CarCard from '@components/CarCard';
import CarList from "@src/actors/buyer/components/Shop/CarList";
import Woodpecker from "@components/Woodpecker";

const CarExploreSection = ({ heading, subHeading, cars, href, loading, className }) => {
  return (
    <div className={className}>
      <div className="max-w-4xl mb-2">
        <h1 className="mb-2 text-4xl font-bold">{heading}</h1>
        <h2 className="text-2xl font-semibold text-gray-600">{subHeading}</h2>
      </div>
      <div className="space-y-6">
        <Woodpecker message={'Chờ xíu, đang tải....'} className='flex w-full mx-auto justify-center items-center' visible={loading}/>
        {
          loading ? null : <CarList cars={cars} className={'w-full'}/>
        }
      </div>
      <div className="mx-auto mt-4">
        <a href={href} className="font-semibold text-blue-600 hover:text-secondary hover:underline">
          See more cars
        </a>
      </div>
    </div>
  );
};

export default CarExploreSection;
