import React, { useState } from 'react';
import CardContainer from "@src/actors/buyer/components/Common/CardContainer";
import Form from "@src/actors/buyer/components/Popup/Form";

const SellerInfoCard = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleDriveRequestClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <CardContainer className="w-80 h-96 mx-auto bg-white rounded-xl shadow-lg p-8 text-center space-y-6 flex flex-col justify-between">
        {/* Seller Avatar */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/80" // Replace with the actual image URL
            alt="Seller Avatar"
            className="w-20 h-20 rounded-full border-2 border-gray-200"
          />
        </div>

        {/* Seller Name and Location */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Dinh Trung Kien</h3>
          <p className="text-gray-500">420 Cau Giay, Ha Noi</p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            className="w-full py-2 text-white bg-blue-600 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
            onClick={handleDriveRequestClick} // Gọi popup
          >
            Drive request
            <span className="ml-1">→</span>
          </button>

          <button className="w-full py-2 text-green-600 border border-green-600 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-green-50 transition">
            Call Seller
            <span className="ml-1">→</span>
          </button>
        </div>

        {/* View All Listings Link */}
        <div>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 font-medium flex items-center justify-center"
          >
            View All listing at this seller
            <span className="ml-1">→</span>
          </a>
        </div>
      </CardContainer>

      {/* Popup Form */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-transparent p-6 rounded shadow-lg w-full max-w-md">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 focus:outline-none"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10"  // Updated size here
              >
                <circle cx="12" cy="12" r="10" fill="red" />
                <path d="M9 9l6 6M15 9l-6 6" stroke="white" />
              </svg>
            </button>
            <Form 
            carId = {1}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SellerInfoCard;
