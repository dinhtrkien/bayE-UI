import React from 'react';

const PriceRange = ({ priceRange, setPriceRange }) => {
  const handleInputChange = (e, field) => {
    const value = parseInt(e.target.value, 10) || 0;
    setPriceRange((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2">Price range</label>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="number"
          placeholder="Min"
          value={priceRange.min}
          onChange={(e) => handleInputChange(e, 'min')}
          className="p-3 bg-gray-100 rounded-lg focus:outline-none"
        />
        <input
          type="number"
          placeholder="Max"
          value={priceRange.max}
          onChange={(e) => handleInputChange(e, 'max')}
          className="p-3 bg-gray-100 rounded-lg focus:outline-none"
        />
      </div>
      <input
        type="range"
        min={0}
        max={1000000}
        value={priceRange.max}
        onChange={(e) => handleInputChange(e, 'max')}
        className="w-full"
      />
    </div>
  );
};

export default PriceRange;
