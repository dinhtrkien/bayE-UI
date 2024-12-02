import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from './userSlice';
import rootSaga from './saga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store
const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers here if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  preloadedState: {}, // Add your initial state here if needed
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
