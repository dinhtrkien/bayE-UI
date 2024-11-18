import React from 'react';
import AddCarContainer from '../container/AddCarContainer';
import InstallmentSetup from '../container/InstallmentSetup';
import DetailDescription from '../container/DetailDescription';
import VerticalCard from '../components/Card/VericalCard';
import { soldCarData } from '@src/mock/carData';

const soldCarMockData = soldCarData;

export default function AddCar() {
  return (
    <div className="container px-6 py-10 mx-auto">
      <hr className="my-10 border-gray-300" />
      <div id="container" className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10">
        {/* Main Content */}
        <section id="Main Add Car" className="space-y-8 lg:w-4/5">
          <h1 className="mb-4 text-3xl font-bold">Add car info</h1>

          <AddCarContainer />
          <h2 className="mt-8 text-2xl font-bold">Installment Range Setup</h2>

          <InstallmentSetup />
          <div className="my-20" />

          <DetailDescription />
        </section>

        {/* Side Content */}

        <section id="Side Sold Car" className="flex flex-col space-y-6 lg:w-1/5">
          <h2 className="mt-8 text-2xl font-bold">Sold Car</h2>

          {soldCarMockData.map((car) => (
            <VerticalCard key={car.id} car={car} />
          ))}
        </section>
      </div>
    </div>
  );
}
