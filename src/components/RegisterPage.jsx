import React from 'react';
import Header from './Header/Header';
import CreateAccount from './CreateAccount';
import Footer from './Footer/Footer';

function MainComponent() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <main>
        <CreateAccount />
      </main>
    </div>
  );
}

export default MainComponent;
