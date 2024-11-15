import React from 'react';
// Did not use mock data
const CarDescription = () => {
  return (
    <div className="relative w-full max-w-3xl m-auto">
      <h2 className="text-2xl font-medium mb-4">Description</h2>
      <p className="text-gray-700 leading-relaxed">
        A car is a vehicle that has wheels, carries a small number of
        passengers, and is moved by an engine or a motor. Cars are also called
        automobiles or motor vehicles. Trucks and buses are motor vehicles as
        well. However, trucks and buses are larger than cars, and they carry
        heavier loads.
      </p>
      <br />
      <p className="text-gray-700 leading-relaxed">
        It is hard for anyone today to imagine what life was like before there
        were cars. Cars and other motor vehicles have made it easy for people to
        travel within a city or across a continent. They have also influenced
        where people live. People once had to live near their jobs, but now they
        can live farther away and drive to work.
      </p>{' '}
      <br />
      <p className="text-gray-700 leading-relaxed">
        Yet cars and other motor vehicles have brought problems as well. Tens of
        thousands of people are killed or injured each year in traffic
        accidents. Cities are often congested with huge traffic jams. And
        gasoline is a limited resource that pollutes the atmosphere when burned
        as fuel.
      </p>{' '}
      <br />
    </div>
  );
};

export default CarDescription;
