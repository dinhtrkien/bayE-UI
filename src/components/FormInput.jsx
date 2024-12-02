import React from 'react';

function FormInput({ label, placeholder, type = 'text' }) {
  return (
    <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
      <label className="self-start text-stone-500">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="flex overflow-hidden flex-col justify-center items-start px-6 py-4 mt-2 w-full whitespace-nowrap bg-transparent rounded-xl border border-solid border-stone-500 border-opacity-30 text-neutral-900 max-md:px-5"
      />
    </div>
  );
}

export default FormInput;
