import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetSearchParams } from '@src/actors/buyer/hooks';
import route from '@src/constants/route';
import { convertToQueryString } from '@src/utils/route';

const filterOptions = {
  locations: ['Ha Noi', 'Thanh Hoa', 'Thai Nguyen', 'Ben Tre'],
  conditions: ['NEW', 'USED'],
  make: [
    { name: 'BMW', models: ['1', '2', '3'] },
    { name: 'Ford', models: ['4', '5', '6'] },
    { name: 'Mercedes', models: ['7', '8', '9'] },
  ],
};

const initialFilterValue = {
  location: 'any',
  condition: 'NEW',
  make: 'any',
  min: '',
  max: '',
};

const SearchBar = () => {
  const location = useLocation();
  // Extract all parameters
  const params = useGetSearchParams();

  // State for handling filter option change
  const [filterValue, setFilterValue] = useState({
    ...initialFilterValue,
    ...params,
  });
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full mb-6 flex flex-col justify-center">
          <label className="" htmlFor="location">
            Location
          </label>
          <select
            id="location"
            className="select select-md select-primary select-bordered text-black bg-neutral-50"
            defaultValue={params?.location ? params?.location : 'any'}
            onChange={(e) =>
              setFilterValue({ ...filterValue, location: e.target.value })
            }
          >
            <option value="any">Any</option>
            {filterOptions?.locations.map((location, i) => (
              <option key={i} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full mb-6 flex flex-col justify-center">
          <label htmlFor="condition">Condition</label>
          <select
            id="condition"
            className="select select-md select-primary select-bordered w-full text-black bg-neutral-50"
            defaultValue={params?.condition ? params?.condition : 'NEW'}
            onChange={(e) =>
              setFilterValue({ ...filterValue, condition: e.target.value })
            }
          >
            {filterOptions?.conditions.map((condition, i) => (
              <option key={i} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full mb-6 flex flex-col justify-center">
          <label htmlFor="make">Make</label>
          <select
            id="make"
            className="select select-md select-primary select-bordered w-full text-black bg-neutral-50"
            defaultValue={params?.make ? params?.make : 'any'}
            onChange={(e) =>
              setFilterValue({ ...filterValue, make: e.target.value })
            }
          >
            <option value="any">Any</option>
            {filterOptions?.make.map((make, i) => (
              <option key={i} value={make?.name}>
                {make?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full mb-6 flex flex-col justify-center">
          <label htmlFor="model">Model</label>
          <select
            id="model"
            className="select select-md select-primary select-bordered w-full text-black bg-neutral-50"
            disabled={filterValue?.make === 'any'}
            defaultValue={params?.model ? params?.model : 'any'}
            onChange={(e) =>
              setFilterValue({ ...filterValue, model: e.target.value })
            }
          >
            <option value="any">Any</option>
            {filterOptions?.make
              ?.find((make) => make.name === filterValue?.make) // Find selected make
              ?.models.map((model, i) => (
                <option key={i} value={model}>
                  {model}
                </option>
              ))}
          </select>
        </div>
        <div className="w-full">
          <span>Price range</span>
          <div className="flex just items-center">
            <label className="input input-primary mr-2 w-full input-md input-bordered flex items-center gap-2 bg-neutral-50">
              <input
                defaultValue={parseInt(params?.min)}
                onChange={(e) =>
                  setFilterValue({ ...filterValue, min: e.target.value })
                }
                className="w-full"
                type="number"
                placeholder="Min"
                min={0}
                max={300000}
              />
            </label>
            <label className="input input-primary ml-2 w-full input-md input-bordered flex items-center gap-2 bg-neutral-50">
              <input
                defaultValue={parseInt(params?.max)}
                onChange={(e) =>
                  setFilterValue({ ...filterValue, max: e.target.value })
                }
                className="w-full"
                type="number"
                placeholder="Max"
                min={0}
                max={300000}
              />
            </label>
          </div>
        </div>
      </div>
      <a
        href={`${route.SHOPPING}${
          convertToQueryString(filterValue)
            ? `?${convertToQueryString(filterValue)}`
            : ''
        }`}
        className="text-primary hover:underline hover:cursor-pointer"
      >
        Apply filter
      </a>
    </>
  );
};

export default SearchBar;
