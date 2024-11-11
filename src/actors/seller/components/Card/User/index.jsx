import React from 'react';

export default function UserCard({ user }) {
  return (
    <div className="flex gap-3 p-4 space-x-4 border shadow-md h-36 w-96 rounded-2xl border-zinc-800">
      {/* Profile Avatar */}
      <div className="flex-shrink-0">
        <div className="avatar">
          <div className="w-24 h-24 overflow-hidden rounded-xl">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="avatar"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* User Information */}
      <div className="flex flex-col justify-between w-full">
        <h1 className="text-xl font-semibold">{user.name}</h1>
        <p className="text-sm text-gray-500">{user.requestedTime} ago</p>

        {/* Contact Information */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <img
              src="src/mock/telephone.png"
              alt="telephone"
              className="w-5 h-5"
            />
            <div className="text-sm text-gray-700">{user.phone}</div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="src/mock/Overlay.png" alt="place" className="w-5 h-5" />
            <div className="text-sm text-gray-700">{user.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
