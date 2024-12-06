import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetSearchParams } from '@src/actors/buyer/hooks';
import route from '@src/constants/route';
import { convertToQueryString } from '@src/utils/route';
import { carBrands } from '@src/constants/carBrands';

const filterOptions = {
  conditions: ['NEW', 'USED'],
  makes: carBrands,
};

const initialFilterValue = {
  Condition: 'NEW',
  MakeName: 'any',
  ModelName: 'any',
  min: '',
  max: '',
};

const SearchBar = () => {
  const location = useLocation();
  const params = useGetSearchParams();

  const [filterValue, setFilterValue] = useState({
    ...initialFilterValue,
    ...params,
  });

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full mb-6 flex flex-col justify-center">
          <label htmlFor="condition">Condition</label>
          <select id="condition" className="select select-md select-primary select-bordered w-full text-black bg-neutral-50" defaultValue={params?.Condition ? params?.Condition : 'NEW'} onChange={(e) => setFilterValue({ ...filterValue, Condition: e.target.value })}>
            {filterOptions?.conditions.map((condition, i) => (
              <option key={i} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full mb-6 flex flex-col justify-center">
          <label htmlFor="make">Make</label>
          <select id="make" className="select select-md select-primary select-bordered w-full text-black bg-neutral-50" defaultValue={params?.MakeName ? params?.MakeName : 'any'} onChange={(e) => setFilterValue({ ...filterValue, MakeName: e.target.value })}>
            <option value="any">Any</option>
            {filterOptions?.makes.map((make, i) => (
              <option key={i} value={make?.label}>
                {make?.label}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full mb-6 flex flex-col justify-center">
          <label htmlFor="model">Model</label>
          <select id="model" className="select select-md select-primary select-bordered w-full text-black bg-neutral-50" disabled={filterValue?.MakeName === 'any'} defaultValue={params?.ModelName ? params?.ModelName : 'any'} onChange={(e) => setFilterValue({ ...filterValue, ModelName: e.target.value })}>
            <option value="any">Any</option>
            {filterOptions?.makes
              ?.find((make) => make.label === filterValue?.MakeName)
              ?.model.map((model, i) => (
                <option key={i} value={model}>
                  {model}
                </option>
              ))}
          </select>
        </div>
        <div className="w-full">
          <span>Price range</span>
          <div className="flex items-center">
            <label className="input input-primary mr-2 w-full input-md input-bordered flex items-center gap-2 bg-neutral-50">
              <input defaultValue={parseInt(params?.min)} onChange={(e) => setFilterValue({ ...filterValue, min: e.target.value })} className="w-full" type="number" placeholder="Min" min={0} max={300000} />
            </label>
            <label className="input input-primary ml-2 w-full input-md input-bordered flex items-center gap-2 bg-neutral-50">
              <input defaultValue={parseInt(params?.max)} onChange={(e) => setFilterValue({ ...filterValue, max: e.target.value })} className="w-full" type="number" placeholder="Max" min={0} max={300000} />
            </label>
          </div>
        </div>
      </div>
      <a href={`${route.SHOPPING}${convertToQueryString(filterValue) ? `?${convertToQueryString(filterValue)}` : ''}`} className="text-primary hover:underline hover:cursor-pointer">
        Apply filter
      </a>
    </>
  );
};

export default SearchBar;
