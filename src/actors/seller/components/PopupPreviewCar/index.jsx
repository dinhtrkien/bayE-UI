import React from 'react';
import InstallmentCalculator from '@src/actors/buyer/components/CarDetail/InstallmentCalculator';
import CarTitle from '@src/actors/buyer/components/CarDetail/CarTitle';
import ImageCarousel from '@src/actors/buyer/components/CarDetail/ImageCarousel';
import CarOverview from '@src/actors/buyer/components/CarDetail/CarOverview';
import CarDescription from '@src/actors/buyer/components/CarDetail/CarDescription';
import SellerInfoCard from '@src/actors/buyer/components/CarDetail/SellerInfoCard';
import Map from '@src/actors/buyer/components/CarDetail/Map';
import mockCarData from '@src/actors/buyer/mockCar';

const PopupPreviewCar = ({props}) => {
  return (
    <div className="px-40">
      <CarTitle carData={mockCarData[0]} />
      <ImageCarousel images={mockCarData[0].images} />
      <div className="mx-auto flex justify-between items-start mt-10">
        <div className="flex flex-col">
          <CarOverview carData={mockCarData[0]} />
          <hr className="my-8" />
          <CarDescription description={mockCarData[0].description} />
        </div>
        <div className="ml-8">
          <SellerInfoCard />
        </div>
      </div>
      <div className="mb-8 py-12">
        <InstallmentCalculator />
        <Map />
      </div>
    </div>
  );
};

export default PopupPreviewCar;
