import React from 'react';

export function FormInput({ label, value, type, bordered = false }) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={`input-${label}`} className="text-black">
        {label}
      </label>
      <div className="flex flex-col mt-2 w-full">
        <input
          type={type}
          id={`input-${label}`}
          defaultValue={value}
          className={`flex overflow-hidden px-4 py-3.5 opacity-50 w-full ${
            bordered
              ? 'bg-white rounded-lg border border-solid border-black border-opacity-20'
              : 'bg-neutral-100'
          }`}
        />
      </div>
    </div>
  );
}

export default FormInput;
