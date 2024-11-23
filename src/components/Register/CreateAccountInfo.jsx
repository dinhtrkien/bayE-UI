import * as React from 'react';
import { FormInput } from './FormInput';

export function CreateAccountInfo({ formData }) {
  return (
    <main className="flex flex-col items-center h-[852px] min-w-[240px] w-[534px]">
      <header className="gap-2.5 self-stretch text-3xl font-medium text-center text-zinc-800">
        Create an account
      </header>
      <form className="flex flex-col w-full gap-6 mt-6">
        <section className="flex flex-wrap gap-3.5 items-start w-full text-base">
          <div className="flex z-10 flex-col flex-1 grow shrink-0 basis-0 w-fit">
            <label htmlFor="firstName" className="self-start text-stone-500">First name</label>
            <div className="flex overflow-hidden flex-col justify-center items-start px-6 py-4 mt-2 w-full whitespace-nowrap bg-gray-200 rounded-xl border border-solid border-stone-500 border-opacity-30 text-stone-500 text-opacity-60 max-md:px-5">
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                className="self-stretch bg-transparent border-none outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
            <label htmlFor="lastName" className="self-start text-stone-500">
              Last name
            </label>
            <div className="flex overflow-hidden flex-col justify-center items-start px-6 py-4 mt-2 w-full whitespace-nowrap bg-gray-200 rounded-xl border border-solid border-stone-500 border-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-stone-500 text-opacity-60 max-md:px-5">
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                className="self-stretch bg-transparent border-none outline-none"
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
            />
          </div>
        </div>

        <div className="flex flex-col self-stretch w-full">
          <label htmlFor="phone" className="text-base text-stone-500">
            Phone number
          </label>
          <div className="flex overflow-hidden flex-col justify-center items-start px-6 py-4 mt-1 w-full bg-gray-200 rounded-xl border border-solid border-stone-500 border-opacity-30 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-4 justify-center items-center">
              <div className="flex gap-2 justify-center items-center self-stretch my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/ac8f8ba83fd7a0fe6101ebbf8c09ab20339ad78aaeada77862ae365423847b3b?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto rounded-md aspect-[1.5] w-[39px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/2616f47611b338f2dfe0decc267be766f1ece69acb3e66093fdbbe8ea5588c14?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
              </div>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                className="self-stretch my-auto text-lg text-stone-500 text-opacity-60 bg-transparent border-none outline-none"
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
              className="self-stretch bg-transparent border-none outline-none"
            >
              <option selected>{formData.accountType}</option>
            </select>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/4ba3ea5c2e7f2bd34036e9a18f3417318ba5134cc801e348f43fb7fa9e4700f7?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&"
              alt=""
              className="object-contain shrink-0 w-6 aspect-square"
            />
          </div>
        </div>

        <FormInput
          label="Password"
          value="123456"
          required
          icon="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/db1c0644ac92683ab6b502352c39cade7beeacd104e782a6d741ca9517475648?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&"
          type="password"
        />

        <FormInput
          label="Confirm Password"
          value="123456"
          required
          icon="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/db1c0644ac92683ab6b502352c39cade7beeacd104e782a6d741ca9517475648?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&"
          type="password"
        />

        <div className="flex gap-2 items-start py-2 pr-2 text-base text-zinc-800 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/155ac76da79285690830800e7a899a642a0b11d92fdc5895184fcf05f72dc8e0?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&"
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <p>
            By creating an account, I agree to our{' '}
            <a href="#" className="underline text-neutral-900">
              Terms of use
            </a>{' '}
            <br />
            and{' '}
            <a href="#" className="underline text-neutral-900">
              Privacy Policy
            </a>
          </p>
        </div>

        <button
          type="submit"
          className="flex overflow-hidden flex-col grow justify-center items-center px-14 py-4 w-full h-auto text-2xl font-medium text-center text-white bg-blue-500 max-w-[534px] min-h-[64px] rounded-[40px] max-md:px-5 max-md:max-w-full"
        >
          <span className="gap-2 self-stretch">Create an account</span>
        </button>
      </form>
    </main>
  );
}

export default CreateAccountInfo;
