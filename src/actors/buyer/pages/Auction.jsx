import React, { useEffect, useState } from 'react';
import Countdown from '../components/Countdown';
import LeaderBoard from '../components/LeaderBoard/LeaderBoard';
import { useSelector } from 'react-redux';
import { socket } from '@src/socketConfig';
const url = import.meta.env.VITE_URL;

const getTimeAgo = (time) => {
  const diffInSeconds = Math.floor((Date.now() - time) / 1000);
  return `${diffInSeconds} seconds ago`;
};

export default function Auction() {

  const searchParams = new URLSearchParams(location.search);
  const status = searchParams.get('status');

  console.log(status);
  const auctionInfo = {
    id: '1',
    title: 'BMW',
    description: 'Experience the thrill of owning a luxurious BMW with premium features.',
    initialPrice: 1,
  };
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [biddingPrice, setBiddingPrice] = useState(auctionInfo.initialPrice);
  const [leaderBoard, setLeaderBoard] = useState([
    {
      name: 'Phu',
      timestamp: Date.now() - 1732772042 * 1000, // Adjusting time to be relative for the example
      bid: 4,
    },
  ]);

  const [error, setError] = useState(null);
  const userInfo = useSelector((state) => state.user.user);

  console.log(userInfo)
  const currentHighestPlayer = leaderBoard[0];
  const highestPrice = auctionInfo.initialPrice > currentHighestPlayer.bid ? auctionInfo.initialPrice : currentHighestPlayer.bid;
  async function handleBidding() {
    const data = {
      name: userInfo.name || "Phu",
      bid: biddingPrice,
    };
    const response = await fetch(`${url}/api/auction/${auctionInfo.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    console.log('Registration successful:', result);
  }

  function calculateBiddingPrice(value) {
    setBiddingPrice(parseInt(highestPrice) + parseInt(value));
  }
  async function fetchLeaderBoard() {
    try {
      const response = await fetch(`${url}/api/auction/${auctionInfo.id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const arrayLeaderBoard = [...data.message];
      if (!arrayLeaderBoard.length) {
        setError('No data in array');
      } else {
        setLeaderBoard(arrayLeaderBoard); // Ensure a new Map instance is created
        setError(null)
      }
    } catch (error) {
      console.error('Failed to fetch leaderboard:', error);
    }
  }
  function onConnect() {
    setIsConnected(true);
  }
  useEffect(() => {
    // Real-time updates
    fetchLeaderBoard();
    socket.on('connection', onConnect);
    socket.on('leaderboard', (data) => {
      console.log(data.name)
      console.log(userInfo.name)
      if (data.name === userInfo.name) {
        setLeaderBoard((prevs) => {
          console.log(prevs)

         return prevs.filter((prev) => prev.name != userInfo.name) 
      })
      }
      setLeaderBoard((prev) => [data].concat(prev))
    });
    return () => {
      socket.off('leaderboard');
    };
  }, []);
  useEffect(() => {

    setBiddingPrice(highestPrice)
  }, [leaderBoard])
  return (
    <div className="max-w-5xl mx-auto mt-10 p-5">
      {isConnected ? <p>IS CONNECTED SOCKET</p> : <p>NOT CONNECTED SOCKET</p>}
      {/* Auction Main Content */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Image Section */}
        <div className="flex-1">
          <img src={'https://i.imgur.com/xieN5On.jpeg'} alt="Auction Item" className="rounded-xl shadow-lg object-cover w-full" />
        </div>

        {/* Details Section */}
        <div className="flex-1 space-y-6">
          {/* Title and Description */}
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800">{auctionInfo.title}</h1>
            <p className="text-2xl font-semibold text-blue-600">{highestPrice.toLocaleString()} VND</p>
            <p className="text-gray-600 mt-4">{auctionInfo.description}</p>
          </div>

          {/* Current Bid Info */}
          <div className="flex items-center gap-4">
            <img src={'https://i.imgur.com/xieN5On.jpeg'} alt={currentHighestPlayer.name} className="w-16 h-16 rounded-full border-2 border-gray-300 shadow-md object-cover" />
            <div>
              <p className="text-lg text-gray-700">
                <strong>Highest bid by:</strong> {currentHighestPlayer.name}
              </p>
              <p className="text-sm text-gray-500">{() => getTimeAgo(currentHighestPlayer.timestamp)}</p>
            </div>
          </div>

          {/* Auction Countdown and Button */}
          <div className="flex items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-700">Auction Ending In</h3>
              <Countdown timestampLeft={300} />
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-3">
                <div className="flex flex-row justify-evenly gap-4 [&>*]:px-4 [&>*]:py-2 [&>*]:bg-slate-200 [&>*]:rounded-xl ">
                  <button value={1} className="hover:bg-slate-300" onClick={(e) => calculateBiddingPrice(e.target.value)}>
                    +10M
                  </button>
                  <button value={2} className="hover:bg-slate-300" onClick={(e) => calculateBiddingPrice(e.target.value)}>
                    +20M
                  </button>
                  <button value={3} className="hover:bg-slate-300" onClick={(e) => calculateBiddingPrice(e.target.value)}>
                    +30M
                  </button>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-2 px-4 rounded-lg shadow-lg transition" onClick={handleBidding}>
                  Place a Bid {biddingPrice}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LeaderBoard Section */}
      <div className="mt-10">{error ? <p>No one bid yet</p> : <LeaderBoard leaderBoard={leaderBoard} />}</div>
    </div>
  );
}
