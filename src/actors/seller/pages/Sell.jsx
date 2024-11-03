import React from 'react';
import carData from '@src/mock/carData';
import HorizontalCard from '../components/Card/HorizontalCard';

const Sell = () => {
  // const [carList, setCarList] = useState();
  const CarList = carData.map((car) => (
    <HorizontalCard key={car.id} car={car} />
  ));
  return (
    <>
      <div id="page_body" className="flex flex-col items-center">
        <ul>{CarList}</ul>
      </div>
    </>
  );
};

export default Sell;
