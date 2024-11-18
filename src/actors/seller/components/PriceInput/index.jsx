import React from 'react';

export function PhoneNumberInput() {
  const [value, setValue] = React.useState();
  const [alertPrice, setAlertPrice] = React.useState(false);
  const [alertPriceMax, setAlertPriceMax] = React.useState(false);
  const minLimit = 5000000; // Minimum limit amount in VND
  const maxLimit = 500000000000; // Minimum limit amount in VND

  const formatNumber = (event) => {
    let curr = event.currentTarget.value.replace(/\D/g, '');
    // if (curr.length > 10) curr = curr.slice(0, 10);
    if (curr.length > 9) curr = `${curr.slice(0, 9)}.${curr.slice(9)}`;
    if (curr.length > 6) curr = `${curr.slice(0, 6)}.${curr.slice(6)}`;
    if (curr.length > 3) curr = `${curr.slice(0, 3)}.${curr.slice(3)}`;
    setValue(curr);
    // Check for the minimum limit
    const numericValue = Number(curr.replace(/\./g, '')); // Convert the formatted string to a number
    if (numericValue && numericValue < minLimit) {
      setAlertPrice(true);
    } else {
      setAlertPrice(false);
    }
    if (numericValue && numericValue > maxLimit) {
      setAlertPriceMax(true);
    } else {
      setAlertPriceMax(false);
    }
  };
  return (
    <div>
      <input type="text" id="tag" value={value} onChange={formatNumber} className="w-full p-2 border border-gray-300 rounded-md min-w-[590px]" placeholder="Enter Price (vnd)" />
      {alertPrice && <p style={{ color: 'red' }}>The minimum allowed amount is {minLimit.toLocaleString()} VND</p>}
      {alertPriceMax && <p style={{ color: 'red' }}>The maximum allowed amount is {maxLimit.toLocaleString()} VND</p>}
    </div>
  );
}
