import React from 'react';
import InstallmentCalculator from '@src/actors/buyer/components/CarDetail/InstallmentCalculator';
import CarTitle from '@src/actors/buyer/components/CarDetail/CarTitle';
import ImageCarousel from '@src/actors/buyer/components/CarDetail/ImageCarousel';
import CarOverview from '@src/actors/buyer/components/CarDetail/CarOverview';
import CarDescription from '@src/actors/buyer/components/CarDetail/CarDescription';
import SellerInfoCard from '@src/actors/buyer/components/CarDetail/SellerInfoCard';
import Map from '@src/actors/buyer/components/CarDetail/Map';
import mockCarData from '@src/actors/buyer/mockCar';

const CarDetailPage = () => {
  return (
    <>
      <div className="container px-40">
        <CarTitle carData={mockCarData[0]} />
      </div>
      <div className="container px-28">
        <ImageCarousel images={mockCarData[0].images} />
      </div>

      <div className="max-w-6xl mx-auto flex justify-between mt-10">
        <div className="w-3/4 flex flex-col">
          <CarOverview carData={mockCarData[0]} />
          <hr className="my-8" />
          <CarDescription description={mockCarData[0].description} />
        </div>

        <div className="w-1/4 ml-8">
          <SellerInfoCard />
        </div>
      </div>
      <InstallmentCalculator />
      <Map />
    </>
  );
};

export default CarDetailPage;
