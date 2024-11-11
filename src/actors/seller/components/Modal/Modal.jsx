import React from 'react';
import UserCard from '../Card/User/index';

export default function Modal({ isOpen, onClose, waiterList }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="max-w-lg p-6 bg-white rounded-lg shadow-lg max-h-[50rem]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Test Car Requests</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            X
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          {waiterList.map((waiter) => (
            <UserCard user={waiter} />
          ))}
        </div>
      </div>
    </div>
  );
}
