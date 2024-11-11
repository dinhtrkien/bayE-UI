import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppRouter from './router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Provider store={store()}>
      <Header />
      <AppRouter />
      <Footer />
    </Provider>
  );
};

export default App;
