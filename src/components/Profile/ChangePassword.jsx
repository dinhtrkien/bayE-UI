import React from 'react';

const passwordFields = [
  { label: 'Current Password' },
  { label: 'New Password' },
  { label: 'Confirm New Password' },
];

export function ChangePassword() {
  return (
    <section className="flex flex-col mt-6 text-black max-md:max-w-full">
      <h2 className="mb-2">Change Password</h2>
      {passwordFields.map((field, index) => (
        <div
          key={index}
          className="flex flex-col mt-4 first:mt-0 max-w-full w-[710px]"
        >
          <div className="flex overflow-hidden flex-col justify-center items-start px-4 py-3.5 bg-neutral-100 max-md:pr-5 max-md:max-w-full">
            <input
              type="password"
              id={`password-${index}`}
              placeholder={field.label}
              className="w-full bg-transparent opacity-50 outline-none"
              aria-label={field.label}
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default ChangePassword;
