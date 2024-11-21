import React from "react";

const PlusRoundedIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" strokeLinecap="round" />
      <line x1="8" y1="12" x2="16" y2="12" strokeLinecap="round" />
    </svg>
  )
}

export default PlusRoundedIcon;
