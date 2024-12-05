import React, { useState } from "react";
import ConfirmPopup from "@src/actors/buyer/components/Popup/ConfirmPopup.jsx"; // Import ConfirmPopup

const HeartIcon = ({ className = "w-6 h-6", onClick, BuyerID, CarID, isFavourite, handleDeleteCar ,setIdDelete}) => {
  const [isred, setIsred] = useState(isFavourite); // Khởi tạo từ tham số isFavourite
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Quản lý trạng thái popup


  const openPopup = () => setIsPopupOpen(true);  // Mở popup
  const closePopup = () => setIsPopupOpen(false); // Đóng popup

  const handleClick = async () => {
    // setIsred(!isred); // Toggle trạng thái isred

    if (onClick) {
      onClick();
    }

    if (isred) {
      openPopup(); // Mở popup nếu đang là trạng thái "liked"
    } else {
      await handleAddFavour(); // Nếu chưa yêu thích, thêm yêu thích ngay
    }
  };

  const handleDeleteFavour = () => {
    // Gọi handleDeleteCar từ props để xóa car khỏi danh sách
    handleDeleteCar(CarID);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`${className} ${isred ? "text-red-500" : "text-gray-500"} hover:text-red-700`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isred ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </button>

      {/* Hiển thị popup xác nhận khi isred là true */}
      {isPopupOpen && (
        <ConfirmPopup
          setIsred={setIsred}
          isred = {isred}
          setIdDelete={setIdDelete}
          BuyerID={BuyerID}
          CarID = {CarID}
          onCancel={closePopup} // Truyền hàm đóng popup
          handleDeleteFavour={handleDeleteFavour} // Truyền hàm xóa vào popup
        />
      )}
    </div>
  );
};

export default HeartIcon;