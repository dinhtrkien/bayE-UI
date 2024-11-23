import React from 'react';
import FormInput from './FormInput';
// import PhoneInput from './Header/PhoneInput.jsx';
import PhoneInput from './PhoneInput';
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
    accountType: '',
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
    onNext(formData); // Pass the data to the parent
  };

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
          <FormInput
            label="First name"
            placeholder="Tony"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />
          <FormInput
            label="Last name"
            placeholder="Bui"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
          />
        </div>
        <div className="mt-6 flex flex-wrap">
          <FormInput
            label="Email"
            placeholder="buitony.420@gmail.com"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        </div>
        <PhoneInput
          value={formData.phone}
          onChange={(value) => handleInputChange('phone', value)}
        />
        <AccountTypeSelect
          value={formData.accountType}
          onChange={(value) => handleInputChange('accountType', value)}
        />
        <div className="flex flex-wrap">
          <TermsCheckbox
            checked={formData.termsAccepted}
            onChange={(e) =>
              handleInputChange('termsAccepted', e.target.checked)
            }
          />
        </div>
        <SubmitButton onNext={onNext} />
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
