import React, { useEffect } from 'react';
import BrandLogos from '@components/HomePage/BrandLogos';
import CarExploreSection from '@components/HomePage/CarExploreSection';
import GarageExploreSection from '@components/HomePage/GarageExploreSection';
import { useGetCars } from '@apis/cars';

const Home = () => {
  const [usedCarState, fetchUsedCars] = useGetCars();
  const [newCarState, fetchNewCars] = useGetCars();
  useEffect(() => {
    fetchUsedCars({ Condition: 'USED' });
    fetchNewCars({ Condition: 'NEW' });
  }, []);
  return (
    <div className="pt-10">
      <BrandLogos/>
      <div className='divider md:w-3/4 px-4 mx-auto'></div>
      <div className="mx-auto md:w-3/4 px-4 mb-24 mt-12">
        <CarExploreSection loading={usedCarState.loading} className='mb-6' heading="Explored Used Cars" subHeading="Latest Listings" cars={usedCarState?.cars?.slice(0, 3)} href="/shopping?Condition=USED" />
        <CarExploreSection loading={newCarState.loading} heading="Explore New Cars" subHeading="From authorized sellers" cars={newCarState?.cars?.slice(0, 3)} href="/shopping?Condition=NEW" />
        {/* Garage CarExploreSection */}
        <GarageExploreSection className='mt-12'/>
      </div>
    </div>
  );
};

export default Home;
