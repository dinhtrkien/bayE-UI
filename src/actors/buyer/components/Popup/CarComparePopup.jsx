import React, { useState, useEffect } from "react";
import icons from "@src/components/Icon/carDetailIcon";
import ChangeCarButton from "@src/actors/buyer/components/Popup/ChangeCarButton";

const CarComparePopup = ({ isVisible, car1: initialCar1, initialCar2, onClose }) => {
    if (!isVisible) return null;

    const [car1, setCar1] = useState(initialCar1);
    const [car2, setCar2] = useState(initialCar2);
    const [specs1, setSpecs1] = useState([]);
    const [specs2, setSpecs2] = useState([]);

    const getSpecs = (car) => [
        { label: "Made in", value: car?.MadeIn, icon: icons.Body },
        { label: "Mileage", value: car?.mileage, icon: icons.Mileage },
        { label: "Fuel", value: car?.Fuel, icon: icons.Fuel },
        { label: "Year", value: car?.FactoryYear, icon: icons.Year },
        { label: "Gear type", value: car?.Gearbox, icon: icons.Transmission },
        { label: "Seat number", value: car?.SeatNumber, icon: icons.DriveType },
        { label: "Condition", value: car?.Condition, icon: icons.Condition },
        { label: "Engine", value: car?.EngineCapacity, icon: icons.Engine },
        { label: "Door", value: car?.DoorNumber, icon: icons.Door },
        { label: "Previous owner", value: car?.NumberOwners, icon: icons.Cylinder },
        { label: "Weight", value: car?.Weight, icon: icons.Color },
        { label: "Registration Status", value: car?.RegistrationStatus, icon: icons.VIN },
    ];

    const fetchCarDetails = async (CarID) => {
        try {
            const response = await fetch(`http://localhost:8000/api/cars/${CarID}`);
            if (!response.ok) {
                throw new Error('Car not found');
            }
            const carDetails = await response.json();
    
            // Tạo object mới với các thuộc tính cần thiết
            const carDetails2 = {
                price: carDetails.Price,
                title: carDetails.Title,
                images: carDetails.images,
                mileage: carDetails.KilometersCount,
                Fuel: carDetails.FuelType,
                FactoryYear: carDetails.FactoryYear,
                transmission: carDetails.Transmission,
                driveType: carDetails.DriveType,
                Condition: carDetails.Condition,
                EngineCapacity: carDetails.EngineCapacity,
                DoorNumber: carDetails.DoorNumber,
                year: carDetails.Year,
                MadeIn : carDetails.MadeIn,
                Gearbox : carDetails.Gearbox,
                SeatNumber: carDetails.SeatNumber,
                RegistrationStatus: carDetails.RegistrationStatus,
                NumberOwners: carDetails.NumberOwners,
                Weight: carDetails.Weight,
            };
    
            return carDetails2;
        } catch (error) {
            console.error('Failed to fetch car details:', error.message);
            return null;
        }
    };
    

    const onChangeCar1 = async (CarID) => {
        const carDetails = await fetchCarDetails(CarID);
        if (carDetails) {
            setCar1(carDetails);
            setSpecs1(getSpecs(carDetails));
        }
    };

    const onChangeCar2 = async (CarID) => {
        const carDetails2 = await fetchCarDetails(CarID);
        if (carDetails2) {
            setCar2(carDetails2);
            setSpecs2(getSpecs(carDetails2));
        }
    };

    useEffect(() => {
        setSpecs1(getSpecs(car1));
    }, [car1]);

    useEffect(() => {
        setSpecs2(getSpecs(car2));
    }, [car2]);

    const handleClickOutside = (e) => {
        if (e.target.id === "popup-overlay") {
            onClose();
        }
    };

    return (
        <div
            id="popup-overlay"
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={handleClickOutside}
        >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-lg font-semibold mb-4 text-center">Compare Cars</h2>
                <div className="flex space-x-4">
                    {/* Car 1 */}
                    <div className="w-1/2 relative">
                        {car1 && (
                            <div>
                                <ChangeCarButton onSearchResultSelect={onChangeCar1} />
                                <p className="mb-4 w-40 truncate">
                                    <strong>Name:</strong> {car1?.title}
                                </p>
                                <p className="mb-4">
                                    <strong>Price:</strong> ${car1?.price}
                                </p>
                                <img src={car1.images[0]} alt={car1?.title} className="w-full h-40 object-cover rounded-md mb-6" />
                                <div className="space-y-4">
                                    {specs1.map((spec, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-gray-500 text-lg">{spec.icon}</span>
                                                <span className="font-medium">{spec.label}</span>
                                            </div>
                                            <span>{spec.value || "Data not available"}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="border-l border-gray-300"></div>

                    {/* Car 2 */}
                    <div className="w-1/2 relative">
                        {car2 && (
                            <div>
                                <ChangeCarButton onSearchResultSelect={onChangeCar2} />
                                <p className="mb-4 w-40 truncate">
                                    <strong>Name:</strong> {car2?.title}
                                </p>
                                <p className="mb-4">
                                    <strong>Price:</strong> ${car2?.price}
                                </p>
                                <img src={car2.images[0]} alt={car2?.title} className="w-full h-40 object-cover rounded-md mb-6" />
                                <div className="space-y-4">
                                    {specs2.map((spec, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-gray-500 text-lg">{spec.icon}</span>
                                                <span className="font-medium">{spec.label}</span>
                                            </div>
                                            <span>{spec.value || "Data not available"}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarComparePopup;
