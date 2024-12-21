import React from 'react';
import CardContainer from '@src/actors/buyer/components/Common/CardContainer';
import carImage from '@src/mock/car1.png';
import HeartIcon from '@components/Icon/HeartIcon';
import { useSelector } from 'react-redux';

const CarCard = ({ car, className }) => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  return (
    <CardContainer className={`bg-neutral-50 w-full hover:cursor-pointer hover:bg-neutral-100 h-80 flex-row flex ${className}`}>
      <a href={`/car/${car?.carId}`} className="flex flex-row justify-start items-start w-full">
        <div className="w-1/3 mr-12 h-full">
          <img loading="lazy" className="w-full h-full rounded-bl-2xl rounded-tl-2xl" src={car?.images[0] ? car?.images[0] : carImage} alt="Empty" />
        </div>
        <div className="flex h-full flex-col justify-start items-start w-2/3 p-8">
          <h2 className="text-2xl font-bold">
            {car?.carmakes?.name} {car?.carmodels?.name}
          </h2>
          <span className="text-md text-neutral-500 mb-4">({car?.condition})</span>
          <table className="w-full text-md">
            <tbody>
              <tr>
                <td className="max-w-md pr-6 text-start align-top w-28">
                  <h4>Price</h4>
                </td>
                <td className="text-start align-top">
                  <p className="text-black">${car?.price}</p>
                </td>
              </tr>
              <tr>
                <td className="max-w-md pr-6 text-start align-top">
                  <h4>Model</h4>
                </td>
                <td className="text-start align-top">
                  <p className="text-black">{car?.carmodels?.name}</p>
                </td>
              </tr>
              <tr>
                <td className="max-w-md pr-6 text-start align-top">
                  <h4>Seller name:</h4>
                </td>
                <td className="text-start align-top">
                  <p className="text-black">{car?.sellerName ? car?.sellerName : 'Anonymous'}</p>
                </td>
              </tr>
              <tr>
                <td className="max-w-md pr-6 text-start align-top">
                  <h4>Description:</h4>
                </td>
                <td className="text-start align-top overflow-hidden line-clamp-3">
                  <p className="text-black text-justify">{car?.description} </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </a>
      <div className="ml-auto pt-8 pr-8">
        {/*<IconButton className="hover:border-primary hover:text-primary active:bg-primary mb-2" icon={<PlusRoundedIcon />} />*/}
        <HeartIcon 
        BuyerID = {1}
        CarID = {8}/>
      </div>
    </CardContainer>
  );
};

export default CarCard;
