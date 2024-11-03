import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppRouter from './router';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Provider store={store()}>
      <Header />
      <AppRouter />
    </Provider>
  );
};

export default App;
