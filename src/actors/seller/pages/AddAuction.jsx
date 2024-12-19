import React, { useState } from 'react';

const SellerAuctionPage = () => {
  const [auctionDetails, setAuctionDetails] = useState({
    selectedCar: '',
    startingPrice: '',
    auctionTime: ''
  });

  const userCars = [
    { id: 1, name: 'Toyota Camry 2020' },
    { id: 2, name: 'Honda Civic 2018' },
    { id: 3, name: 'Ford Ranger 2021' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuctionDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!auctionDetails.selectedCar || !auctionDetails.startingPrice || !auctionDetails.auctionTime) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    console.log('Thông tin đấu giá:', auctionDetails);
    alert('Đăng thông tin đấu giá thành công!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Đăng Thông Tin Đấu Giá</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2">Chọn Xe</label>
          <select
            name="selectedCar"
            value={auctionDetails.selectedCar}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>Chọn xe của bạn</option>
            {userCars.map((car) => (
              <option key={car.id} value={car.name}>{car.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2">Tieu de</label>
          <select
            name="selectedCar"
            value={auctionDetails.selectedCar}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>Chọn xe của bạn</option>
            {userCars.map((car) => (
              <option key={car.id} value={car.name}>{car.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2">Giá Khởi Điểm</label>
          <input
            type="number"
            name="startingPrice"
            value={auctionDetails.startingPrice}
            onChange={handleInputChange}
            placeholder="Nhập giá khởi điểm"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Thời Gian Đấu Giá (giờ)</label>
          <input
            type="number"
            name="auctionTime"
            value={auctionDetails.auctionTime}
            onChange={handleInputChange}
            placeholder="Nhập thời gian đấu giá (giờ)"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Thời Gian Đấu Giá (Ngay)</label>
          <input
            type="number"
            name="auctionTime"
            value={auctionDetails.auctionTime}
            onChange={handleInputChange}
            placeholder="Nhập thời gian đấu giá (ngay)"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Đăng Thông Tin Đấu Giá
          </button>
        </div>
      </form>
    </div>
  );
};

export default SellerAuctionPage;