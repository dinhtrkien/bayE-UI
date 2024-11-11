/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import React from 'react';

function LoginButton() {
  return (
    <div className="flex gap-4 justify-center items-center self-stretch my-auto text-base text-center text-neutral-900 w-[98px]">
      <button className="flex overflow-hidden flex-col justify-center self-stretch px-2.5 py-2 my-auto rounded-lg border border-solid border-neutral-900 w-[98px] max-md:px-5">
        <span className="gap-2 self-stretch">Log in</span>
      </button>
    </div>
  );
}

export default LoginButton;
