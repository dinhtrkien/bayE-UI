import React from 'react';
import Header from '../Header/Header';
import LoginForm from './LoginForm';
import Footer from '../Footer/Footer';

function LoginPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <main className="flex flex-col justify-center items-center self-center mt-16 max-w-full w-[640px] max-md:mt-10">
        <LoginForm />
        <div className="flex flex-wrap gap-5 justify-between mt-12 w-full text-base text-right text-neutral-900 max-md:mt-10">
          <button className="text-neutral-900">Other issue with sign in</button>
          <button className="text-neutral-900">Forget your password</button>
        </div>
        <div className="flex flex-wrap gap-6 items-center mt-8 w-full text-2xl text-stone-500">
          <div className="flex flex-1 shrink self-stretch my-auto h-0.5 basis-0 bg-stone-500 bg-opacity-30 w-[183px]" />
          <p className="self-stretch my-auto">New to our community</p>
          <div className="flex flex-1 shrink self-stretch my-auto h-0.5 basis-0 bg-stone-500 bg-opacity-30 w-[183px]" />
        </div>
        <button className="flex overflow-hidden flex-col justify-center items-center px-16 py-4 mt-8 w-full max-w-screen-sm text-xl text-center border border-solid border-neutral-900 rounded-[40px] text-neutral-900 max-md:px-5 max-md:max-w-full">
          Create an account
        </button>
      </main>
    </div>
  );
}

export default LoginPage;
