import React, { useState, useEffect } from 'react';
import axios from 'axios';

import InstallmentCalculator from '@src/actors/buyer/components/CarDetail/InstallmentCalculator';
import CarTitle from '@src/actors/buyer/components/CarDetail/CarTitle';
import ImageCarousel from '@src/actors/buyer/components/CarDetail/ImageCarousel';
import CarOverview from '@src/actors/buyer/components/CarDetail/CarOverview';
import CarDescription from '@src/actors/buyer/components/CarDetail/CarDescription';
import SellerInfoCard from '@src/actors/buyer/components/CarDetail/SellerInfoCard';
import Map from '@src/actors/buyer/components/CarDetail/Map';
import { useParams } from 'react-router-dom';
import seller from '@src/actors/seller/pages/Seller';

const CarDetailPage = () => {
  const { id } = useParams();
  const [carData, setCarData] = useState(null);
  const [sellerData, setSellerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        setLoading(true);

        // Fetch car details
        const carResponse = await axios.get(`${import.meta.env.VITE_URL}/api/cars/${id}`);
        const car = carResponse.data;

        // Set car data
        setCarData({
          brand:`${car.carmakes.Name} ${car.carmodels.Name}`,
          title: car.Title,
          price: car.Price,
          year: car.FactoryYear,
          mileage: car.KilometersCount,
          condition: car.Condition,
          fuelType: car.FuelType, // Assuming fuel type is not in API
          gearType: car.Gearbox, // Assuming this isn't included
          prevOwner: car.NumberOwners,
          seatNumber: car.SeatNumber,
          doorNumber: car.DoorNumber,
          installmentMin: car.InstallmentLengthMin,
          installmentMax: car.InstallmentLengthMax,
          interestRateMin: car.InterestRateMin,
          interestRateMax: car.InterestRateMax,
          monthlyInstallmentMin: car.MonthlyInstallmentMin,
          monthlyInstallmentMax: car.MonthlyInstallmentMax,
          engineCapacity: car.EngineCapacity,
          madeIn: car.MadeIn,
          status: car.RegistrationStatus,
          description: car.Description,
          // location: car.users_cars_SellerIDTousers.Location,
          sellerId: car.SellerID,
          seller: car.users_cars_SellerIDTousers,
          images: car.images,
          weight: car.Weight,
        });

        // Set seller data
        setSellerData(car.users_cars_SellerIDTousers);

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch car details. Please try again.');
        setLoading(false);
      }
    };

    fetchCarData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="px-40">
      <CarTitle carData={carData} />
      <ImageCarousel images={carData.images} />
      <div className="mx-auto flex justify-between items-start mt-10">
        <div className="flex flex-col">
          <CarOverview madeIn={carData.madeIn} kmCount={carData.mileage}  seatNumber={carData.seatNumber} fuelType={carData.fuelType} factoryYear={carData.year} gearType={carData.gearType} doorNumber={carData.doorNumber} numberPrevOwner={carData.prevOwner} registrationStatus={carData.status} engineCapacity={carData.engineCapacity} weight={carData.weight} condition={carData.condition}/>
          <hr className="my-8" />
          <CarDescription description={carData.description} />
        </div>
        <div className="ml-8">
          <SellerInfoCard name={sellerData.Name} seller_id={sellerData.UserID} location={sellerData.location} />
        </div>
      </div>
      <div className="mb-8 py-12">
        <InstallmentCalculator />
        <Map />
      </div>
    </div>
  );
};

export default CarDetailPage;
