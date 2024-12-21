import formatPrice from "@src/utils/formatPrice";
import { multiplyPrice } from "../../pages/Auction";

export default function LeaderBoard({ leaderBoard }) {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden max-w-lg mx-auto mt-16">
      <div className="bg-gray-100 py-2 px-4">
        <h2 className="text-xl font-semibold text-gray-800">Top Users</h2>
      </div>
      <ul className="divide-y divide-gray-200">
        {leaderBoard.map((leader) => (
          <li key={leader.id} className="flex items-center py-4 px-6">
            <span className="text-gray-700 text-lg font-medium mr-4">{leader.id}</span>
            <img className="w-12 h-12 rounded-full object-cover mr-4" src="https://randomuser.me/api/portraits/women/72.jpg" alt="User avatar" />
            <div className="flex-1">
              <h3 className="text-2xl text-gray-800">{leader.name}</h3>
            </div>
            <div>
              <p className="text-gray-600 text-xl">{multiplyPrice(leader.bid)} VND</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
