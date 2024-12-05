import React from 'react';
import CardContainer from "@src/actors/buyer/components/Common/CardContainer";
import carImage from "@src/mock/car1.png";
import IconButton from "@components/Button/IconButton";
import PlusRoundedIcon from "@components/Icon/PlusRoundedIcon";
import LoveIcon from "@components/Icon/LoveIcon";
const CarCard = ({ car }) => {
  return (
    <CardContainer href={`/car/${car?.carId}`} className="bg-neutral-50 w-full mb-6 hover:cursor-pointer hover:bg-neutral-100">
      <div className="flex flex-row justify-start items-start">
        <div className="mr-12">
          <img
            loading="lazy"
            className="w-96 h-64"
            src={car?.images[0] ? car?.images[0] : carImage}
            alt="Empty"
          />
        </div>
        <div className="flex h-full flex-col justify-start items-start">
          <h2 className="text-2xl font-bold">
            {car?.carmakes?.name} {car?.carmodels?.name}
          </h2>
          <span className="text-md text-neutral-500 mb-4">
                ({car?.condition})
              </span>
          <table className="w-full text-md">
            <tbody>
            <tr>
              <td className="max-w-md pr-6 text-start align-top">
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
                <p className="text-black">{car?.sellerName ? car?.sellerName : "Anonymous"}</p>
              </td>
            </tr>
            <tr>
              <td className="max-w-md pr-6 text-start align-top">
                <h4>Description:</h4>
              </td>
              <td className="text-start align-top">
                <p className="text-black">{car?.description}</p>
              </td>
            </tr>
            </tbody>
          </table>

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
  );
};

export default CarCard;
