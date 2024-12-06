import Heading from '@components/Heading';
import SearchBar from '@src/actors/buyer/components/Shop/SearchBar';
import CarList from '@src/actors/buyer/components/Shop/CarList';
import mockCarData from '@src/actors/buyer/mockCar';
import CardContainer from '@src/actors/buyer/components/Common/CardContainer';
import { useLocation } from 'react-router-dom';
import { useGetSearchParams } from '@src/actors/buyer/hooks';
import { useGetCars } from '@apis/cars';

import React, { useEffect, useState } from 'react';
import axiosClient from '@apis/api';

const Shopping = () => {
  // TODO: use search params to call filtered get all cars api
  const searchParams = useGetSearchParams();

  const [cars, setCars] = useState([]); // State to store the list of cars
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true); // Start loading
        setError(null); // Reset error

        // Make API call
        const response = await axiosClient.get(`/cars`, { params: searchParams });

        // Set the fetched car list
        setCars(response.cars);
      } catch (err) {
        console.error('Failed to fetch cars:', err);
        setError('Failed to load car data.');
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchCars();
  }, [searchParams]); // Re-fetch when searchParams change

  return (
    <div>
      <Heading className="mb-8" text="Shop" />
      <div className="flex flex-row mb-12">
        {/* Display search bar */}
        <CardContainer className="h-fit py-8 w-1/4">
          <SearchBar />
        </CardContainer>
        {/* Display car list */}
        <CarList cars={cars} className="ml-4 flex-grow" />
      </div>
      <div>{/* Pagination here */}</div>
    </div>
  );
};

export default Shopping;
