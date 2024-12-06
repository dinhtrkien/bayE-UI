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

  const handleSubmit = async (data) => {
    try {
      console.log('Submitting form data:', data);
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Registration successful:', result);
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle registration error (e.g., display error message)
    }
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <main>
        {step === 1 && <CreateAccount onNext={nextStep} />}
        {step === 2 && (
          <CreateAccountInfo formData={formData} onSubmit={handleSubmit} />
        )}
      </main>
    </div>
  );
}

export default Register;
