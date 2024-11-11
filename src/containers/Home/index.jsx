import React from 'react';
import CarCard from '@src/components/homePage/carCard';
import BrandLogos from '@src/components/homePage/brandLogos';

const App = () => {
  return (
    <div>
      <BrandLogos />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-2">
          Explore Used Cars
        </h1>
        <h2 className="text-2xl font-semibold text-gray-600">
          Latest Listings
        </h2>
      </div>
      <CarCard 
        model="BMW M8" 
        year="2023" 
        price="60000" 
        distance="10000" 
        sellerName="Phu" 
        description="Brief description will be displayed here."
      />
    </div>
  );
};

export default App;
