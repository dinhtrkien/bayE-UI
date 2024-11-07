import React from 'react';

function TermsCheckbox() {
  return (
    <div className="flex gap-2 items-start self-start py-2 pr-2 mt-6 text-base text-zinc-800 max-md:max-w-full">
      <input type="checkbox" id="terms" className="sr-only" />
      <label htmlFor="terms" className="flex items-start cursor-pointer">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/af66f55e6c61f1cad021a70bebe386c8fe3199390e28cdb358aacaccd9e1417e?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&" alt="" className="object-contain shrink-0 w-6 aspect-square" />
        <span className="ml-2">
          By creating an account, I agree to our{" "}
          <a href="#terms" className="underline text-neutral-900">Terms of use</a>{" "}
          <br />
          and{" "}
          <a href="#privacy" className="underline text-neutral-900">Privacy Policy</a>
        </span>
      </label>
    </div>
  );
}

export default TermsCheckbox;