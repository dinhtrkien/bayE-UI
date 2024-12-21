import React, { useState, useEffect } from "react";
import ConfirmPopup from "@src/actors/buyer/components/Popup/ConfirmPopup.jsx"; // Import ConfirmPopup
import axios from "axios"; // Đảm bảo bạn đã import axios

const HeartIcon = ({
  className = "w-6 h-6",
  onClick,
  BuyerID,
  CarID,
  isFavourite = false, // Giá trị mặc định nếu không truyền
  handleDeleteCar = () => {},
  setIdDelete,
}) => {
  const [isred, setIsred] = useState(isFavourite); // Khởi tạo từ tham số isFavourite
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Quản lý trạng thái popup

  // Gọi hàm kiểm tra favourite khi thành phần được load
  useEffect(() => {
    const fetchFavouriteStatus = async () => {
      const exists = await checkFavour(BuyerID, CarID); // Gọi hàm kiểm tra
      setIsred(exists); // Cập nhật trạng thái dựa trên kết quả
    };

    fetchFavouriteStatus(); // Gọi hàm kiểm tra
  }, [BuyerID, CarID]); // Chạy lại khi BuyerID hoặc CarID thay đổi

  const openPopup = () => setIsPopupOpen(true); // Mở popup
  const closePopup = () => setIsPopupOpen(false); // Đóng popup

  const handleClick = async () => {
    if (onClick) {
      onClick();
    }

    if (isred) {
      openPopup(); // Mở popup nếu đang là trạng thái "liked"
    } else {
      setIsred(!isred);
      await handleAddFavour();
    }
  };

  const checkFavour = async (BuyerID, CarID) => {
    var carId = CarID;
    var buyerId = BuyerID;
    try {
      const response = await axios.get("http://localhost:8000/api/checkFavour", {
        params: { carId, buyerId }, // Truyền BuyerID và CarID qua query params
      });

      if (response.data.exists) {
        console.log("Favourite exists!");
        return true;
      } else {
        console.log("Favourite does not exist.");
        console.log(CarID);
        return false;
      }
    } catch (error) {
      console.error("Error checking favour:", error);
      return false;
    }
  };

  const handleAddFavour = async () => {
    try {
      const payload = { favourData: { BuyerID, CarID } };
      const response = await fetch("http://localhost:8000/api/favour/addFavour", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });


      const result = await response.json();
      if (response.ok) {
        console.log("Favour added successfully:", result);
      } else {
        console.error("Failed to add favour:", result);
      }
    } catch (error) {
      console.error("Error occurred while adding favour:", error.message);
    }
  };

  const handleDeleteFavour = () => {
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

      {isPopupOpen && (
        <ConfirmPopup
          setIsred={setIsred}
          isred={isred}
          setIdDelete={setIdDelete}
          BuyerID={BuyerID}
          CarID={CarID}
          onCancel={closePopup} // Truyền hàm đóng popup
          handleDeleteFavour={handleDeleteFavour} // Truyền hàm xóa vào popup
        />
      )}
    </div>
  );
};

export default HeartIcon;
