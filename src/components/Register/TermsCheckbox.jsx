import React from 'react';

function TermsCheckbox() {
  return (
    <div className="flex gap-2 items-center py-2 pr-2 text-base text-zinc-800 max-md:max-w-full">
      <input type="checkbox" id="terms" className="shrink-0 w-5 h-5" required />
      <label htmlFor="terms" className="flex-grow">
        By creating an account, I agree to our{' '}
        <a href="#" className="underline text-neutral-900">
          Terms of use
        </a>{' '}
        and{' '}
        <a href="#" className="underline text-neutral-900">
          Privacy Policy
        </a>
      </label>
    </div>
  );
}

export default TermsCheckbox;
