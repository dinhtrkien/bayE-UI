import React, { useEffect, useState } from 'react';
import BrandLogos from '@components/HomePage/BrandLogos';
import CarExploreSection from '@components/HomePage/CarExploreSection';
import GarageExploreSection from '@components/HomePage/GarageExploreSection';
import { useGetCars } from '@apis/cars';
const DoneStep = () => {
  return (
    <div class="w-1/3 bg-indigo-700 h-1 flex items-center">
      <div class="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
      </div>
    </div>
  );
};
const UnfinishedElement = () => {
  return (
    <div class="w-1/3 flex justify-end">
      <div class="bg-white h-6 w-6 rounded-full shadow"></div>
    </div>
  );
};
export const LocationIcon = ({ width = "20px", height = "20px", color = "#000", ...props }) => (
  <svg {...props} className='absolute bottom-7' version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={width} height={height} viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
    <path
      fill={color}
      d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
	C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
    />
  </svg>
);

const AdditionalInfo = ({data}) => {
  console.log(data)
  return (
    <div className=" w-fit absolute right-0 -mr-2 top-12 opacity-0 group-hover:opacity-100 group-hover:top-8 transform transition-all duration-300 ease-in-out">
      <div className="relative bg-white shadow-lg px-2 py-1 rounded">
        <svg
          className="absolute -top-2 left-1/2 transform -translate-x-1/2"
          width="16px"
          height="8px"
          viewBox="0 0 16 8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="8 0 16 8 0 8"
            fill="#FFFFFF"
          ></polygon>
        </svg>
        <p
          tabIndex="0"
          className="focus:outline-none text-indigo-700 text-xs font-bold w-fit"
        >
          {data}
        </p>
      </div>
    </div>
  );
};

const CurrentStep = ({index}) => {
  console.log(index)
  const stepData = [
    {
      label: 'Insert Money'
    },
    {
      label: 'Dat coc xe'
    }, 
    {
      label: ' Xem xe'
    }, 
    {
      label: 'Hoan tat mua xe'
    }
  ]
  return (
    <div className="relative flex items-center flex-col justify-between">
      {/* Icon tiền */}

      {/* Current Step Button */}
      <div className="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative group hover:scale-150 hover:transform hover:origin-center transition-transform duration-300 ease-in-out">
        <LocationIcon/>
        <div className="h-3 w-3 bg-indigo-700 rounded-full group-hover:scale-400 group-hover:transform transition-transform duration-300 ease-in-out"></div>
        <AdditionalInfo data={stepData[index].label} />
      </div>
  </div>
  );
};
const ProcessStep = (index) => {

}
const Home = () => {
  const [usedCarState, fetchUsedCars] = useGetCars({ Condition: 'USED' });
  const [newCarState, fetchNewCars] = useGetCars({ Condition: 'NEW' });
  const [process, setProcess] = useState(1);

  useEffect(() => {
    fetchUsedCars();
    fetchNewCars();
  }, []);

  return (
    <div className="">
      <BrandLogos />
      <div class="h-full w-full py-16">
        <div class="container mx-auto">
          <dh-component>
            <div class="w-11/12 lg:w-2/6 mx-auto">
              <div class="bg-gray-200 h-1 flex items-center justify-between">
              <div class="w-1/3 flex justify-between bg-indigo-700 h-1 items-center relative">

                {/* first element */}
                <CurrentStep index={0} />
                </div>
                <div class="w-1/3 flex justify-between bg-indigo-700 h-1 items-center relative">
                  {/* 2nd element */}
                  <CurrentStep index={1} />
                  <CurrentStep index={2} />
                </div>
                {/* last element */}
                <div class="w-1/3 flex justify-end">
                  <div class="bg-white h-6 w-6 rounded-full shadow"></div>
                </div>
              </div>
            </div>
          </dh-component>
        </div>
      </div>
      <div className="mx-auto md:w-3/4  p-4">
        <CarExploreSection heading="Explored Used Cars" subHeading="Latest Listings" cars={usedCarState?.cars?.slice(0, 5)} href="/shopping?Condition=USED" />
        <CarExploreSection heading="Explore New Cars" subHeading="From authorized sellers" cars={newCarState?.cars?.slice(0, 5)} href="/shopping?Condition=NEW" />
        {/* Garage CarExploreSection */}
        <GarageExploreSection />
      </div>
    </div>
  );
};

export default Home;
