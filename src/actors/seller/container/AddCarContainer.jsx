import React, { useState } from 'react';
import ImageUploader from '../components/ImageInput';
import { PhoneNumberInput } from '../components/PriceInput';

export default function AddCarContainer() {
  const tagsMock = ['ABC', 'DEF'];
  return (
    <div className="w-full max-w-4xl p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow-md ">
      {/* Header */}

      {/* Main Container */}
      <div className="flex flex-row space-x-8">
        <ImageUploader width="min-w-28" height="min-h-72" />
        {/* Car Info Section */}
        <div className="flex-1">
          <input type="text" className="w-full text-2xl font-bold border-b-2 border-gray-300 bg-inherit focus:outline-none focus:border-blue-500" placeholder="Car Post Title" />
          <p className="mb-4 italic text-gray-500">Description: Add description here</p>
          {/* Price Label */}
          <div className="flex items-center">
            <label htmlFor="tag" className="w-12 font-semibold text-gray-700">
              Price:
            </label>
            <PhoneNumberInput />
          </div>
          <div className="h-3" />
          {/* Tag Input */}
          <div className="flex items-center space-x-2">
            <label htmlFor="tag" className="w-12 font-semibold text-gray-700">
              Tag:
            </label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option>Select Seat Count</option>
              {tagsMock.map((tag) => (
                <option>{tag}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-xl font-semibold">Gearbox</p>
            <div className="flex gap-2">
              <button className="pl-3 pr-3 transition-colors duration-200 w-fit h-7 rounded-xl bg-slate-200 hover:bg-slate-300">Automatic</button>
              <button className="pl-3 pr-3 transition-colors duration-200 w-fit h-7 rounded-xl bg-slate-200 hover:bg-slate-300">Manual</button>
              <button className="pl-3 pr-3 transition-colors duration-200 w-fit h-7 rounded-xl bg-slate-200 hover:bg-slate-300">Semi-automatic</button>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-xl font-semibold">Fuel</p>
            <div className="flex gap-2">
              <button className="pl-3 pr-3 transition-colors duration-200 w-fit h-7 rounded-xl bg-slate-200 hover:bg-slate-300">Gasoline/Petrol</button>
              <button className="pl-3 pr-3 transition-colors duration-200 w-fit h-7 rounded-xl bg-slate-200 hover:bg-slate-300">Diesel</button>
              <button className="pl-3 pr-3 transition-colors duration-200 w-fit h-7 rounded-xl bg-slate-200 hover:bg-slate-300">Hybrid engine</button>
              <button className="pl-3 pr-3 transition-colors duration-200 w-fit h-7 rounded-xl bg-slate-200 hover:bg-slate-300">Electric</button>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Images */}
      <div className="flex mt-4 space-x-4">
        <ImageUploader width="w-28" height="h-20" />
        <ImageUploader width="w-28" height="h-20" />
        <ImageUploader width="w-28" height="h-20" />
      </div>
    </div>
  );
}
