import React from 'react';

function PhoneInput() {
  return (
    <div className="flex flex-col mt-6 w-full max-md:max-w-full">
      <label htmlFor="phone" className="text-base text-stone-500">
        Phone no.
      </label>
      <div className="flex overflow-hidden flex-col justify-center items-start px-6 py-4 mt-1 w-full rounded-xl border border-solid border-stone-500 border-opacity-30 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-4 justify-center items-center">
          <div className="flex gap-2 justify-center items-center self-stretch my-auto">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/50e7e1c4f75058d724f5812572fdfd6cfd712d8bfd550f59ba6891fc3b03eb09?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&" alt="Country flag" className="object-contain shrink-0 self-stretch my-auto w-9 aspect-[1.39]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/0b1750ffb98d5d842f91aefaf71093f923cb5d2a87aeefddfb27af5be67351b7?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&" alt="Dropdown arrow" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          </div>
          <input
            id="phone"
            type="tel"
            placeholder="+84 987-654-321"
            className="self-stretch my-auto text-lg text-neutral-900 bg-transparent border-none outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default PhoneInput;