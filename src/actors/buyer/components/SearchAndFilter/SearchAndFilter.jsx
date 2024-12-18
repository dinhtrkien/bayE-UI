import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import PriceRange from './PriceRange';

const SearchAndFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [condition, setCondition] = useState('');
  const [make, setMake] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });

  const handleSearch = () => {
    const filters = {
      searchQuery,
      location,
      condition,
      make,
      priceRange,
    };
    console.log('Apply filters:', filters);
    // Call your search/filter API here
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Search Bar */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />

      {/* Advanced Filter CarExploreSection */}
      <div>
        <h3 className="font-bold text-lg mb-4">Advanced Filter</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Location Dropdown */}
          <Dropdown
            label="Location"
            options={[
              { label: 'Any location', value: '' },
              { label: 'Hanoi', value: 'Hanoi' },
              { label: 'Ho Chi Minh', value: 'Ho Chi Minh' },
            ]}
            value={location}
            onChange={setLocation}
          />

          {/* Condition Dropdown */}
          <Dropdown
            label="Condition"
            options={[
              { label: 'Any condition', value: '' },
              { label: 'New', value: 'New' },
              { label: 'Used', value: 'Used' },
            ]}
            value={condition}
            onChange={setCondition}
          />

          {/* Make Dropdown */}
          <Dropdown
            label="Make"
            options={[
              { label: 'All makes', value: '' },
              { label: 'Toyota', value: 'Toyota' },
              { label: 'Ford', value: 'Ford' },
              { label: 'BMW', value: 'BMW' },
            ]}
            value={make}
            onChange={setMake}
          />
        </div>

        {/* Price Range */}
        <PriceRange priceRange={priceRange} setPriceRange={setPriceRange} />
      </div>
    </div>
  );
};

export default SearchAndFilter;
