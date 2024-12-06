import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import AppRouter from './router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <AppRouter />
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
