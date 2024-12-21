import React, { useEffect, useState } from 'react';
import BrandLogos from '@components/HomePage/BrandLogos';
import CarExploreSection from '@components/HomePage/CarExploreSection';
import GarageExploreSection from '@components/HomePage/GarageExploreSection';
import { useGetCars } from '@apis/cars';
import VerticalCard from '@src/actors/seller/components/Card/VericalCard';
import { carData, soldCarData, mockUserData } from '@src/mock/carData';

const CarSlide = () => {
  const newCars = soldCarData.map((newCar) => <VerticalCard key={newCar.id} car={newCar} />);

  return (
    <div className='w-1/2 mx-auto'>
      <div className="w-[620px] overflow-x-scroll snap-x snap-mandatory flex flex-row gap-4 py-10 px-4  bg-slate-300 rounded-xl">
        {soldCarData.map((newCar) => (
          <div key={newCar.id} className="snap-center shrink-0 w-80 bg-white shadow-md rounded-lg p-4">
            <VerticalCard car={newCar} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const LocationIcon = ({ width = '20px', height = '20px', color = '#000', ...props }) => (
  <svg {...props} className="absolute bottom-7" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={width} height={height} viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
    <path
      fill={color}
      d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
	C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
    />
  </svg>
);

const AdditionalInfo = ({ data }) => {
  console.log(data);
  return (
    <div className="h-fit w-fit absolute top-14 opacity-0 group-hover:opacity-100 group-hover:top-24 transform transition-all duration-300 ease-in-out">
      <div className="relative bg-white shadow-lg px-2 py-1 rounded">
        <svg className="absolute -top-2 left-1/2 transform -translate-x-1/2" width="16px" height="8px" viewBox="0 0 16 8" xmlns="http://www.w3.org/2000/svg">
          <polygon points="8 0 16 8 0 8" fill="#FFFFFF"></polygon>
        </svg>
        <p tabIndex="0" className="focus:outline-none text-blue-700 text-xs font-bold w-fit">
          {data}
        </p>
      </div>
    </div>
  );
};

const CurrentStep = ({ index }) => {
  console.log(index);
  const stepData = [
    {
      label: 'Insert Money',
    },
    {
      label: 'View Selling Car',
    },
    {
      label: 'Join An Auction',
    },
    {
      label: 'Complete Buying',
    },
  ];
  return (
    <div className="relative flex items-center flex-col justify-between">
      {/* Icon tiền */}

      {/* Current Step Button */}
      <div className="bg-white h-20 w-20 rounded-full shadow flex items-center justify-center -mr-3 relative group hover:scale-150 hover:transform hover:origin-center transition-transform duration-300 ease-in-out">
        {/* <LocationIcon/> */}
        <div className="h-10 w-10 bg-blue-800 rounded-full group-hover:scale-400 group-hover:transform transition-transform duration-300 ease-in-out"></div>
        <AdditionalInfo data={stepData[index].label} />
      </div>
    </div>
  );
};

const StepCard = ({ stepNumber, title, description, image, position }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center my-8 gap-9">
      {/* Conditional layout based on position */}
      {position === 'left' && (
        <div className="lg:w-1/2 w-full flex justify-center gap-5 grow-1 bg-slate-300 rounded-xl py-10">
          <img src={image} alt={`Step ${stepNumber}`} className="rounded-lg shadow-md max-w-full lg:max-w-md" />
        </div>
      )}
      <div className={`lg:w-1/2 p-6 flex-1 ${position === 'left' ? 'text-left' : 'text-right'}`}>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Step {stepNumber}: {title}
        </h2>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
      {stepNumber === 1 ? (
        <CarSlide />
      ) : (
        position === 'right' && (
          <div className="bg-slate-300 rounded-xl lg:w-1/2 w-full flex justify-center flex-1 py-10">
            <img src={image} alt={`Step ${stepNumber}`} className="rounded-lg shadow-md max-w-full lg:max-w-md" />
          </div>
        )
      )}
    </div>
  );
};

const CarBuyingSteps = () => {
  const steps = [
    {
      stepNumber: 1,
      title: 'Explore Car From All Over Vietnam',
      description: 'Browse our wide range of cars and find the one that best suits your needs.',
      image: 'https://res.cloudinary.com/dhgwdfhcf/image/upload/v1733569988/cars/d9cjg56allh3tnz65bz6.webp',
      position: 'right',
    },
    {
      stepNumber: 2,
      title: 'Financing Options',
      description: 'Explore financing plans tailored to your budget and needs.',
      image: 'https://res.cloudinary.com/dhgwdfhcf/image/upload/v1733569988/cars/d9cjg56allh3tnz65bz6.webp',
      position: 'left',
    },
    {
      stepNumber: 3,
      title: 'Test Drive',
      description: 'Book a test drive to experience the car firsthand before making a decision.',
      image: 'https://res.cloudinary.com/dhgwdfhcf/image/upload/v1733569988/cars/d9cjg56allh3tnz65bz6.webp',
      position: 'right',
    },
    {
      stepNumber: 4,
      title: 'Complete Purchase',
      description: 'Finalize your purchase and drive away in your new car!',
      image: 'https://res.cloudinary.com/dhgwdfhcf/image/upload/v1733569988/cars/d9cjg56allh3tnz65bz6.webp',
      position: 'left',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {steps.map((step) => (
        <StepCard key={step.stepNumber} stepNumber={step.stepNumber} title={step.title} description={step.description} image={step.image} position={step.position} />
      ))}
    </div>
  );
};

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [usedCarState, fetchUsedCars] = useGetCars({ Condition: 'USED' });
  const [newCarState, fetchNewCars] = useGetCars({ Condition: 'NEW' });
  const [process, setProcess] = useState(1);

  useEffect(() => {
    fetchUsedCars({ Condition: 'USED' });
    fetchNewCars({ Condition: 'NEW' });
  }, []);

  useEffect(() => {
    console.log(newCarState.cars);
  }, [newCarState]);
  return (
    <div className="max-w-[1200px] mx-auto">
      <BrandLogos />
      <div class="h-full w-full py-16 ">
        <div class="container mx-auto">
          <div class="w-11/12 lg:w-4/6 mx-auto">
            <div class="bg-gray-200 h-1 flex items-center justify-between">
              <div class="w-1/3 flex justify-between bg-blue-900 h-1 items-center relative">
                {/* first element */}
                <CurrentStep index={0} />
              </div>
              <div class="w-1/3 flex justify-between bg-blue-900 h-1 items-center relative">
                {/* 2nd element */}
                <CurrentStep index={1} />
              </div>
              <div class="w-1/3 flex justify-between bg-blue-900 h-1 items-center relative">
                {/* 2nd element */}
                <CurrentStep index={2} />
              </div>
              {/* last element */}
              <div class=" flex justify-between bg-blue-900 h-1 items-center relative">
                <CurrentStep index={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CarBuyingSteps />

      <div className="mx-auto md:w-3/4  p-4">
        <CarExploreSection heading="Explored Used Cars" subHeading="Latest Listings" cars={usedCarState?.cars?.slice(0, 5)} href="/shopping?Condition=USED" />
        <CarExploreSection heading="Explore New Cars" subHeading="From authorized sellers" cars={newCarState?.cars?.slice(0, 5)} href="/shopping?Condition=NEW" />
        {/* Garage CarExploreSection */}
        <GarageExploreSection className="mt-12" />
      </div>
    </div>
  );
};

export default Home;
