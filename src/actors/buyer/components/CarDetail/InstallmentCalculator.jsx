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
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Installment Calculator
          </h2>
          <p className="text-gray-600 mb-6">
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
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Calculate
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded-md">
          <h3 className="text-xl font-semibold mb-4">Monthly Payment</h3>
          <p className="text-3xl text-blue-600 font-bold">${monthlyPayment}</p>
          <h3 className="text-xl font-semibold mt-6">Down Payment</h3>
          <p className="text-3xl text-blue-600 font-bold">${downPayment}</p>
          <h3 className="text-xl font-semibold mt-6">Total Payment</h3>
          <p className="text-3xl text-blue-600 font-bold">${totalPayment}</p>
        </div>
      </div>
    </div>
  );
};

export default InstallmentCalculator;
