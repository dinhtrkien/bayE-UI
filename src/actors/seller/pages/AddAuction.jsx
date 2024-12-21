import ImageCarousel from '@src/actors/buyer/components/CarDetail/ImageCarousel';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PhoneNumberInput } from '../components/PriceInput';
import formatPrice from '@src/utils/formatPrice';
import Calendar from '../components/Calendar';
import TimePicker from '../components/TimePicker';

function formatDateTime(date, time) {
  const [day, month, year] = date.split('-');
  const formattedDate = `${year}-${month}-${day}T${time}:00Z`; // Combine date and time
  return formattedDate;

}
const url = import.meta.env.VITE_URL;
const SellerAuctionPage = () => {
  const userInfo = useSelector((state) => state.user.user);
  const [userCars, setUserCars] = useState([
    { id: 1, name: 'Toyota Camry 2020', images: ['https://res.cloudinary.com/dhgwdfhcf/image/upload/v1733569988/cars/d9cjg56allh3tnz65bz6.webp'], price: 10000000000 },
    { id: 2, name: 'Honda Civic 2018', images: ['https://res.cloudinary.com/dhgwdfhcf/image/upload/v1733569988/cars/d9cjg56allh3tnz65bz6.webp'], price: 10000000000 },
    { id: 3, name: 'Ford Ranger 2021', images: ['https://res.cloudinary.com/dhgwdfhcf/image/upload/v1733569988/cars/d9cjg56allh3tnz65bz6.webp'], price: 10000000000 },
  ]);

  const [selectedCarPosition, setSelectedCarPosition] = useState(0);

  const selectedCar = userCars[selectedCarPosition];

  const selectedCarImages = userCars[selectedCarPosition].images;
  const [title, setTitle] = useState(null);
  const [startingPrice, setStartingPrice] = useState(28000000);
  const [auctionDuration, setAuctionDuration] = useState(3);
  const [auctionStartTime, setAuctionStartTime] = useState({
    date: '23-12-2024',
    time: '10:00',
  });
  const [startPriceConstaint, setStartPriceConstraint] = useState([0, 1000000000000]);

  // Handlers for each input
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuctionDurationChange = (e) => {
    setAuctionDuration(parseInt(e.target.value) );
  };
  const handleAuctionStartTimeChange = (value, type) => {
    if (type === 'time') {
      setAuctionStartTime((time) => ({
        ...time,
        time: value,
      }));
    } else {
      setAuctionStartTime((time) => ({
        ...time,
        date: value,
      }));
    }
  };
  useEffect(() => {
    console.log(auctionStartTime);
  }, [auctionStartTime]);

  useEffect(() => {
    console.log(typeof auctionDuration);
    console.log(auctionDuration);
  }, [auctionDuration]);
  const handleStartingPrice = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setStartingPrice(parseInt(value));
  };

  // {
  //   "title": "Auction for whatever",
  //   "initialPrice": 15000.00,
  //   "duration": 420,
  //   "startTime": "2024-12-01T10:00:00Z",
  //   "carID": 2
  // }
  const handlePost = async (e) => {
    e.preventDefault();
    if (!title || !startingPrice || !auctionDuration) {
      console.log(title)
      console.log(startingPrice)
      console.log(auctionDuration)
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    // alert('Đăng thông tin đấu giá thành công!');
    const date = formatDateTime(auctionStartTime.date, auctionStartTime.time);
    const body = {
      title: title,
      initialPrice:  startingPrice,
      duration: auctionDuration,
      startTime: date,
      carID: selectedCar.id,
    }
    const response = await axios.post(`${import.meta.env.VITE_URL}/api/auctions`, body)
    if (response.status >= 400) {
      alert(response.data);
    }
    const data = response.data;
    console.log("Response after POST", data)
  };
  useEffect(() => {
    const price = selectedCar.price;
    if (!price) {
      return;
    }
    const maxPrice = (price * 20) / 100;
    const minPrice = (price * 5) / 100;
    setStartPriceConstraint([minPrice, maxPrice]);
  }, [selectedCarPosition, selectedCar]);

  useEffect(() => {
    async function getSellerCars() {
      if (userInfo) {
        const id = userInfo.id;
        const carResponse = await axios.get(`${import.meta.env.VITE_URL}/api/cars/user/${id}`);
        const datas = carResponse.data.message;

        const carData = datas.map((data) => {
          return {
            id: data.CarID,
            name: data.carmakes.Name.concat(' ', data.carmodels.Name),
            images: data.images,
            price: data.Price,
          };
        });
        setUserCars(carData);
      }
    }
    getSellerCars();
  }, []);

  return (
    <div className="container mx-auto p-4 flex flex-row justify-center gap-20 max-w-[900px] min-h-[700px]">
      <div>
        <h1 className="text-4xl font-bold mb-6">Auction Post</h1>
        <div>
          <label className="block mb-2 text-3xl ">Choose Your Car To Bid</label>
          <select onChange={(e) => setSelectedCarPosition(e.target.value)} name="selectedCar" className="mb-6  w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 " required>
            <option value="" disabled>
              Choose your car
            </option>
            {userCars.map((car, index) => (
              <option key={car.id} value={index}>
                {car.name}
              </option>
            ))}{' '}
          </select>
          {selectedCarImages != '' ? <ImageCarousel images={selectedCarImages} max_width="max-w-lg" min_width={'w-[400px]'} /> : ''}
        </div>
      </div>
      <form className="space-y-6 min-w-96">
        <div>
          <label className="block mb-2 text-3xl">Title</label>
          <input type="text" onChange={handleTitleChange} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required></input>
        </div>
        <div>
          <label className="block mb-2 text-3xl">Starting Price</label>
          {/* <input type="number" name="startingPrice" value={auctionDetails.startingPrice} onChange={handleStartingPrice} placeholder="Enter Starting Price" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required /> */}
          <PhoneNumberInput width={'w-fit'} placeholder={`Price range: ${formatPrice(startPriceConstaint[0])} - ${formatPrice(startPriceConstaint[1])}`} constraintFunction={handleStartingPrice} contentMin={`Minimum amount is 5% ${startPriceConstaint[0]} of car value`} minLimit={startPriceConstaint[0]} contentMax={`Maximum amount is 5% ${startPriceConstaint[1]} of car value`} maxLimit={startPriceConstaint[1]} />
        </div>

        <div>
          <label className="block mb-2 text-3xl ">Bidding Duration</label>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-evenly gap-4 [&>*]:px-4 [&>*]:py-2 [&>*]:bg-slate-200 [&>*]:rounded-xl ">
              <button type="button" value={3} className={`hover:bg-slate-300 border border-zinc-700 ${auctionDuration === '3' ? 'text-xl' : ''} `} onClick={handleAuctionDurationChange}>
                3 minutes
              </button>
              <button type="button" value={5} className={`hover:bg-slate-300 border border-zinc-700  ${auctionDuration === '5' ? 'text-xl' : ''} `} onClick={handleAuctionDurationChange}>
                5 minutes
              </button>
              <button type="button" value={10} className={`hover:bg-slate-300 border border-zinc-700 ${auctionDuration === '10' ? 'text-xl' : ''} `} onClick={handleAuctionDurationChange}>
                10 minutes
              </button>
            </div>
          </div>{' '}
          {/* <input type="number" name="auctionTime" value={`${auctionDuration} minutes`} onChange={handleAuctionDurationChange} placeholder="Enter Bidding Duration" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required /> */}
        </div>
        <div>
          <label className="block mb-2 text-3xl">Starting Time</label>
          <div className="flex items-center gap-10 h-[100px]">
            <TimePicker auctionStartTime={auctionStartTime} handleAuctionStartTimeChange={handleAuctionStartTimeChange} />

            <Calendar />
          </div>

          {/* <input type="number" name="auctionTime" value={auctionStartTime} onChange={(e) => handleAuctionStartTimeChange(e.target.value, 'date')} placeholder="Enter Starting Time" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required /> */}
        </div>
        <div className="text-center mt-24">
          <button onClick={handlePost} type="submit" className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Post Auction
          </button>
        </div>
      </form>
    </div>
  );
};

export default SellerAuctionPage;
