import React, { useState } from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormInput from './FormInput';

export default function CreateAccountInfo({ formData, onSubmit }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordHidden(!isConfirmPasswordHidden);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Combine formData with password and confirmPassword
    const completeFormData = { ...formData, password, confirmPassword };
    onSubmit(completeFormData);
  };

  return (
    <section className="flex flex-col items-center px-16 pt-12 pb-16 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center h-[852px] min-w-[240px] w-[534px]">
        <header className="gap-2.5 self-stretch text-3xl font-medium text-center text-zinc-800">
          Create an account
        </header>
        <form className="flex flex-col w-full gap-6 mt-6" onSubmit={handleSubmit}>
          <section className="flex flex-wrap gap-3.5 items-start w-full text-base">
            <div className="flex z-10 flex-col flex-1 grow shrink-0 basis-0 w-fit">
              <label htmlFor="firstName" className="self-start text-stone-500">First name</label>
              <div className="flex overflow-hidden flex-col justify-center items-start px-6 py-4 mt-2 w-full whitespace-nowrap bg-gray-200 rounded-xl border border-solid border-stone-500 border-opacity-30 text-stone-500 text-opacity-60 max-md:px-5">
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  className="self-stretch bg-transparent border-none outline-none"
                  readOnly
                  disabled
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
              <label htmlFor="lastName" className="self-start text-stone-500">
                Last name
              </label>
              <div className="flex overflow-hidden flex-col justify-center items-start px-6 py-4 mt-2 w-full whitespace-nowrap bg-gray-200 rounded-xl border border-solid border-stone-500 border-opacity-30 text-stone-500 text-opacity-60 max-md:px-5">
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  className="self-stretch bg-transparent border-none outline-none"
                  readOnly
                  disabled
                />
              </div>
            </div>
          </section>

          <div className="flex flex-col w-full text-base whitespace-nowrap">
            <label htmlFor="email" className="py-0.5 w-full text-stone-500 max-md:pr-5 max-md:max-w-full">
              Email
            </label>
            <div className="flex overflow-hidden flex-col justify-center items-start px-6 py-4 mt-1 w-full bg-gray-200 rounded-xl border border-solid border-stone-500 border-opacity-30 text-stone-500 text-opacity-60 max-md:px-5 max-md:max-w-full">
              <input
                type="email"
                id="email"
                value={formData.email}
                className="self-stretch bg-transparent border-none outline-none"
                readOnly
                disabled
              />
            </div>
          </div>

          <div className="flex flex-col self-stretch w-full">
            <label htmlFor="phone" className="text-base text-stone-500">
              Phone number
            </label>
            <div className="flex overflow-hidden flex-col justify-center items-start px-6 py-4 mt-1 w-full bg-gray-200 rounded-xl border border-solid border-stone-500 border-opacity-30 max-md:px-5 max-md:max-w-full">
              <div className="flex gap-4 justify-center items-center">
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  className="self-stretch my-auto text-lg text-stone-500 text-opacity-60 bg-transparent border-none outline-none"
                  readOnly
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full text-base max-w-[534px] max-md:max-w-full">
            <label htmlFor="accountType" className="py-0.5 w-full text-stone-500 max-md:pr-5 max-md:max-w-full">
              Account type
            </label>
            <div className="flex overflow-hidden flex-wrap gap-5 justify-between items-start px-6 py-4 mt-1 w-full whitespace-nowrap bg-gray-200 rounded-xl border border-solid border-stone-500 border-opacity-30 text-stone-500 text-opacity-60 max-md:px-5 max-md:max-w-full">
              <select
                id="accountType"
                className="self-stretch bg-transparent border-none outline-none appearance-none"
                value={formData.accountType}
                readOnly
                disabled
              >
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col w-full text-base max-w-[534px] max-md:max-w-full">
            <div className="relative flex items-center">
              <FormInput
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type={isPasswordHidden ? 'password' : 'text'}
                isPasswordHidden={isPasswordHidden}
                togglePasswordVisibility={togglePasswordVisibility}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <FormInput
                label="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                type={isConfirmPasswordHidden ? 'password' : 'text'}
                isPasswordHidden={isConfirmPasswordHidden}
                togglePasswordVisibility={toggleConfirmPasswordVisibility}
              />
            </div>
          </div>

          <div className="flex gap-2 items-center py-2 pr-2 text-base text-zinc-800 max-md:max-w-full">
            <input
              type="checkbox"
              id="terms"
              className="shrink-0 w-5 h-5"
              required
            />
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

          <div className="container-with-margin">
            <button
              type="submit"
              className="flex overflow-hidden flex-col grow justify-center items-center px-14 py-4 w-full h-auto text-2xl font-medium text-center text-white bg-blue-500 max-w-[534px] min-h-[64px] rounded-[40px] max-md:px-5 max-md:max-w-full"
            >
              <span className="gap-2 self-stretch">Create an account</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
