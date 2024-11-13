import React from 'react';

function SocialSignup() {
  return (
    <button className="flex overflow-hidden flex-col justify-center items-center px-14 py-4 mt-6 w-full text-2xl bg-white border border-solid border-zinc-800 max-w-[534px] rounded-[32px] text-zinc-800 max-md:px-5 max-md:max-w-full">
      <div className="flex items-center justify-center gap-4">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/a57cb3b77f709ac3908aa947aacf7ca6aa17272aa057d089744d55a8f6bfedb8?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&" alt="Google logo" className="self-stretch object-contain w-6 my-auto shrink-0 aspect-square" />
        <span className="self-stretch my-auto">Continue with Google</span>
      </div>
    </button>
  );
}

export default SocialSignup;
