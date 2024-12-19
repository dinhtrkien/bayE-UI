import React, { useState } from 'react';
import { FormInput } from './FormInput';
import { ChangePassword } from './ChangePassword';

export function ProfileForm({ user }) {
  const personalInfo = [
    { label: 'Name', value: user.name, type: 'text' },
    { label: 'Email', value: user.email, type: 'email' },
    {
      label: 'Address',
      value: '69 Ho Tung Mau, Ha Noi',
      type: 'text',
      bordered: true,
    },
  ];

  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);

    // Preview the avatar
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, including avatar upload
    const formData = new FormData();
    formData.append('avatar', avatar);
    // Append other form data as needed

    // Submit the form data to the server
    // Example: axios.post('/api/profile', formData);
  };

  return (
    <section className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
      <form
        className="flex overflow-hidden flex-col px-20 py-10 mx-auto w-full text-base bg-white shadow-lg rounded-lg max-md:px-5 max-md:mt-10 max-md:max-w-full"
        onSubmit={handleSubmit}
      >
        <h1 className="self-start text-xl font-medium leading-snug text-red-500">
          Edit Profile
        </h1>
        <div className="flex flex-col gap-3 items-start mt-4 text-black max-md:max-w-full">
          {personalInfo.map((field, index) => (
            <FormInput key={index} {...field} />
          ))}
        </div>

        <div className="flex flex-col items-start mt-6">
          <label className="text-black">Avatar</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="mt-2"
          />
          {avatarPreview && (
            <img
              src={avatarPreview}
              alt="Avatar Preview"
              className="mt-4 w-32 h-32 rounded-full object-cover"
            />
          )}
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
