import React, { useState, useEffect } from 'react';
import HeartIcon from '@src/components/Icon/HeartIcon';
import { carWishlist } from '@src/mock/carData'; // Import carWishlist từ mockData

function CarWishlist() {
    const [cars, setCars] = useState(carWishlist); // Khởi tạo từ carWishlist
    console.log("CarWishlist");

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

    const handleSave = () => {
        console.log("Saved cars:", cars);

        fetch('http://localhost:3000/saveCars', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cars }),
        })
            .then((response) => response.json())
            .then((data) => console.log('Save response:', data))
            .catch((error) => console.error('Error saving cars:', error));
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
                        <h2 className="text-lg font-semibold">{car.name}</h2>
                        <p className="text-gray-600">Price: ${car.price}</p>
                        <HeartIcon
                            // onClick={handleDeleteCar}
                            isFavourite={true} // Hoặc bạn có thể thêm điều kiện
                            CarID={car.id}
                            handleDeleteCar={handleDeleteCar} // Truyền hàm vào
                        />
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

            {/* Nút Save */}
            <div className="mt-6 flex justify-center">
                <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white py-2 px-6 rounded-md font-medium hover:bg-blue-600"
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export default CarWishlist;