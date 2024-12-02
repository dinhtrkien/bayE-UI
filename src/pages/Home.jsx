import React from 'react';
import CarCard from '@src/components/HomePage/carCard';
import BrandLogos from '@src/components/HomePage/brandLogos';

const carList1 = [
  {
    id: 1,
    model: "Toyota Corolla",
    year: 2020,
    price: 20000,
    distance: 15000,
    sellerName: "John Doe",
    description: "A reliable sedan in great condition.",
    imageUrl: "/images/toyota_corolla.png",
  },
  {
    id: 2,
    model: "Honda Civic",
    year: 2019,
    price: 19000,
    distance: 20000,
    sellerName: "Jane Smith",
    description: "Compact car with great fuel efficiency.",
    imageUrl: "/images/honda_civic.png",
  },
];

const carList2 = [
  {
    id: 3,
    model: "Ford Mustang",
    year: 2021,
    price: 30000,
    distance: 5000,
    sellerName: "Mike Johnson",
    description: "A classic sports car with a modern touch.",
    imageUrl: "/images/ford_mustang.png",
  },
  {
    id: 4,
    model: "Chevrolet Tahoe",
    year: 2018,
    price: 35000,
    distance: 40000,
    sellerName: "Anna Brown",
    description: "A spacious SUV for the whole family.",
    imageUrl: "/images/chevrolet_tahoe.png",
  },
];


const Home = () => {
  return (
    <div>
      <BrandLogos />
      <div className="max-w-4xl p-4 mx-auto">
        <h1 className="mb-2 text-4xl font-bold">Explore Used Cars</h1>
        <h2 className="text-2xl font-semibold text-gray-600">
          Latest Listings
        </h2>
      </div>
      <div className="space-y-6">
        {carList1.map((car) => (
          <CarCard
            key={car.id}
            model={car.model}
            year={car.year}
            price={car.price}
            distance={car.distance}
            sellerName={car.sellerName}
            description={car.description}
            imageUrl={car.imageUrl}
          />
        ))}
      </div>
      <div className="max-w-4xl p-4 mx-auto mt-4">
        <a href="/cars" className="font-semibold text-blue-600 hover:underline">
          See more cars
        </a>
      </div>
      <div className="max-w-4xl p-4 mx-auto">
        <h1 className="mb-2 text-4xl font-bold">Explore New Cars</h1>
        <h2 className="text-2xl font-semibold text-gray-600">
          From authorized sellers
        </h2>
      </div>
        <div className="space-y-6">
        {carList2.map((car) => (
          <CarCard
            key={car.id}
            model={car.model}
            year={car.year}
            price={car.price}
            distance={car.distance}
            sellerName={car.sellerName}
            description={car.description}
            imageUrl={car.imageUrl}
          />
        ))}
      </div>
      <div className="max-w-4xl p-4 mx-auto mt-4">
        <a href="/cars" className="font-semibold text-blue-600 hover:underline">
          See more cars
        </a>
      </div>
      <hr className="w-4/5 mx-auto mt-4 border-gray-200" />

      {/* Garage Section */}
      <div className="items-start max-w-2xl mx-auto space-x-4 border rounded-lg shadow-lg">
        <div className="max-w-4xl overflow-hidden">
          <div className="md:flex">
            {/* Left Side: Text and Button */}
            <div className="p-8 md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-800">
                Your garage
              </h2>
              <p className="mt-2 text-gray-600">Start selling your car</p>
              <p className="mt-2 text-sm text-gray-600">
                Add your car to your garage to start selling now!
              </p>
              <button className="px-6 py-2 mt-6 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">
                Create a seller account
              </button>
              <p className="mt-4 text-sm text-gray-500">
                Already have an account?{' '}
                <a href="#" className="text-blue-500 hover:underline">
                  Sign in.
                </a>
              </p>
            </div>

            {/* Right Side: Image */}
            <div className="md:w-1/2">
              <img
                src="your-image-url.jpg"
                alt="Car Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;