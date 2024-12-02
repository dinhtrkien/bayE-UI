import React, { useEffect, useRef, useState } from 'react';
import ImageUploader from '../components/ImageInput';
import { PhoneNumberInput } from '../components/PriceInput';
import { useDispatch } from 'react-redux';
import { changeMainDescription, changeMainFuelType, changeMainGearbox, changeMainStatus, changeMainTitle } from '../slice/addCarSlice';

export default function AddCarContainer({setImageFile}) {
  const dispatch = useDispatch();

  const [imageSlots, setImageSlots] = useState([1]); // Start with one slot

  const textRef  = useRef(null)
  const [val, setVal] = useState('');

  const [selectedGear, setSelectedGear] = useState(null);
  const [selectedFuel, setSelectedFuel] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);


  const setImageFiles = (index, file) => {
    console.log(`Slot ${index} selected file:`, file);
    console.log(imageSlots.length);
    if (index === imageSlots.length && file) {
      console.log('is full')
      setImageSlots((prevSlots) => [...prevSlots, prevSlots.length + 1]);
      setImageFile((prevSlots) => [...prevSlots, prevSlots.length + 1]);
    }
  };

  function onFuelSelect(fuelType) {
    setSelectedFuel(fuelType)
    dispatch(changeMainFuelType(fuelType))
  }
  function onGearSelect(gearType) {
    setSelectedGear(gearType);
    dispatch(changeMainGearbox(gearType));
  }
  function onStatusSelect(status) {
    setSelectedStatus(status);
    dispatch(changeMainStatus(status));
  }
  function onTitleChange(e) {
    const title = e.target.value
    dispatch(changeMainTitle(title));
  }
  const handleDescriptionChange = (e) => {
    setVal(e.target.value);
    dispatch(changeMainDescription(e.target.value))
  }
  useEffect(() => {
    textRef.current.style.height = textRef.current.scrollHeight + 'px'
  }, [val])
  return (  
    <div className="w-full max-w-4xl p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow-md ">
      {/* Header */}
      {/* Main Container */}
      <div className="flex flex-row space-x-8">
        {/* <ImageUploader width="min-w-28" height="min-h-72" index={0} setImageFile={setImageFile} /> */}
        {/* Car Info Section */}
        <div className="flex-1">
          <input type="text" onChange={onTitleChange} className="w-full text-2xl font-bold border-b-2 border-gray-300 bg-inherit focus:outline-none focus:border-blue-500" placeholder="Car Post Title" />
          {/* <textarea className="mb-4 italic text-gray-500">Description: Add description here</textarea> */}
          <hr className='m-5'/>
          <textarea ref={textRef} onChange={handleDescriptionChange}  className="textarea textarea-bordered w-full text-xl" placeholder="Description: Add description here"></textarea>

          {/* Price Label */}
          <div className="flex items-center">
            <label htmlFor="tag" className="w-12 font-semibold text-gray-700">
              Price:
            </label>
            <PhoneNumberInput />
          </div>
          <div className="h-3" />
          {/* Tag Input */}
          {/* <div className="flex items-center space-x-2">
            <label htmlFor="tag" className="w-12 font-semibold text-gray-700">
              Tag:
            </label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option>Select Seat Count</option>
              {tagsMock.map((tag) => (
                <option>{tag}</option>
              ))}
            </select>
          </div> */}
          <div className="flex flex-col items-start">
            <p className="text-xl font-semibold">Gearbox</p>
            <div className="flex gap-2">
            {["Automatic", "Manual", "Semi-automatic"].map((gearType) => (
                
                <button
                  key={gearType} className={`pl-3 pr-3 transition-colors duration-200 w-fit h-7 rounded-xl 
                    ${selectedGear === gearType ? "bg-blue-400" : "bg-slate-200"} hover:bg-slate-300`}
                  onClick={() => onGearSelect(gearType)}
                >
                  {gearType}
                </button>
              ))}
              {/* <button className="pl-3 pr-3 transition-colors duration-200 w-fit h-7 rounded-xl bg-slate-200 hover:bg-slate-30 "  onClick={() => onGearSelect('Automatic')}>Automatic</button>
              <button className="pl-3 pr-3 transition-colors duration-200 w-fit h-7 rounded-xl bg-slate-200 hover:bg-slate-300" onClick={() => onGearSelect('Manual')}>Manual</button>
              <button className="pl-3 pr-3 transition-colors duration-200 w-fit h-7 rounded-xl bg-slate-200 hover:bg-slate-300" onClick={() => onGearSelect('Semi-automatic')}>Semi-automatic</button> */}
            </div>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-xl font-semibold">Fuel</p>
            <div className="flex gap-2">
            {["Gasoline/Petrol", "Diesel", "Hybrid engine", "Electric"].map((fuelType) => (
              <button
                key={fuelType}
                className={`pl-3 pr-3 transition-colors duration-200 w-fit h-7 rounded-xl ${
                  selectedFuel === fuelType ? "bg-blue-400" : "bg-slate-200"
                } hover:bg-slate-300`}
                onClick={() => onFuelSelect(fuelType)}
              >
                {fuelType}
              </button>
            ))}
            </div>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-xl font-semibold">Status</p>
            <div className="flex gap-2">
              {["New", "Used"].map((status) => (
                <button
                  key={status} className={`pl-3 pr-3 transition-colors duration-200 w-fit h-7 rounded-xl 
                    ${selectedStatus === status ? "bg-blue-400" : "bg-slate-200"} hover:bg-slate-300`}
                  onClick={() => onStatusSelect(status)}
                >
                  {status}
                </button>
              ))}
               {/* <button className="pl-3 pr-3 transition-colors duration-200 w-fit h-7 rounded-xl bg-slate-200 hover:bg-slate-300" onClick={() => onStatusSelect('New')}>New</button> */}
              {/* // <button className="pl-3 pr-3 transition-colors duration-200 w-fit h-7 rounded-xl bg-slate-200 hover:bg-slate-300" onClick={() => onStatusSelect('Used')}>Used</button> */}
            </div>
          </div>

        </div>
      </div>

      {/* Thumbnail Images */}
      <div className="flex mt-4 space-x-4 overflow-x-auto scroll-auto">
        {
          imageSlots.map((slot) => (
            <ImageUploader
              key={slot}
              width="w-56"
              height="h-40"
              index={slot}
              setImageFile={(file) => setImageFiles(slot, file)}
            />
          ))
        }
        {/* <ImageUploader width="w-28" height="h-20" index={1} setImageFile={setImageFile}/>
        <ImageUploader width="w-28" height="h-20" index={2} setImageFile={setImageFile}/>
        <ImageUploader width="w-28" height="h-20" index={3} setImageFile={setImageFile}/>
        <ImageUploader width="w-28" height="h-20" index={4} setImageFile={setImageFile}/> */}
      </div>
    </div>
  );
}
