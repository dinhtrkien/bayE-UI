import React, { useState } from 'react';
import HeartIcon from '@src/components/Icon/HeartIcon';
import CompareIcon from '@src/components/Icon/compareIcon';
import CarComparePopup from '@src/actors/buyer/components/Popup/CarComparePopup';
import { carWishlist } from '@src/mock/carData';

function CarWishlist() {
    const [cars, setCars] = useState(carWishlist);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    const toggleAddToBag = (carId) => {
        setCars((prevCars) =>
            prevCars.map((car) =>
                car.id === carId ? { ...car, isSold: !car.isSold } : car
            )
        );
    };

    const handleDeleteCar = (carId) => {
        setCars((prevCars) => {
            const updatedCars = prevCars.filter((car) => car.id !== carId); // Loại bỏ phần tử có id khớp
            console.log(`Car with id ${carId} has been removed.`);
            return updatedCars; // Trả về danh sách xe mới
        });
    };

    const handleCompareClick = (car) => {
        setSelectedCar(car);
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
        setSelectedCar(null);
    };

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4 mt-4">
                {cars.map((car) => (
                    <div key={car.id} className="bg-white p-4 rounded-lg shadow-md">
                        <img
                            src={car.image}
                            alt={`${car.name}`}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">{car.name}</h2>
                            <div className="flex space-x-2">
                                <HeartIcon isFavourite={false} CarID={car.id} />
                                <CompareIcon onClick={() => handleCompareClick(car)} />
                            </div>
                        </div>
                        <p className="text-gray-600">Price: ${car.price}</p>
                        <button
                            onClick={() => toggleAddToBag(car.id)}
                            className={`mt-4 w-full py-2 rounded-md font-medium ${
                                !car.isSold ? 'bg-green-500 text-white' : 'bg-black text-white'
                            }`}
                        >
                            {car.isSold ? 'Sold' : 'Available'}
                        </button>
                    </div>
                ))}
            </div>

            {/* Popup */}
            <CarComparePopup
                isVisible={isPopupVisible}
                car1={selectedCar}
                car2={selectedCar}
                onClose={closePopup}
            />
        </div>
    );
}

export default CarWishlist;
