import React from 'react';
import FormInput from './FormInput';
// import PhoneInput from './Header/PhoneInput.jsx';
import PhoneInput from './Header/PhoneInput';
import AccountTypeSelect from './AccountTypeSelect';
import TermsCheckbox from './Header/TermsCheckbox';
import SubmitButton from './Button/SubmitButton';
import SocialSignup from './SocialSignup';

function AccountForm() {
  return (
    <form className="flex overflow-hidden grow gap-2.5 items-start p-12 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-4">
      <div className="flex flex-col min-w-[240px] w-[534px] max-md:max-w-full">
        <div className="flex flex-wrap items-center justify-center gap-10 max-md:max-w-full">
          <h2 className="self-stretch my-auto text-3xl font-medium text-zinc-800">
            Create an account
          </h2>
          <a
            href="#login"
            className="self-stretch my-auto text-base text-neutral-900"
          >
            log in instead
          </a>
        </div>
        <div className="flex flex-wrap gap-3.5 items-start mt-6 max-w-full text-base w-[534px]">
          <FormInput label="First name" placeholder="Tony" />
          <FormInput label="Last name" placeholder="Bui" />
        </div>
        <FormInput
          label="Email"
          placeholder="buitony.420@gmail.com"
          type="email"
        />
        <PhoneInput />
        <AccountTypeSelect />
        <TermsCheckbox />
        <SubmitButton />
        <div className="flex flex-wrap gap-6 items-center mt-6 max-w-full text-2xl whitespace-nowrap text-stone-500 w-[534px]">
          <div className="flex flex-1 shrink self-stretch my-auto h-0.5 basis-0 bg-stone-500 bg-opacity-30 w-[227px]" />
          <div className="self-stretch my-auto">OR</div>
          <div className="flex flex-1 shrink self-stretch my-auto h-0.5 basis-0 bg-stone-500 bg-opacity-30 w-[226px]" />
        </div>
        <SocialSignup />
      </div>
    </form>
  );
}

export default AccountForm;
