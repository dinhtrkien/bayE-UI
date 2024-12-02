import CardContainer from '@src/actors/buyer/components/Common/CardContainer';

import carImage from '@src/mock/car1.png';
import IconButton from '@components/Button/IconButton';
import PlusRoundedIcon from '@components/Icon/PlusRoundedIcon';
import LoveIcon from '@components/Icon/LoveIcon';

const CarList = ({ className, cars }) => {
  return (
    <div className={`w-3/4 flex flex-col ${className}`}>
      <span>Showing 1-10 of 20 results</span>
      {cars.map((car) => (
        <CardContainer className="bg-neutral-50 w-full mb-6 hover:cursor-pointer hover:bg-neutral-100">
          <div className="flex flex-row justify-start items-start">
            <div className="mr-12">
              <img
                loading="lazy"
                className="w-96 h-64"
                src={carImage}
                alt="Empty"
              />
            </div>
            <div className="flex h-full flex-col justify-start items-start">
              <h2 className="text-2xl font-bold">
                {car.make} {car.model}
              </h2>
              <span className="text-md text-neutral-500 mb-4">
                ({car.condition})
              </span>
              <div className="flex text-md flex-row w-full justify-between items-start">
                <div className="max-w-md mr-6 flex flex-col justify-start items-start ">
                  <h4>Price</h4>
                  <h4>Model</h4>
                  <h4>Seller name:</h4>
                  <h4>Description:</h4>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <p className="text-black">${car.price}</p>
                  <p className="text-black">{car.model}</p>
                  <p className="text-black">{car.sellerName}</p>
                  <p className="text-black">{car.shortDescription}</p>
                </div>
              </div>
            </div>
            <div className="ml-auto">
              <IconButton
                className="hover:border-primary hover:text-primary active:bg-primary mb-2"
                icon={<PlusRoundedIcon />}
              />
              <IconButton
                className="hover:border-red-500 hover:text-red-500 active:bg-red-300"
                icon={<LoveIcon />}
              />
            </div>
          </div>
        </CardContainer>
      ))}
    </div>
  );
};

export default CarList;
