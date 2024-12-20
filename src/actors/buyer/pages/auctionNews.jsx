import React from 'react';

// Dữ liệu mẫu về các cuộc đấu giá
const upcomingAuctions = [
  {
    id: 1,
    title: 'Porsche 911 Turbo S',
    date: '22/12/2024',
    time: '14:00',
    startingPrice: '1.200.000.000 VND',
    image: '/api/placeholder/400/250'
  },
  {
    id: 2,
    title: 'Mercedes-Benz S-Class',
    date: '25/12/2024',
    time: '15:30',
    startingPrice: '3.500.000.000 VND',
    image: '/api/placeholder/400/250'
  }
];

const NewsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1h2a2 2 0 012 2v9a2 2 0 01-2 2z" />
        </svg>
        Tin Tức Đấu Giá
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {upcomingAuctions.map((auction) => (
          <div key={auction.id} className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
            <img src={auction.image} alt={auction.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              {/* Hiển thị tiêu đề */}
              <h2 className="text-lg font-bold text-gray-700 mb-2">{auction.title}</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Ngày: {auction.date}</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M13 5h2.5a2 2 0 012 2v2" />
                  </svg>
                  <span>Giá khởi điểm: {auction.startingPrice}</span>
                </div>
                <div className="flex space-x-3 mt-3">
                  <button className="flex-1 p-2 border rounded bg-blue-100 hover:bg-blue-200 transition-colors">
                    Xem Xe
                  </button>
                  <button className="flex-1 p-2 border rounded bg-gray-100 hover:bg-gray-200 transition-colors">
                    Xem Chi Tiết Đấu Giá
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
