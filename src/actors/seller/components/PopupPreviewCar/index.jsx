import React from 'react';
import InstallmentCalculator from '../InstallmentCalculator';
import CarTitle from '../CarTitle';
import ImageCarousel from '../ImageCarousel';
import CarOverview from '../CarOverview';
// import 
import CarDescription from '../CarDescription';
import SellerInfoCard from '../SellerInfoCard';
import Map from '@src/actors/buyer/components/CarDetail/Map';
import props from '@src/actors/buyer/mockCar';

const PopupPreviewCar = ({props, imagesFiles, closeButton}) => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center overflow-auto">

    {/* </div> <div className=" fixed inset-0 px-40"> */}

      <div className='p-8 mt-10 h-fit bg-slate-50 flex flex-col items-center justify-center rounded-2xl'>
        <div>
          <CarTitle title={props.main.title} price={props.main.price} closeButton={closeButton}/>
          <ImageCarousel images={imagesFiles} />
          <div className="mx-auto flex justify-between items-start mt-10">
            <div className="flex flex-col">
              <CarOverview 
                status={props.main.status} 
                mileage={props.detail.kilometersCount} 
                engineCapacity={props.detail.engineCapacity}
                doorNumber={props.detail.numberOfDoors}
                year={props.detail.factoryYear}
                driveType={"FWD"}
                transmission={props.main.gearbox}
                fuelType={props.main.fuelType}
                weight={props.detail.weight}
                ownerNumber={props.detail.previousOwners}
                vin={props.detail.licensePlate}/>
              <hr className="my-8" />
              <CarDescription description={props.main.description} />
            </div>
            <div className="ml-8">
              <SellerInfoCard />
            </div>
          </div>
          <div className="mb-8 py-12">
            <InstallmentCalculator interest={props.interest} />
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupPreviewCar;
