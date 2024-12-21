import React from 'react';
import { changeMainPrice } from '../../slice/addCarSlice';

export function PhoneNumberInput({ width, minLimit, maxLimit, dispatch = null, contentMin = null, contentMax = null, placeholder= null }) {
  const [value, setValue] = React.useState();
  const [alertPrice, setAlertPrice] = React.useState(false);
  const [alertPriceMax, setAlertPriceMax] = React.useState(false);
  const minLimitVar = minLimit || 5000000; // Minimum limit amount in VND
  const maxLimitVar = maxLimit || 500000000000; // Minimum limit amount in VND

  function onPhoneNumberComplete(currInPrice) {
    // if (check) {
    // if (!(alertPrice || alertPriceMax)) {
    if (!dispatch) {
      return;
    }
    dispatch(changeMainPrice(currInPrice));

    //   }
    // }
  }
  const formatNumber = (event) => {
    let curr = event.currentTarget.value.replace(/\D/g, '');
    const currInPrice = curr;
    // if (curr.length > 10) curr = curr.slice(0, 10);
    curr = curr
      .split('')
      .reverse()
      .reduce((acc, char, index) => {
        if (index > 0 && index % 3 === 0) {
          acc.push('.');
        }
        acc.push(char);
        return acc;
      }, [])
      .reverse()
      .join('');
    setValue(curr);
    // Check for the minimum limit
    const numericValue = Number(curr.replace(/\./g, '')); // Convert the formatted string to a number
    if (numericValue && numericValue < minLimitVar) {
      setAlertPrice(true);
    } else {
      setAlertPrice(false);
    }
    if (numericValue && numericValue > maxLimitVar) {
      setAlertPriceMax(true);
    } else {
      setAlertPriceMax(false);
    }
    onPhoneNumberComplete(currInPrice);
  };
  return (
    <div>
      <input type="text" id="tag" value={value} onChange={formatNumber} className={`w-full p-2 border border-gray-300 rounded-md ${width ? width : 'min-w-[590px]'}`} placeholder={placeholder ? placeholder: `Enter Price (vnd)`} />
      {alertPrice && <p style={{ color: 'red' }}>{contentMin ? contentMin : `The minimum allowed amount is ${minLimitVar.toLocaleString()} VND`}</p>}
      {/* {alertPrice && <p style={{ color: 'red' }}>{contentMax ? contentMax : 'The minimum allowed amount is {minLimitVar.toLocaleString()} VND'}</p>} */}
      {alertPriceMax && <p style={{ color: 'red' }}>{contentMax ? contentMax : `The maximum allowed amount is ${maxLimitVar.toLocaleString()} VND`}</p>}
    </div>
  );
}
