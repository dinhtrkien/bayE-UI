import React from 'react';

function FooterBottom() {
  return (
    <div className="flex flex-wrap gap-10 mt-10 max-w-full w-[1131px]">
      <div className="flex flex-1 gap-10 items-start self-start text-sm text-zinc-800">
        <div>@copyright 2022</div>
        <nav className="flex gap-6 items-start whitespace-nowrap">
          <a href="#help">Help</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </nav>
      </div>
      <div className="flex flex-1 gap-10 items-start">
        <div className="flex gap-4 justify-center items-end">
          <a href="#facebook" aria-label="Facebook">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/7c94d9fa87ef2e14f97669f64493e0987f5376f5e011e4f8b6e0cf650a6d23da?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&" alt="" className="object-contain shrink-0 w-6 aspect-square" />
          </a>
          <a href="#twitter" aria-label="Twitter">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/2effd827f60be156d1feb1321e02f67df93f9d807745863ec9f1a7d72bbcf17d?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&" alt="" className="object-contain shrink-0 w-5 aspect-square" />
          </a>
          <a href="#instagram" aria-label="Instagram">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/aec845615a0d69a765723146df1c1d2395e1201a0490789866d12e7486f9122b?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&" alt="" className="object-contain shrink-0 w-5 aspect-square" />
          </a>
        </div>
        <div className="flex gap-0.5 justify-center items-center pl-2 text-base text-zinc-800">
          <select className="bg-transparent border-none outline-none appearance-none pr-6" aria-label="Select language">
            <option>English (United States)</option>
          </select>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/310076f842a4bdf5fad71090bc0eb4c9b9be3e657c86a6b7ee3292d94a1232b5?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;