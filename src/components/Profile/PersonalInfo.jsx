import * as React from "react";

export function ProfileForm({ user }) {
  return (
    <form className="flex overflow-hidden flex-col px-20 py-10 mx-auto w-full text-base bg-white shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-xl font-medium leading-snug text-red-500">
        Edit Personal Information
      </h2>

      <div className="flex gap-10 items-start mt-4 text-black max-md:max-w-full">
        <div className="flex flex-col min-w-[240px] w-[710px]">
          <label htmlFor="dob">Date of birth</label>
          <div className="flex flex-col mt-2 w-full whitespace-nowrap">
            <input
              type="date"
              id="dob"
              className="flex overflow-hidden flex-col justify-center items-start px-4 py-3.5 bg-white rounded-lg border border-solid border-black border-opacity-20 max-md:pr-5 max-md:max-w-full"
              placeholder="dd/mm/yyyy"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-10 items-start mt-6 text-black max-md:max-w-full">
        <div className="flex flex-col min-w-[240px] w-[710px]">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={user.phone}
            readOnly
            className="flex overflow-hidden flex-col justify-center items-start px-4 py-3.5 mt-2 bg-neutral-100 max-md:pr-5 max-md:max-w-full"
          />
        </div>
      </div>

      <div className="flex flex-col mt-6 text-black max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[710px]">
          <label>Connect to Social Networks</label>
          {["Facebook", "Google", "Twitter"].map((network, index) => (
            <input
              key={index}
              type="text"
              value={network}
              readOnly
              className="flex overflow-hidden flex-col justify-center items-start px-4 py-3.5 mt-2 bg-neutral-100 max-md:pr-5 max-md:max-w-full"
            />
          ))}
        </div>
      </div>

      <div className="flex gap-8 items-center self-end mt-6">
        <button type="button" className="self-stretch my-auto text-black">
          Cancel
        </button>
        <button
          type="submit"
          className="gap-2.5 self-stretch px-12 py-4 my-auto font-medium bg-red-500 rounded-lg text-neutral-50 max-md:px-5"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
