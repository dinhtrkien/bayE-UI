import icons from '@src/components/Icon/carDetailIcon';
import ChangeCarButton from '@src/actors/buyer/components/Popup/ChangeCarButton'

const CarComparePopup = ({ isVisible, car1, car2, onClose, onChangeCar1, onChangeCar2 }) => {
    if (!isVisible) return null;

    const getSpecs = (car) => [
        { label: "Body", value: car?.body, icon: icons.Body },
        { label: "Mileage", value: car?.mileage, icon: icons.Mileage },
        { label: "Fuel", value: car?.fuel, icon: icons.Fuel },
        { label: "Year", value: car?.year, icon: icons.Year },
        { label: "Transmission", value: car?.transmission, icon: icons.Transmission },
        { label: "Drive Type", value: car?.driveType, icon: icons.DriveType },
        { label: "Condition", value: car?.body, icon: icons.Condition },
        { label: "Engine", value: car?.mileage, icon: icons.Engine },
        { label: "Door", value: car?.fuel, icon: icons.Door },
        { label: "Cylinder", value: car?.year, icon: icons.Cylinder },
        { label: "Color", value: car?.transmission, icon: icons.Color },
        { label: "VIN", value: car?.driveType, icon: icons.VIN },
    ];

    const specs1 = getSpecs(car1);
    const specs2 = getSpecs(car2);

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
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-lg font-semibold mb-4 text-center">Compare Cars</h2>
                <div className="flex space-x-4">
                    {/* Car 1 */}
                    <div className="w-1/2 relative">
                        {car1 && (
                            <div>
                                {/* Nút Change Car */}
                                <ChangeCarButton onClick={onChangeCar1} />
                                <p className="mb-4">
                                    <strong>Name:</strong> {car1.name}
                                </p>
                                <p className="mb-4">
                                    <strong>Price:</strong> ${car1.price}
                                </p>
                                <img
                                    src={car1.image}
                                    alt={car1.name}
                                    className="w-full h-40 object-cover rounded-md mb-6"
                                />
                                <div className="space-y-4">
                                    {specs1.map((spec, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-gray-500 text-lg">{spec.icon}</span>
                                                <span className="font-medium">{spec.label}</span>
                                            </div>
                                            <span>{spec.value || "Data"}</span>
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
                                {/* Nút Change Car */}
                                <ChangeCarButton onClick={onChangeCar2} />
                                <p className="mb-4">
                                    <strong>Name:</strong> {car2.name}
                                </p>
                                <p className="mb-4">
                                    <strong>Price:</strong> ${car2.price}
                                </p>
                                <img
                                    src={car2.image}
                                    alt={car2.name}
                                    className="w-full h-40 object-cover rounded-md mb-6"
                                />
                                <div className="space-y-4">
                                    {specs2.map((spec, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-gray-500 text-lg">{spec.icon}</span>
                                                <span className="font-medium">{spec.label}</span>
                                            </div>
                                            <span>{spec.value || "Data"}</span>
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
