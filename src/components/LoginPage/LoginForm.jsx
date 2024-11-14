import React from 'react';

function LoginForm() {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-14 py-10 w-full rounded-3xl border border-solid border-stone-500 border-opacity-50 max-md:px-5">
      <div className="flex flex-col justify-center items-center w-full max-w-[528px] max-md:max-w-full">
        <h1 className="text-3xl font-medium text-center text-zinc-800">
          Sign in
        </h1>
        <form className="flex flex-col mt-12 w-full max-md:mt-10">
          <div className="flex flex-col w-full text-base text-stone-500">
            <label htmlFor="email" className="py-0.5 w-full max-md:pr-5 max-md:max-w-full">
              Email or mobile phone number
            </label>
            <input
              type="text"
              id="email"
              className="flex mt-1 w-full rounded-xl border border-solid border-stone-500 border-opacity-30 min-h-[56px] max-md:max-w-full bg-transparent"
            />
          </div>
          <div className="flex flex-col mt-6 w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between pr-2.5 w-full max-md:max-w-full">
              <label htmlFor="password" className="text-base text-stone-500">
                Your password
              </label>
              <button type="button" className="flex gap-2 text-lg text-right whitespace-nowrap text-stone-500 text-opacity-80">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/a7da8ed3f20b5b4122f7ad5ea10b2c7a004779f9e3cd9284bfd7bba240051604?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&" alt="" className="object-contain shrink-0 self-start w-6 aspect-square" />
                <span>Hide</span>
              </button>
            </div>
            <input
              type="password"
              id="password"
              className="flex mt-1 w-full rounded-xl border border-solid border-stone-500 border-opacity-30 min-h-[56px] max-md:max-w-full bg-transparent"
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-6 w-full max-md:max-w-full">
            <button type="submit" className="flex overflow-hidden flex-col justify-center items-center px-16 py-4 w-full text-2xl font-medium text-center text-white bg-blue-500 rounded-[40px] max-md:px-5 max-md:max-w-full">
              Log in
            </button>
            <p className="gap-2.5 py-2 pr-2 mt-2 text-base text-stone-500 max-md:max-w-full">
              By continuing, you agree to the{" "}
              <a href="#terms" className="underline text-neutral-900">Terms of use</a> and{" "}
              <a href="#privacy" className="underline text-neutral-900">Privacy Policy.</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
