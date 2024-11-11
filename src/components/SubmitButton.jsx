import React from 'react';

function SubmitButton() {
  return (
    <button type="submit" className="flex overflow-hidden flex-col justify-center items-center px-14 py-4 mt-6 w-full text-2xl font-medium text-center text-white bg-blue-500 max-w-[534px] rounded-[40px] max-md:px-5 max-md:max-w-full">
      <span className="gap-2 self-stretch">Create an account</span>
    </button>
  );
}

export default SubmitButton;