import React from "react";

const CompareIcon = ({ className = "w-6 h-6 text-gray-500", onClick }) => {
  return (
    <button onClick={onClick} className={`${className} hover:text-blue-500`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m2.1-5.4a6.375 6.375 0 11-12.75 0 6.375 6.375 0 0112.75 0z"
        />
      </svg>
    </button>
  );
};

export default CompareIcon;
