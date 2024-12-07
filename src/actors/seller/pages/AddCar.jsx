import React, { useState } from 'react';
import AddCarContainer from '../container/AddCarContainer';
import InstallmentSetup from '../container/InstallmentSetup';
import DetailDescription from '../container/DetailDescription';
import VerticalCard from '../components/Card/VericalCard';
import { soldCarData } from '@src/mock/carData';
import { useDispatch, useSelector } from 'react-redux';
import checkFalsyObject from '@src/utils/checkFalsyObject'
import PopupPreviewCar from '../components/PopupPreviewCar';
const soldCarMockData = soldCarData;

export default function AddCar() {
  // const [checkClicked, setCheckClicked] = useState(false)
  // const [addCarData, setAddCarData] = useState({});
  
  const dispatch = useDispatch();
  const addCarData = useSelector((state) => state.addCar)// Example slice selector
  const userInfo = useSelector((state) => state.user);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false)
  const [imageFile, setImageFile] = useState([]);
  let user = useSelector((state) => state.addCar)

  async function onPreviewCarModal() {
    // const user = 
    console.log(user)
    setIsPreviewModalOpen(true)
  }
  async function onSubmitCar () {

    try {
      const formData = new FormData();
      console.log(userInfo)
      formData.append('user_id', JSON.stringify(userInfo.id)); // Stringify the JSON object
    
      // Append the car data as JSON in a separate part
      formData.append('carData', JSON.stringify(addCarData)); // Stringify the JSON object
      console.log("imageFile in Add Car", imageFile)

      // Append the image files
      imageFile.forEach((file) => {
        console.log(file)
        formData.append('image', file); // The backend expects 'image' field for files
      });
      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
      // console.log(formData)
      const response = await fetch(`${import.meta.env.VITE_URL}/api/cars`, {
        method: 'POST',
        body: formData, // FormData will automatically set the correct Content-Type
      });
  
      if (!response.ok) {
        throw new Error('Failed to save data');
      }

      console.log('Data saved successfully!', await response.json());
    } catch (error) {
      console.error('Error saving data:', error);
    }
  
  }
  return (
    <>
    <div className="container">

      <hr className="my-10 border-gray-300" />
      <div id="container" className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10">
        {/* Main Content */}
        <section id="Main Add Car" className="space-y-8 lg:w-4/5">
          <h1 className="mb-4 text-3xl font-bold">Add car info</h1>

          <AddCarContainer setImageFile={setImageFile}/>
          <h2 className="mt-8 text-2xl font-bold">Installment Range Setup</h2>

          <InstallmentSetup />
          <div className="my-20" />

          <DetailDescription />
        </section>

        {/* Side Content */}

        <section id="Side Sold Car" className="flex flex-col space-y-6 lg:w-1/5">
          <h2 className="mt-8 text-2xl font-bold">Sold Car</h2>

          {soldCarMockData.map((car) => (
            <VerticalCard key={car.id} car={car} />
          ))}
        </section>
        

      </div>
      <div id='footer' className='fixed bottom-0 left-0 w-4/6 h-fit bg-slate-100'>
          <button className='btn ml-[360px] w-72 mr-4 bg-slate-200' onClick={onPreviewCarModal}>Preview</button>
          <button className='btn w-72 bg-slate-200' onClick={onSubmitCar}>Post</button>
        </div>
    </div>
          {
            isPreviewModalOpen ? (
              <PopupPreviewCar props={user} imagesFiles={imageFile} closeButton={setIsPreviewModalOpen}/>
          ) : ''
          }
    </>
  );
}
