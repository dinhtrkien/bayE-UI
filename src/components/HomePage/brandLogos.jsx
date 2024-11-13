import React from 'react';

const BrandLogos = () => {
  const brands = [
    { name: 'Toyota', src: 'path/to/toyota-logo.png' },
    { name: 'Chevrolet', src: 'path/to/chevrolet-logo.png' },
    { name: 'Tesla', src: 'path/to/tesla-logo.png' },
    { name: 'Lexus', src: 'path/to/lexus-logo.png' },
    { name: 'VinFast', src: 'path/to/vinfast-logo.png' },
    { name: 'Cadillac', src: 'path/to/cadillac-logo.png' },
  ];

  return (
    <div className="py-4">
      {/* <hr className="mb-4 border-gray-200" /> */}
      <div className="flex items-center justify-center space-x-8">
        {brands.map((brand) => (
          <div key={brand.name} className="flex flex-col items-center">
            <img src={brand.src} alt={brand.name} className="h-12" />
            <span className="mt-2 text-sm font-medium text-gray-600">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
      <hr className="w-4/5 mx-auto mt-4 border-gray-200" />
    </div>
  );
};

export default BrandLogos;
