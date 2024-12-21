import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

// Dữ liệu mẫu về các cuộc đấu giá
const upcomingAuctions = [
  {
    AuctionID: 1,
    Title: 'Porsche 911 Turbo S',
    StartTime: "2024-12-01T10:00:00.000Z", // Dùng trường StartTime
    InitialPrice: '1.200.000.000 VND',
    Duration: 120, // Thời gian đấu giá 120 phút
    image: '/api/placeholder/400/250',
    status: 'NOT_STARTED', // Trạng thái
  },
  {
    AuctionID: 2,
    Title: 'Mercedes-Benz S-Class',
    StartTime: "2024-12-01T15:00:00.000Z", // Dùng trường StartTime
    InitialPrice: '3.500.000.000 VND',
    Duration: 90, // Thời gian đấu giá 90 phút
    image: '/api/placeholder/400/250',
    status: 'OPEN', // Trạng thái
  }
];

const NewsPage = () => {
  const history = useHistory();
  const [Auctions, setAuctions] = useState([]);
  const getFormattedDate = (startTime) => {
    const date = new Date(startTime);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const formattedTime = `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
    return { formattedDate, formattedTime };
  };

  const handleNavigateAuction = (auctionId, auction) => {
    // Truyền thêm các tham số như status, title
    history.push(`/auction/${auctionId}?id=${auctionId}`);
  };

  const handleNavigateCar = (CarID) => {
    // Truyền thêm các tham số như status, title
    history.push(`/car/${CarID}`);
  };

  const getAuctions = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/getAuctions", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();

      console.log("API Response:", result.data); // In dữ liệu trả về từ API

      if (Array.isArray(result.data)) {
        setAuctions(result.data);
      } else {
        console.error("API response is not an array");
        setAuctions([]);
      }
    } catch (error) {
      console.error("Error occurred while fetching favour cars:", error.message);
      setAuctions([]);
    }
  };

  useEffect(() => {
    getAuctions();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1h2a2 2 0 012 2v9a2 2 0 01-2 2z" />
        </svg>
        Tin Tức Đấu Giá
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {Auctions.map((auction) => {
          const { formattedDate, formattedTime } = getFormattedDate(auction.StartTime);
          
          return (
            <div key={auction.AuctionID} className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <img src={auction.Car.images[0]} alt={auction.Title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-700 mb-2">{auction.Title}</h2>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span>Ngày: {formattedDate}</span>
                  </div>
                  <div className="flex items-center">
                    <span>Thời gian bắt đầu đấu giá:: {formattedTime}</span>
                  </div>
                  <div className="flex items-center">
                    <span>Giá khởi điểm: {auction.InitialPrice}</span>
                  </div>
                  <div className="flex items-center">
                    <span>
                      Thời lượng đấu giá: {Math.floor(auction.Duration / 60)} giờ {auction.Duration % 60} phút
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className={`font-semibold ${auction.Status === 'OPEN' ? 'text-green-500' : 'text-red-500'}`}>
                      {auction.Status === 'OPEN' ? 'Mở cửa' : 'Chưa bắt đầu'}
                    </span>
                  </div>
                  <div className="flex space-x-3 mt-3">
                    <button 
                    onClick={() => handleNavigateCar(auction.Car.CarID)}
                    className="flex-1 p-2 border rounded bg-blue-100 hover:bg-blue-200 transition-colors">
                      Xem Xe
                    </button>
                    <button
                      onClick={() => handleNavigateAuction(auction.AuctionID, auction)}
                     className="flex-1 p-2 border rounded bg-gray-100 hover:bg-gray-200 transition-colors">
                      Xem Chi Tiết Đấu Giá
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsPage;
