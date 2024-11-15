import React, { useState } from 'react';

const InstallmentCalculator = () => {
  // State for the form inputs
  const [price, setPrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [installmentPercent, setInstallmentPercent] = useState('');
  const [monthlyInstallment, setMonthlyInstallment] = useState('');
  const [installmentTerm, setInstallmentTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');

  // State for input validation
  const [errors, setErrors] = useState({
    price: false,
    downPayment: false,
    installmentPercent: false,
    monthlyInstallment: false,
    installmentTerm: false,
    interestRate: false,
  });

  // Calculated values for the summary section
  const monthlyPayment = monthlyInstallment || 0;
  const totalPayment =
    price && interestRate && installmentTerm
      ? parseFloat(price) +
        (parseFloat(price) *
          parseFloat(interestRate) *
          parseFloat(installmentTerm)) /
          100
      : 0;

  const handleInputChange = (setter, value, fieldName) => {
    if (/^\d*\.?\d*$/.test(value)) {
      // Allow only numeric input
      setter(value);
      setErrors((prev) => ({ ...prev, [fieldName]: false }));
    } else {
      setErrors((prev) => ({ ...prev, [fieldName]: true }));
    }
  };

  return (
    <div className="border-2 max-w-6xl mx-auto my-10 bg-gray-50 rounded-2xl p-8 flex">
      {/* Left Section - Form */}
      <div className="w-2/3 pr-8">
        <h2 className="text-3xl font-bold mb-4">Installment Calculator</h2>
        <p className="text-gray-600 mb-6">
          Use our <span className="font-semibold">Installment</span> calculator
          to calculate payments over the life of your installment. Enter your
          information to see how much your monthly payments could be. You can
          adjust length of installment, down payment, and interest rate to see
          how those changes raise or lower your payments.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Price ($)
            </label>
            <input
              type="text"
              value={price}
              onChange={(e) =>
                handleInputChange(setPrice, e.target.value, 'price')
              }
              placeholder="Enter price"
              className="input input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid number.
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Down Payment ($)
            </label>
            <input
              type="text"
              value={downPayment}
              onChange={(e) =>
                handleInputChange(setDownPayment, e.target.value, 'downPayment')
              }
              placeholder="Enter down payment"
              className="input input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.downPayment && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid number.
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Monthly Installment Amount (% car price)
            </label>
            <input
              type="text"
              value={installmentPercent}
              onChange={(e) =>
                handleInputChange(
                  setInstallmentPercent,
                  e.target.value,
                  'installmentPercent',
                )
              }
              placeholder="Enter percentage"
              className="input input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.installmentPercent && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid number.
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Monthly Installment Amount ($)
            </label>
            <input
              type="text"
              value={monthlyInstallment}
              onChange={(e) =>
                handleInputChange(
                  setMonthlyInstallment,
                  e.target.value,
                  'monthlyInstallment',
                )
              }
              placeholder="Enter amount"
              className="input input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.monthlyInstallment && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid number.
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Installment Term (month)
            </label>
            <input
              type="text"
              value={installmentTerm}
              onChange={(e) =>
                handleInputChange(
                  setInstallmentTerm,
                  e.target.value,
                  'installmentTerm',
                )
              }
              placeholder="Enter term in months"
              className="input input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.installmentTerm && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid number.
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Interest Rate (%)
            </label>
            <input
              type="text"
              value={interestRate}
              onChange={(e) =>
                handleInputChange(
                  setInterestRate,
                  e.target.value,
                  'interestRate',
                )
              }
              placeholder="Enter interest rate"
              className="input input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.interestRate && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid number.
              </p>
            )}
          </div>
        </div>

        <button
          className="w-full py-3 rounded-lg text-white"
          style={{ backgroundColor: '#405FF2' }}
        >
          Calculate →
        </button>
      </div>

      {/* Right Section - Summary */}
      <div className="w-1/3 bg-gray-100 p-8 rounded-lg flex flex-col justify-center">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Monthly Payment
          </h3>
          <p className="text-blue-600 text-xl font-bold">
            {monthlyPayment
              ? `$${parseFloat(monthlyPayment).toLocaleString()}`
              : 'Unknown'}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Down Payment</h3>
          <p className="text-blue-600 text-xl font-bold">
            {downPayment
              ? `$${parseFloat(downPayment).toLocaleString()}`
              : 'Unknown'}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Total Payment</h3>
          <p className="text-blue-600 text-xl font-bold">
            {totalPayment ? `$${totalPayment.toLocaleString()}` : 'Unknown'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstallmentCalculator;
