import React from 'react';
import { FormInput } from './FormInput';
import { ChangePassword } from './ChangePassword';

const personalInfo = [
  { label: 'First Name', value: 'Tony', type: 'text' },
  { label: 'Last Name', value: 'Bui', type: 'text' },
  { label: 'Email', value: 'buitony.420@gmail.com', type: 'email' },
  {
    label: 'Address',
    value: '69 Ho Tung Mau, Ha Noi',
    type: 'text',
    bordered: true,
  },
];

export function ProfileForm() {
  return (
    <section className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
      <form className="flex overflow-hidden flex-col px-20 py-10 mx-auto w-full text-base bg-white shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h1 className="self-start text-xl font-medium leading-snug text-red-500">
          Edit Profile
        </h1>
        <div className="flex flex-wrap gap-10 items-start mt-4 text-black max-md:max-w-full">
          {personalInfo.slice(0, 2).map((field, index) => (
            <FormInput key={index} {...field} />
          ))}
        </div>
        <div className="flex flex-wrap gap-10 items-start mt-6 text-black max-md:max-w-full">
          {personalInfo.slice(2).map((field, index) => (
            <FormInput key={index} {...field} />
          ))}
        </div>

        <ChangePassword />

        <div className="flex gap-8 items-center self-end mt-6">
          <button type="button" className="self-stretch my-auto text-black">
            Cancel
          </button>
          <button
            type="submit"
            className="gap-2.5 self-stretch px-12 py-4 my-auto font-medium bg-red-500 rounded-lg text-neutral-50 max-md:px-5"
          >
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
}

export default ProfileForm;
