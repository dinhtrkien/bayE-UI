import React, { useState } from 'react';
import CreateAccount from '../components/Register/CreateAccount';
import CreateAccountInfo from '../components/Register/CreateAccountInfo';

function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({}); // Store the form data

  const nextStep = (data) => {
    setFormData(data); // Save data from step 1
    setStep(2); // Move to step 2
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <main>
        {step === 1 && <CreateAccount onNext={nextStep} />}
        {step === 2 && <CreateAccountInfo formData={formData} />}
      </main>
    </div>
  );
}

export default Register;
