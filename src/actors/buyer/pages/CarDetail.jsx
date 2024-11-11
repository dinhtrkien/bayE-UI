import React from 'react';
import InstallmentCalculator from '@src/actors/buyer/components/CarDetail/InstallmentCalculator';

const CarDetail = () => {
  return (
    <>
      <div>
        <div className="flex-col">
          <h1>BMW M8 (2024)</h1>
          <p>3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate</p>
        </div>

        <div>
          <button type="submit">Add to favourites</button>
          <button type="submit">Compare</button>
        </div>
      </div>
      <InstallmentCalculator />
    </>
  );
};

export default CarDetail;
