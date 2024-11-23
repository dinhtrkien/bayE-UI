import React from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { ProfileForm } from './ProfileForm';

export function ProfileLayout() {
  return (
    <main className="self-center mt-20 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <Sidebar />
        <ProfileForm />
      </div>
    </main>
  );
}

export default ProfileLayout;
