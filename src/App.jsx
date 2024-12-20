import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import store from './redux/store';
import AppRouter from './router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Header />}
      <AppRouter />
      {!isAdminRoute && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
};

export default App;
