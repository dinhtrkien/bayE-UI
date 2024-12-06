import React, { useEffect } from 'react';
import BrandLogos from '@components/HomePage/BrandLogos';
import CarExploreSection from '@components/HomePage/CarExploreSection';
import GarageExploreSection from '@components/HomePage/GarageExploreSection';
import { useGetCars } from '@apis/cars';

const Home = () => {
  const [usedCarState, fetchUsedCars] = useGetCars({ Condition: 'USED' });
  const [newCarState, fetchNewCars] = useGetCars({ Condition: 'NEW' });
  useEffect(() => {
    fetchUsedCars();
    fetchNewCars();
  }, []);
  return (
    <div className="">
      <BrandLogos />
      <div className="mx-auto md:w-3/4  p-4">
        <CarExploreSection heading="Explored Used Cars" subHeading="Latest Listings" cars={usedCarState?.cars?.slice(0, 5)} href="/shopping?Condition=USED" />
        <CarExploreSection heading="Explore New Cars" subHeading="From authorized sellers" cars={newCarState?.cars?.slice(0, 5)} href="/shopping?Condition=NEW" />
        {/* Garage CarExploreSection */}
        <GarageExploreSection />
      </div>
    </div>
  );
};

export default Home;
