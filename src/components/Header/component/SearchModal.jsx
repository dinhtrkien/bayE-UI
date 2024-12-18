import Modal from '@components/Modal';
import SearchBar from '@src/actors/buyer/components/Shop/SearchBar';
import CardContainer from '@src/actors/buyer/components/Common/CardContainer';
import Heading from '@components/Heading';
import IconButton from '@components/Button/IconButton';
import { useState } from 'react';
import route from '@src/constants/route';
import { carBrands } from '@src/constants/carBrands';
import { convertToQueryString } from '@src/utils/route';

const filterOptions = {
  locations: ['Ha Noi', 'Thanh Hoa', 'Thai Nguyen', 'Ben Tre'],
  conditions: ['NEW', 'USED'],
  makes: carBrands,
};
const SearchModal = ({ open, onCancel }) => {
  const [filter, setFilter] = useState({ condition: 'NEW' });
  return (
    <Modal open={open}>
      <CardContainer className="p-8 w-1/3">
        <div className="w-full mb-6 flex justify-between">
          <Heading text="Search" />
          <IconButton
            onClick={onCancel}
            icon={(
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          />
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full mb-6 flex flex-col justify-center">
            <label className="" htmlFor="location">
              Location
            </label>
            <select id="location" className="select select-md select-primary select-bordered text-black bg-neutral-50" defaultValue="any" onChange={(e) => setFilter({ ...filter, location: e.target.value })}>
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
            <select id="condition" className="select select-md select-primary select-bordered w-full text-black bg-neutral-50" defaultValue="NEW" onChange={(e) => setFilter({ ...filter, condition: e.target.value })}>
              {filterOptions?.conditions.map((condition, i) => (
                <option key={i} value={condition}>
                  {condition}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full mb-6 flex flex-col justify-center">
            <label htmlFor="make">Make</label>
            <select id="make" className="select select-md select-primary select-bordered w-full text-black bg-neutral-50" defaultValue="any" onChange={(e) => setFilter({ ...filter, make: e.target.value })}>
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
            <select id="model" className="select select-md select-primary select-bordered w-full text-black bg-neutral-50" disabled={!filter?.make || filter?.make === 'any'} onChange={(e) => setFilter({ ...filter, model: e.target.value })}>
              <option value="any">Any</option>
              {filterOptions?.makes
                ?.find((make) => make.label === filter?.make) // Find selected make
                ?.model.map((model, i) => (
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
                <input onChange={(e) => setFilter({ ...filter, min: e.target.value })} className="w-full" type="number" placeholder="Min" min={0} max={300000} />
              </label>
              <label className="input input-primary ml-2 w-full input-md input-bordered flex items-center gap-2 bg-neutral-50">
                <input onChange={(e) => setFilter({ ...filter, max: e.target.value })} className="w-full" type="number" placeholder="Min" min={0} max={300000} />
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4 mt-8 w-full flex items-center">
          <a href={`${route.SHOPPING}${convertToQueryString(filter) ? `?${convertToQueryString(filter)}` : ''}`} className="btn w-32 btn-primary text-white mx-auto">
            Search
          </a>
        </div>
      </CardContainer>
    </Modal>
  );
};
export default SearchModal;
