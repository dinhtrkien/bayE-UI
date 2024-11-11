import React from 'react';

function SearchComponent() {
  return (
    <div className="flex flex-col justify-center items-center self-stretch py-2 pr-3 pl-5 my-auto text-xs text-black rounded-lg bg-neutral-100 min-w-[240px]">
      <div className="flex gap-9 justify-center items-center">
        <label htmlFor="search" className="self-stretch my-auto opacity-50">
          What are you looking for?
        </label>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/440bdce0e9d84c08a6a720b9d11b712f/420e1ccb55c7c5784e68a5c08e7504bbbd6f99adbd9c067e616d749eba3b7cc7?apiKey=f6f7fc6690f84fd8b436b7e1bd24bade&" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      </div>
      <input type="text" id="search" className="sr-only" aria-label="Search" />
    </div>
  );
}

export default SearchComponent;