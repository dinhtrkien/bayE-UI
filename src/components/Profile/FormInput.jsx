import React from 'react';

export function FormInput({ label, value, type, bordered = false }) {
  return (
    <div className="flex flex-col min-w-[240px] w-[330px]">
      <label htmlFor={`input-${label}`} className="text-black">
        {label}
      </label>
      <div className="flex flex-col mt-2 max-w-full w-[330px]">
        <input
          type={type}
          id={`input-${label}`}
          defaultValue={value}
          className={`flex overflow-hidden px-4 py-3.5 opacity-50 ${
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
