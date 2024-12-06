import React, { useState } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CreateAccount from './CreateAccount';
import CreateAccountInfo from './CreateAccountInfo';

function MainComponent() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({}); // Store the form data

  const nextStep = (data) => {
    setFormData(data); // Save data from step 1
    setStep((prev) => prev + 1); // Move to the next step
  };

  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <main>
        {step === 1 && <CreateAccount onNext={nextStep} />}
        {step === 2 && (
          <CreateAccountInfo formData={formData} onPrev={prevStep} />
        )}
      </main>
    </div>
  );
}

export default MainComponent;
