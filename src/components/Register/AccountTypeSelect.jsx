import React from 'react';

function AccountTypeSelect({ value, onChange }) {
  return (
    <div className="flex flex-col w-full text-base text-stone-500 mt-4">
      <label
        htmlFor="accountType"
        className="py-0.5 w-full max-md:pr-5 max-md:max-w-full"
      >
        Account Type
      </label>
      <select
        id="accountType"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex mt-1 w-full rounded-xl border border-solid border-stone-500 border-opacity-30 pl-4 min-h-[56px] max-md:max-w-full bg-transparent"
      >
        <option value="Buyer">Buyer</option>
        <option value="Seller">Seller</option>
      </select>
    </div>
  );
}

export default AccountTypeSelect;
