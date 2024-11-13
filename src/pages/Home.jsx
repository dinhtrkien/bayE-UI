import React from 'react';
import CarCard from '@src/components/HomePage/carCard';
import BrandLogos from '@src/components/HomePage/brandLogos';

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
      <CarCard
        model="BMW M8"
        year="2023"
        price="60000"
        distance="10000"
        sellerName="Phu"
        description="Brief description will be displayed here."
      />
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
      <CarCard
        model="BMW M8"
        year="2023"
        price="60000"
        distance="10000"
        sellerName="Phu"
        description="Brief description will be displayed here."
      />
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
