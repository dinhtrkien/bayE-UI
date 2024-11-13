import React, { useState } from 'react';
import { carData, soldCarData, mockUserData } from '@src/mock/carData';
import HorizontalCard from '../components/Card/HorizontalCard';
import VerticalCard from '../components/Card/VericalCard';
import Modal from '../components/Modal/Modal';

const Sell = () => {
  const carMockData = carData;
  const soldCarMockData = soldCarData;

  // const [carList, setCarList] = useState();
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <div className="pl-16 pr-16">
        <div className="">
          <h2 className="pl-40 mt-10 text-5xl">Selling Cars</h2>
          <hr className="mt-5 mb-5" />
          <div className="flex flex-col items-center gap-10">
            {carMockData.map((car) => (
              <HorizontalCard
                key={car.id}
                car={car}
                openWaiterList={handleOpenModal}
              />
            ))}
          </div>
        </div>

        <hr className="mt-5 mb-5" />

        <div className="">
          <h2 className="pt-10 pl-40 text-5xl">Sold Car</h2>
          <div
            id="page_body"
            className="flex flex-row justify-start pt-10 pb-10 overflow-x-auto border-l-2 border-r-2 border-gray-50 gap-9 flex-nowrap ml-52 mr-52"
          >
            {soldCarMockData.map((car) => {
              return <VerticalCard key={car.id} car={car} />;
            })}
          </div>
        </div>

        <Modal
          isOpen={openModal}
          onClose={handleOpenModal}
          waiterList={mockUserData}
        />
      </div>
    </>
  );
};

export default Sell;
