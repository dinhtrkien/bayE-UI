import * as React from "react";
import { Header } from '../Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { ProfileForm } from './components/ProfileForm';
import { Footer } from './components/Footer';

export function UserProfile() {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <div className="w-full bg-black border border-black border-solid opacity-30 min-h-[1px] max-md:max-w-full" />
      <div className="flex flex-wrap gap-5 justify-between self-center mt-20 w-full text-sm max-w-[1164px] max-md:mt-10 max-md:max-w-full">
        <nav className="flex gap-3 items-center text-black">
          <a href="/" className="self-stretch my-auto opacity-50">
            Home
          </a>
          <a href="/account" className="self-stretch my-auto">
            My Account
          </a>
        </nav>
        <div className="leading-5 text-red-500">
          Welcome! <span className="text-red-500">Bui Tony</span>
        </div>
      </div>
      <main className="self-center mt-20 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />
          <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
            <ProfileForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default UserProfile;
