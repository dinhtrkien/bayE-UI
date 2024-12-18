import { carBrands } from '@src/constants/carBrands';
import { fuelTypes } from '@src/constants/fuelTypes';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeDetailBrand, changeDetailCarLine, changeDetailEngineCapacity, changeDetailFactoryYear, changeDetailKilometersCount, changeDetailLicensePlate, changeDetailMadeIn, changeDetailNumberOfDoors, changeDetailPreviousOwners, changeDetailRegistrationStatus, changeDetailSeatNumber, changeDetailWeight } from '../slice/addCarSlice';
export default function DetailDescription() {

  const dispatch = useDispatch();
  const [carModelState, setCarModelState] = useState({ model: ['ABC', 'DEV'] });
  const [selectedBrand, setSelectedBrand] = useState(''); // Use state for the selected brand

  const handleCarBrandChange = (e) => {
    const selectedBrandValue = e.target.value;
    const selectedBrandObj = carBrands.find((brand) => brand.label === selectedBrandValue);

    setCarModelState(selectedBrandObj);
    console.log(selectedBrandObj.model[0])
    dispatch(changeDetailBrand(selectedBrandValue))
    dispatch(changeDetailCarLine(selectedBrandObj[0]));

    console.log(selectedBrandValue)
  };

  const handleCarLineChange = (e) => {
    const selectedCarLine = e.target.value;
    console.log(selectedCarLine)

    dispatch(changeDetailCarLine(selectedCarLine));
  }

  const handleInputChange = (field, value) => {
    console.log({field})
    console.log({value})
    switch (field) {
      case 'kilometersCount':
        dispatch(changeDetailKilometersCount({ kilometersCount: value }));
        break;
      case 'previousOwners':
        dispatch(changeDetailPreviousOwners({ previousOwners: value }));
        break;
      case 'licensePlate':
        dispatch(changeDetailLicensePlate({ licensePlate: value }));
        break;
      case 'registrationStatus':
        dispatch(changeDetailRegistrationStatus({ registrationStatus: value }));
        break;
      case 'madeIn':
        dispatch(changeDetailMadeIn({ madeIn: value }));
        break;
      // case 'brand':
      //   dispatch(changeDetailBrand({ brand: value }));
      //   break;
      // case 'carLine':
      //   dispatch(changeDetailCarLine({ carLine: value }));
      //   break;
      case 'factoryYear':
        dispatch(changeDetailFactoryYear({ factoryYear: value }));
        break;
      case 'engineCapacity':
        dispatch(changeDetailEngineCapacity({ engineCapacity: value }));
        break;
      case 'seatNumber':
        dispatch(changeDetailSeatNumber({ seatNumber: value }));
        break;
      case 'numberOfDoors':
        dispatch(changeDetailNumberOfDoors({ numberOfDoors: value }));
        break;
      case 'weight':
        dispatch(changeDetailWeight({ weight: value }));
        break;
      default:
        break;
    }
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
              <input type="text" className="grow" placeholder="10000" onChange={(e) => handleInputChange('kilometersCount', e.target.value)} />
            </label>
          </div>
          <div className="status-item min-w-72">
            <label className="flex flex-col h-14 input input-bordered">
              <span className="mb-1 text-gray-500">Number Owners Before</span>
              <input type="text" className="grow" placeholder="10"                 onChange={(e) => handleInputChange('previousOwners', e.target.value)} />
            </label>
          </div>
          <div className="status-item min-w-72">
            <label className="flex flex-col h-14 input input-bordered">
              <span className="mb-1 text-gray-500">License plate</span>
              <input type="text" className="grow" placeholder="E.x. 30E -32432"                 onChange={(e) => handleInputChange('licensePlate', e.target.value)} />
            </label>
          </div>
          <div className="status-item min-w-72">
            <label className="flex flex-col h-14 input input-bordered">
              <span className="mb-1 text-gray-500">Registration Status</span>
              <select className="grow"                 onChange={(e) => handleInputChange('registrationStatus', e.target.value)}>
                <option>Select Status</option>
                <option>Remaining</option>
                <option>Expired</option>
              </select>
            </label>
          </div>
          <div className="status-item min-w-72">
            <label className="flex flex-col h-14 input input-bordered">
              <span className="mb-1 text-gray-500">Made In</span>
              <select className="grow"                 onChange={(e) => handleInputChange('madeIn', e.target.value)}
              >
                <option>Select Country</option>
                <option>Vietnam</option>
                <option>India</option>
                <option>South Korea</option>
                <option>Thailand</option>
                <option>Japan</option>
                <option>China</option>
                <option>United States (USA)</option>
                <option>Germany</option>
                <option>Taiwan</option>
                <option>Other countries</option>
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
                <select className="grow" onChange={handleCarBrandChange}>
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
                <select className="grow" onClick={handleCarLineChange}>
                  {Array.from(carModelState.model, (carModel, index) => (
                    <option key={index}>{carModel}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="spec-item min-w-72">
              <label className="flex flex-col h-14 input input-bordered">
                <span className="mb-1 text-gray-500">Factory Year</span>
                <select className="grow"                   onChange={(e) => handleInputChange('factoryYear', e.target.value)}                >
                  <option>Select Year</option>
                  {Array.from({ length: 2024 - 1980 + 1 }, (_, index) => (
                    <option key={1980 + index}>{1980 + index}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="spec-item min-w-72">
              <label className="flex flex-col h-14 input input-bordered">
                <span className="mb-1 text-gray-500">Engine Capacity</span>
                <input type="text" className="grow" placeholder="E.x. 1.2 (Liters)"                   onChange={(e) => handleInputChange('engineCapacity', e.target.value)} />
              </label>
            </div>
            <div className="spec-item min-w-72">
              <label className="flex flex-col h-14 input input-bordered">
                <span className="mb-1 text-gray-500">Seat Number</span>
                <select className="grow"                   onChange={(e) => handleInputChange('seatNumber', e.target.value)}
                >
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
                <select className="grow"                   onChange={(e) => handleInputChange('numberOfDoors', e.target.value)}                >
                  <option>Select Doors Count</option>
                  <option>2</option>
                  <option>4</option>
                </select>
              </label>
            </div>
            <div className="spec-item min-w-72">
              <label className="flex flex-col h-14 input input-bordered">
                <span className="mb-1 text-gray-500">Weight</span>
                <input type="text" className="grow" placeholder="E.x. > 1 ton"                    onChange={(e) => handleInputChange('weight', e.target.value)}                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
