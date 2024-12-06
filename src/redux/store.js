import { configureStore } from '@reduxjs/toolkit'
import  addCarSlice  from '@src/actors/seller/slice/addCarSlice'
const store = configureStore({
  reducer: {
    addCar: addCarSlice,
  }
})

export default store