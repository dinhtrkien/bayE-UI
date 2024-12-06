import React, { useState } from 'react';
import FormInput from './FormInput';
import AccountTypeSelect from './AccountTypeSelect';
import TermsCheckbox from './TermsCheckbox';
import SubmitButton from '../Button/SubmitButton';
import SocialSignup from './SocialSignup';

function AccountForm({ onNext }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accountType: 'Buyer', // Set default value to "Buyer"
    termsAccepted: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);
    onNext(formData); // Pass the data to the parent
  };

  return (
    <form
      className="flex overflow-hidden grow gap-2.5 items-start p-12 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-4"
      onSubmit={handleSubmit} // Bind handleSubmit here
    >
      <div className="flex flex-col min-w-[240px] w-[534px] max-md:max-w-full">
        <div className="flex flex-wrap items-center justify-center gap-10 max-md:max-w-full">
          <h2 className="self-stretch my-auto text-3xl font-medium text-zinc-800">
            Create an account
          </h2>
          <a
            href="/login"
            className="self-stretch my-auto text-base text-neutral-900"
          >
            log in instead
          </a>
        </div>
        <div className="flex flex-wrap gap-3.5 items-start mt-6 max-w-full text-base w-[534px]">
          <FormInput
            label="First name"
            placeholder="First name"
            value={formData.firstName}
            required
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-3.5 items-start mt-6 max-w-full text-base w-[534px]">
          <FormInput
            label="Last name"
            placeholder="Last name"
            value={formData.lastName}
            required
            onChange={(e) => handleInputChange('lastName', e.target.value)}
          />
        </div>
        <div className="mt-6 flex flex-wrap">
          <FormInput
            label="Email"
            placeholder="example@email.com"
            type="email"
            value={formData.email}
            required
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        </div>
        <div className="mt-6 flex flex-wrap">
          <FormInput
            label="Phone no."
            placeholder="+84 987-654-321"
            type="tel"
            value={formData.phone}
            required
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
        </div>
        <AccountTypeSelect
          value={formData.accountType}
          onChange={(value) => handleInputChange('accountType', value)}
        />
        <div className="flex flex-wrap mt-2">
          <TermsCheckbox
            checked={formData.termsAccepted}
            onChange={(e) =>
              handleInputChange('termsAccepted', e.target.checked)
            }
          />
        </div>
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
