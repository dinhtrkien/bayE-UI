import React, { useState, useEffect  } from 'react';
import HeartIcon from '@src/components/Icon/HeartIcon';
import CompareIcon from '@src/components/Icon/compareIcon';
import CarComparePopup from '@src/actors/buyer/components/Popup/CarComparePopup';
import ImageCarousel from '@src/actors/buyer/components/CarDetail/ImageCarousel';

function CarWishlist() {
    const [cars, setCars] = useState([]);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    // Lấy danh sách xe yêu thích từ API
    const getCarFavour = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/getfavourcars/1", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
    
            const result = await response.json();
    
            console.log("API Response:", result.data.cars);  // In dữ liệu trả về từ API
    
            if (Array.isArray(result.data.cars)) {
                setCars(result.data.cars);
            } else {
                console.error("API response is not an array");
                setCars([]);
            }
        } catch (error) {
            console.error("Error occurred while fetching favour cars:", error.message);
            setCars([]);
        }
    };

    useEffect(() => {
        getCarFavour();   
    }, []);

    // const toggleAddToBag = (carId) => {
    //     setCars((prevCars) =>
    //         prevCars.map((car) =>
    //             car.id === carId ? { ...car, isSold: !car.isSold } : car
    //         )
    //     );
    // };

    const handleDeleteCar = (carId) => {
        setCars((prevCars) =>
            prevCars.filter((car) => car.CarID !== carId)
        );
        console.log(`Car with id ${carId} has been removed.`);
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
                    <div key={car.CarID} className="bg-white p-4 rounded-lg shadow-md">
                        {/* <img
                            src={car.image}
                            alt={`${car.name}`}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        /> */}
                        <ImageCarousel images={car.images} />
                        <div className="flex items-center justify-between mt-3">
                            <h2 className="text-lg font-semibold">{car.title}</h2>
                            <div className="flex space-x-2">
                                <HeartIcon
                                    isFavourite={true}
                                    CarID={car.CarID}
                                    handleDeleteCar={handleDeleteCar}
                                    BuyerID={1}
                                />
                                <CompareIcon onClick={() => handleCompareClick(car)} />
                            </div>
                        </div>
                        <p className="text-gray-600">Price: ${car.price}</p>
                        <button
                            className={`mt-4 w-full py-2 rounded-md font-medium ${
                                !car.isSold ? "bg-green-500 text-white" : "bg-black text-white"
                            }`}
                        >
                            {car.isSold ? "Sold" : "Available"}
                        </button>
                    </div>
                ))}
            </div>

            {/* Popup */}
            <CarComparePopup
                isVisible={isPopupVisible}
                car1={selectedCar}
                initialCar2={selectedCar}
                onClose={closePopup}
            />
        </div>
    );
}

export default CarWishlist;