import React , { useState } from "react";
import { carWishlist } from '@src/mock/carData';

const ConfirmPopup = ({ BuyerID, CarID, onCancel, handleDeleteFavour, setIsred , isred}) => {

  BuyerID = 1;

console.log("ConfirmPopup");

  const handleDeleteFavourPop = async () => {
    const favourData = {
      BuyerID,
      CarID,
    };

    setIsred(!isred);
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/favour/deleteFavour`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ favourData }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Favour deleted successfully:", result);
      } else {
        console.error("Failed to delete favour:", result);
      }
    } catch (error) {
      console.error("Error occurred while deleting favour:", error.message);
    }

    handleDeleteFavour(CarID);
    onCancel(); // Đóng popup sau khi xóa
  };

  const handleCancel = () =>{
    // setIsred(!isred);
    onCancel();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Are you sure you want to remove this from your favourites?</h3>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            onClick={handleCancel}  // Đóng popup nếu người dùng chọn "Cancel"
            className="px-4 py-2 bg-gray-400 text-white rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteFavourPop}  // Gọi hàm handleDeleteFavour ngay trong ConfirmPopup
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Yes, Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;