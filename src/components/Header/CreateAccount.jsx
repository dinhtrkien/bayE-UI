import React from 'react';
import AccountForm from './AccountForm';

function CreateAccount() {
  return (
    <section className="flex overflow-hidden flex-col items-center px-16 pt-12 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="w-full max-w-[1146px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/f9f3c7ce8cd4c7abeab9ec719ea31522fc81d87457a2ad9d840f5e8f2bf6c40a?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&" alt="Account creation illustration" className="object-contain mt-28 w-full aspect-square max-md:mt-10 max-md:max-w-full" />
          </div>
          <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <AccountForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateAccount;