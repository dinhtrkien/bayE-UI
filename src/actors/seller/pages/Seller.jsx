import React, { useEffect, useRef, useState } from 'react';
import { carData, soldCarData, mockUserData } from '@src/mock/carData';
import HorizontalCard from '../components/Card/HorizontalCard';
import VerticalCard from '../components/Card/VericalCard';
import Modal from '../components/Modal/Modal';
import { useSelector } from 'react-redux';
import SellerInfoCard from '../components/SellerInfoCard';

export const Sell = () => {
  const seller = useSelector((state) => state.user.user);
  const [sellingCar, setSellingCar] = useState();
  const [soldCar, setSoldCar] = useState();
  // const [carList, setCarList] = useState();
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const handleSellerPage = async () => {
      setLoading(true);

      const response = await fetch(`${import.meta.env.VITE_URL}/api/seller/cars/${seller.id}`);
      if (!response.ok) {
        //TODO: Do some alert here
      }
      const cars = await response.json();
      console.log(cars);

      const sellingCarTemp = [];
      const soldCarTemp = [];
      for (let car of cars.message) {
        if (car.Status === 'selling') {
          sellingCarTemp.push(car);
        }
        if (car.Status === 'sold') {
          soldCarTemp.push(car);
        }
      }
      setSellingCar(sellingCarTemp);
      setSoldCar(soldCarTemp);
      setLoading(false);
    };
    handleSellerPage();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
      <div className="pl-16 pr-16">
        <div className="relative flex flex-row justify-evenly top-8">
          <div>
            <h2 className="mt-10 text-5xl">Selling Cars</h2>
            <hr className="mt-5 mb-5" />
            <div className="flex flex-col items-center gap-10">
              {sellingCar.map((car) => (
                <HorizontalCard
                  key={car.id}
                  id={car.CarID}
                  // car={car}
                  name={car.Description}
                  price={car.Price}
                  testRequestCount={-1}
                  imageURL={car.images}
                  addedDate={car.CreatedAt}
                  openWaiterList={handleOpenModal}
                />
              ))}
            </div>
          </div>
          <div className="mt-28 sticky top-0 h-full">
            <SellerInfoCard avatar_url={seller.avatar} name={seller.name} location={seller.location} soldCarCount={soldCar.length} sellingCarCount={sellingCar.length} successRate={'-1'} phone={seller.phone} />
          </div>
        </div>
        <hr className='mt-14 mb-5'></hr>
        <div className="">
          <h2 className="pt-10 pl-16 text-5xl">Sold Car</h2>
          <div id="page_body" className="flex flex-row justify-start pt-10 pb-10 overflow-x-auto border-l-2 border-r-2 border-gray-50 gap-9 flex-nowrap ml-52 mr-52">
            {soldCar.map((car) => {
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
