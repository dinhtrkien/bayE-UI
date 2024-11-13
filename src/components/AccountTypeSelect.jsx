import React from 'react';

function AccountTypeSelect() {
  return (
    <div className="flex flex-col mt-6 w-full text-base max-w-[534px] max-md:max-w-full">
      <label htmlFor="accountType" className="py-0.5 w-full text-stone-500 max-md:pr-5 max-md:max-w-full">
        Account type
      </label>
      <div className="flex overflow-hidden flex-wrap gap-5 justify-between items-start px-6 py-4 mt-1 w-full whitespace-nowrap rounded-xl border border-solid border-stone-500 border-opacity-30 text-neutral-900 max-md:px-5 max-md:max-w-full">
        <select
          id="accountType"
          className="self-stretch bg-transparent border-none outline-none appearance-none"
          defaultValue="Buyer"
        >
          <option value="Buyer">Buyer</option>
          <option value="Seller">Seller</option>
        </select>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/51deb05d4dc0d3f43ff5a9708a9116e55a3743da97bbdf477b4e2239380f0622?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&" alt="" className="object-contain shrink-0 w-6 aspect-square" />
      </div>
    </div>
  );
}

export default AccountTypeSelect;