import CardContainer from "@src/actors/buyer/components/Common/CardContainer";
import { useState } from "react";
const options = {
  locations: ['Ha Noi', 'Thanh Hoa', 'Thai Nguyen', 'Ben Tre'],
  conditions: ['NEW', ' USED'],
  make: ['BMW', 'TOYOTA', 'FORD']
}
const SearchBar = ({ className}) => {
  // State for handling filter option change
  const [filterOptions, setFilterOption] = useState(options);
  return (
    <CardContainer className={`py-8 w-1/4 ${className}`}>
      <div className='w-full'>
        <div className='w-full mb-6 flex flex-col justify-center'>
          <label className='' htmlFor='location'>Location</label>
          <select id='location' className="select select-md select-primary select-bordered w-full  max-w-xs text-black bg-neutral-50">
            {
              filterOptions?.locations.map(location =>
                location.toUpperCase() === "HA NOI" ? <option disabled selected value={location}>{location}</option>
                  :   <option value={location}>{location}</option>
              )
            }
          </select>
        </div>
        <div className='w-full mb-6 flex flex-col justify-center'>
          <label htmlFor='condition'>Condition</label>
          <select id='condition' className="select select-md select-primary select-bordered w-full max-w-xs text-black bg-neutral-50">
            {
              filterOptions?.conditions.map(condition =>  <option value={condition}>{condition}</option>)
            }
          </select>
        </div>
        <div className='w-full mb-6 flex flex-col justify-center'>
          <label htmlFor='make'>Make</label>
          <select id='make' className="select select-md select-primary select-bordered w-full max-w-xs text-black bg-neutral-50">
            {
              filterOptions?.make.map(condition =>  <option value={condition}>{condition}</option>)
            }
          </select>
        </div>
        <div className='w-full'>
          <span>Price range</span>
          <div className='flex just items-center'>
            <label className="input w-1/3 input-md input-bordered flex items-center gap-2 bg-neutral-50">
              <input type='number' placeholder='Min' min={0} max={300000}/>
            </label>
            <label className="input w-1/3 input-md input-bordered flex items-center gap-2 bg-neutral-50">
              <input type='number' placeholder='Min' min={0} max={300000}/>
            </label>
          </div>
        </div>
      </div>

    </CardContainer>
  )
};

export default SearchBar;
