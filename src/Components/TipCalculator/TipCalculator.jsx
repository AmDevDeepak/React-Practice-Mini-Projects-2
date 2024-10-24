import React, { useState } from "react";

const TipCalculator = () => {
  const [calculatorState, setCalculatorState] = React.useState({
    billAmount: null,
    tipPercentage: 10,
    peopleCount: 1,
    tipAmount: 0,
  });
  const [error, setError] = useState(null);
  const handleInputChange = (event) => {
    setCalculatorState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const calculateTip = () => {
    if (
      !calculatorState.billAmount ||
      !calculatorState.tipPercentage ||
      !calculatorState.peopleCount
    ) {
      setError("Missing fields");
      return;
    }
    const bill = parseFloat(calculatorState.billAmount);
    const tip = (bill * tipPercentage) / 100;
    const totalAmount = bill + tip;
    const totalAmountPerPerson = totalAmount / calculatorState.peopleCount;
    const tipPerPerson = totalAmountPerPerson / calculatorState.peopleCount;
    setCalculatorState((prev) => ({
      ...prev,
      tipAmount: tipPerPerson,
    }));
  };

  return (
    <div className="w-full h-[100vh] bg-slate-500 text-white flex items-center justify-center">
      <div className="h-[65%] w-1/3 bg-slate-600 flex flex-col items-center px-3 py-6 rounded-md">
        <h1 className="font-bold text-2xl my-2">Tip Calculator</h1>
        <div className="">
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="">Bill Amount</label>
            <input
              className="p-2 bg-slate-800 text-white rounded-md outline-none text-semibold"
              type="number"
              name="billAmount"
              value={calculatorState.billAmount ?? 0}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="">Tip %</label>
            <input
              className="p-2 bg-slate-800 text-white rounded-md outline-none text-semibold"
              type="number"
              name="tipPercentage"
              value={calculatorState.tipPercentage}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="">Number of People</label>
            <input
              className="p-2 bg-slate-800 text-white rounded-md outline-none text-semibold"
              type="number"
              value={calculatorState.peopleCount}
              name="peopleCount"
              onChange={handleInputChange}
            />
          </div>
          <button
            onClick={calculateTip}
            className="w-full mt-2 px-3 py-2 bg-red-400 text-white font-mono rounded-md hover:bg-red-500"
          >
            Calculate Tip
          </button>
          {error && (
            <p className="text-yellow-200 font-light font-serif my-2 text-center">
              {error}
            </p>
          )}
          <p className="w-full mx-auto my-5 font-semibold font-mono text-2xl text-cyan-400">
            Tip Amount :{calculatorState.tipAmount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
