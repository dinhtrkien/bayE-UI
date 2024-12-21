import React from 'react';

const handleOnclick = async (formData, validate) => {
  if (validate) {
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/api/driveRequest`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Drive request submitted successfully:', result);
      } else {
        console.error('Failed to submit drive request:', result);
      }
    } catch (error) {
      console.error('Error occurred while submitting drive request:', error.message);
    }
  }
};

const SubmitButton = ({ formData, validate }) => {
  return (
    <button
      type="submit"
      onClick={() => handleOnclick(formData, validate)} // Sử dụng arrow function
      className="w-full px-4 py-2 font-medium text-white bg-black rounded hover:bg-gray-800 focus:outline-none focus:ring focus:ring-indigo-200"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
