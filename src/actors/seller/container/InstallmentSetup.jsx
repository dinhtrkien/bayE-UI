import React, { useState } from 'react';

export default function InstallmentSetup() {
  const [installmentLength, setInstallmentLength] = useState([1, 5]);
  const [monthlyInstallmentAmount, setMonthlyInstallmentAmount] = useState(1);
  const [interestRate, setInterestRate] = useState(1);
  return (
    <div className="w-full max-w-6xl p-6 mx-auto rounded-lg ">
      {/* Header */}
      <div className="flex flex-row justify-between gap-4">
        <div id="Installment Term" className="flex flex-col justify-between p-2 pl-5 border-2 border-solid rounded-2xl min-w-72">
          <h2 className="text-xl font-bold">Installment Term</h2>

          <div className="flex gap-3">
            {' '}
            <p className="mb-4 ">Min {installmentLength[0] == 1 ? `${installmentLength[0]} year` : `${installmentLength[0]} years`}</p>
            <div className="w-3/5">
              <input
                type="range"
                className="w-full"
                min="1"
                max="5"
                defaultValue="1"
                onChange={(e) => {
                  setInstallmentLength(e.target.value, installmentLength[1]);
                }}
              />
            </div>
          </div>
          <div className="flex gap-3">
            {' '}
            <p className="mb-4 ">Max {installmentLength[1] == 1 ? `${installmentLength[1]} year` : `${installmentLength[1]} years`}</p>
            <div className="w-3/5">
              <input
                type="range"
                className="w-full"
                min="1"
                max="5"
                defaultValue="1"
                onChange={(e) => {
                  setInstallmentLength([installmentLength[0], e.target.value]);
                }}
              />
            </div>
          </div>
        </div>
        <div id="Monthly Installment Amount" className="flex flex-col justify-between p-2 pl-5 pr-5 border-2 border-solid rounded-2xl min-w-72">
          <h2 className="text-xl font-bold ">Monthly Installment Amount (% Car Price)</h2>
          <p className="mb-4 ">{monthlyInstallmentAmount} %</p>
          <div className="w-3/5 ">
            <input
              type="range"
              className="w-full"
              min="1"
              max="100"
              defaultValue="1"
              onChange={(e) => {
                setMonthlyInstallmentAmount(e.target.value);
              }}
            />
          </div>
        </div>
        <div id="Interest Rate" className="flex flex-col justify-between p-2 pl-5 pr-5 border-2 border-solid rounded-2xl min-w-72">
          <h3 className="text-xl font-bold ">Interest Rate</h3>
          <p className="mb-4 ">{interestRate} %</p>

          <div className="w-3/5">
            <input
              type="range"
              className="w-full"
              min="1"
              max="100"
              defaultValue="1"
              onChange={(e) => {
                setInterestRate(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
