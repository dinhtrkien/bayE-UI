import React, { useState } from 'react';

function CarWishlist() {
    // Initialize cars with some sample data
    const [cars, setCars] = useState([
      { id: 1, brand: 'Toyota', model: 'Camry', description: 'A reliable sedan', price: '$20,000', image: 'url-to-image', isAdded: false },
      { id: 2, brand: 'Honda', model: 'Civic', description: 'A compact car', price: '$18,000', image: 'url-to-image', isAdded: false },
      // Add more cars here
    ]);
  
    const toggleAddToBag = (carId) => {
      setCars((prevCars) =>
        prevCars.map((car) =>
          car.id === carId ? { ...car, isAdded: !car.isAdded } : car
        )
      );
    };
  
    return (
      <div className="grid grid-cols-3 gap-4">
        {cars.map((car) => (
          <div key={car.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold">{car.brand} {car.model}</h2>
            <p className="text-gray-600">{car.description}</p>
            <p className="text-lg font-bold mt-2">{car.price}</p>
            <button
              onClick={() => toggleAddToBag(car.id)}  // Add onClick event here
              className={`mt-4 w-full py-2 rounded-md font-medium ${
                car.isAdded ? 'bg-green-500 text-white' : 'bg-black text-white'
              }`}
            >
              {car.isAdded ? 'Added to Bag' : 'Add to Bag'}
            </button>
          </div>
        ))}
      </div>
    );
  }
  
  export default CarWishlist;
