import { carBrands } from '@src/constants/carBrands';
import { fuelTypes } from '@src/constants/fuelTypes';
import React, { useRef, useState } from 'react';
export default function DetailDescription() {
  const [carModelState, setCarModelState] = useState({ model: ['ABC', 'DEV'] });
  const [selectedBrand, setSelectedBrand] = useState(''); // Use state for the selected brand
  const handleCarModel = (e) => {
    const selectedBrandValue = e.target.value;
    setSelectedBrand(selectedBrandValue); // Update the selected brand state

    console.log(
      'Car Model',
      carBrands.filter((brand) => brand.label === selectedBrandValue),
    );
    const selectedBrandObj = carBrands.find((brand) => brand.label === selectedBrandValue);

    setCarModelState(selectedBrandObj);
  };
  return (
    <div className="detail-description">
      <h2 className="mb-4 text-2xl font-bold">Detail Description</h2>
      <div className="pl-40 pr-32 car-status">
        <h3 className="mb-4 text-xl font-bold">Car Status</h3>
        <div className="flex flex-wrap gap-6">
          <div className="status-item min-w-72">
            <label className="flex flex-col h-14 input input-bordered">
              <span className="mb-1 text-gray-500">Kilometers Count</span>
              <input type="text" className="grow" placeholder="10000" />
            </label>
          </div>
          <div className="status-item min-w-72">
            <label className="flex flex-col h-14 input input-bordered">
              <span className="mb-1 text-gray-500">Number Owners Before</span>
              <input type="text" className="grow" placeholder="10" />
            </label>
          </div>
          <div className="status-item min-w-72">
            <label className="flex flex-col h-14 input input-bordered">
              <span className="mb-1 text-gray-500">License plate</span>
              <input type="text" className="grow" placeholder="E.x. 30E -32432" />
            </label>
          </div>
          <div className="status-item min-w-72">
            <label className="flex flex-col h-14 input input-bordered">
              <span className="mb-1 text-gray-500">Registration Status</span>
              <select className="grow">
                <option>Select Status</option>
              </select>
            </label>
          </div>
          <div className="status-item min-w-72">
            <label className="flex flex-col h-14 input input-bordered">
              <span className="mb-1 text-gray-500">Status</span>
              <input type="text" className="grow" placeholder="E.x. 30E -32432" />
            </label>
          </div>
          <div className="status-item min-w-72">
            <label className="flex flex-col h-14 input input-bordered">
              <span className="mb-1 text-gray-500">Made In</span>
              <select className="grow">
                <option>Select Country</option>
              </select>
            </label>
          </div>
        </div>
        <div className="specifications">
          <h3 className="mb-4 text-xl font-bold">Specifications</h3>
          <div className="flex flex-wrap gap-6">
            <div className="spec-item min-w-72">
              <label className="flex flex-col h-14 input input-bordered">
                <span className="mb-1 text-gray-500">Brand</span>
                <select className="grow" onChange={handleCarModel}>
                  {Array.from(carBrands, (carBrand) => (
                    <option key={carBrand.index}>{carBrand.label}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="spec-item min-w-72">
              <label className="flex flex-col h-14 input input-bordered">
                <span className="mb-1 text-gray-500">Car Line</span>
                {/* <input type="text" className="grow" placeholder="E.x. Huyndai i10 Sedan 2022" /> */}
                <select className="grow">
                  {Array.from(carModelState.model, (carModel, index) => (
                    <option key={index}>{carModel}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="spec-item min-w-72">
              <label className="flex flex-col h-14 input input-bordered">
                <span className="mb-1 text-gray-500">Factory Year</span>
                <select className="grow">
                  <option>Select Year</option>
                  {Array.from({ length: 2024 - 1980 + 1 }, (_, index) => (
                    <option key={1980 + index}>{1980 + index}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="spec-item min-w-72">
              <label className="flex flex-col h-14 input input-bordered">
                <span className="mb-1 text-gray-500">Fuel type</span>
                <select>
                  {Array.from(fuelTypes, (fuelType) => (
                    <option key={fuelType.index}>{fuelType.label}</option>
                  ))}
                </select>
                carModelState
              </label>
            </div>
            <div className="spec-item min-w-72">
              <label className="flex flex-col h-14 input input-bordered">
                <span className="mb-1 text-gray-500">Engine Capacity</span>
                <input type="text" className="grow" placeholder="E.x. 1.2 (Liters)" />
              </label>
            </div>
            <div className="spec-item min-w-72">
              <label className="flex flex-col h-14 input input-bordered">
                <span className="mb-1 text-gray-500">Seat Number</span>
                <select className="grow">
                  <option>Select Seat Count</option>
                  <option>2</option>
                  <option>4</option>
                  <option>5</option>
                  <option>7</option>
                  <option>9</option>
                </select>
              </label>
            </div>
            <div className="spec-item min-w-72">
              <label className="flex flex-col h-14 input input-bordered">
                <span className="mb-1 text-gray-500">Number Of Doors</span>
                <select className="grow">
                  <option>Select Doors Count</option>
                  <option>2</option>
                  <option>4</option>
                </select>
              </label>
            </div>
            <div className="spec-item min-w-72">
              <label className="flex flex-col h-14 input input-bordered">
                <span className="mb-1 text-gray-500">Weight</span>
                <input type="text" className="grow" placeholder="E.x. > 1 ton" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
