import React, { useState } from 'react';

const InstallmentCalculator = () => {
  const [price, setPrice] = useState(100000);
  const [downPayment, setDownPayment] = useState(10000);
  const [installmentPercentage, setInstallmentPercentage] = useState(10);
  const [installmentAmount, setInstallmentAmount] = useState(10000);
  const [term, setTerm] = useState(10);
  const [interestRate, setInterestRate] = useState(10);
  const [monthlyPayment, setMonthlyPayment] = useState(10000);
  const [totalPayment, setTotalPayment] = useState(110000);

  const calculate = () => {
    const monthlyInstallment =
      ((price - downPayment) * (1 + interestRate / 100)) / term;
    setMonthlyPayment(monthlyInstallment.toFixed(2));
    setTotalPayment((downPayment + monthlyInstallment * term).toFixed(2));
  };

  return (
    <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">
            Installment Calculator
          </h2>
          <p className="mb-6 text-gray-600">
            Use our Installment calculator to calculate payments over the life
            of your installment. Enter your information to see how much your
            monthly payments could be.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Price ($)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Down Payment ($)</label>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(parseFloat(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Monthly Installment Amount (% car price)
              </label>
              <input
                type="number"
                value={installmentPercentage}
                onChange={(e) =>
                  setInstallmentPercentage(parseFloat(e.target.value))
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Monthly Installment Amount ($)
              </label>
              <input
                type="number"
                value={installmentAmount}
                onChange={(e) =>
                  setInstallmentAmount(parseFloat(e.target.value))
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Installment Term (month)
              </label>
              <input
                type="number"
                value={term}
                onChange={(e) => setTerm(parseFloat(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Interest Rate (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <button
            onClick={calculate}
            className="w-full py-2 mt-6 text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Calculate
          </button>
        </div>
        <div className="p-6 bg-gray-100 rounded-md">
          <h3 className="mb-4 text-xl font-semibold">Monthly Payment</h3>
          <p className="text-3xl font-bold text-blue-600">${monthlyPayment}</p>
          <h3 className="mt-6 text-xl font-semibold">Down Payment</h3>
          <p className="text-3xl font-bold text-blue-600">${downPayment}</p>
          <h3 className="mt-6 text-xl font-semibold">Total Payment</h3>
          <p className="text-3xl font-bold text-blue-600">${totalPayment}</p>
        </div>
      </div>
    </div>
  );
};

export default InstallmentCalculator;
