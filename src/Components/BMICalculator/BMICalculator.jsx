import React from "react";

export const BMICalculator = () => {
  const [height, setHeight] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [BMI, setBMI] = React.useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const resultDiv = document.querySelector(".result");
      resultDiv.classList.remove("hidden");
      resultDiv.classList.add("flex");
      const bmi = weight / Math.pow(height / 100, 2);
      setBMI(bmi.toFixed(2));

      setHeight(0);
      setWeight(0);
    }
  };
  return (
    <div className="w-full h-[100vh] bg-green-300 flex justify-center items-center text-white relative">
      <div className="result hidden items-center flex-col justify-center result absolute bg-gray-500 h-1/2 rounded-lg w-1/2 top-[25%] right-[25%] z-10">
        <h3 className="text-4xl font-mono font-bold text-white">
          Your BMI : {BMI && BMI} kg/m2
        </h3>
        <button
          onClick={() => {
            const resultDiv = document.querySelector(".result");
            resultDiv.classList.add("hidden");
            resultDiv.classList.remove("flex");
          }}
          className="mt-7  px-2 py-1 bg-slate-700 w-fit font-mono rounded-md text-white"
        >
          Close
        </button>
      </div>
      <div className="w-1/2 h-1/2 flex flex-col items-center rounded-lg justify-center gap-1 bg-green-500">
        <div className="flex flex-col gap-2">
          <label className="font-xl font-medium">Height in Cms</label>
          <input
            value={height}
            onChange={(ev) => setHeight(ev.target.value)}
            className="bg-slate-600 text-white rounded-md outline-none p-3 font-semibold font-mono"
            type="number"
            placeholder="Height in centimeters"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-xl font-medium">Weight in Kg</label>
          <input
            value={weight}
            onChange={(ev) => setWeight(ev.target.value)}
            className="bg-slate-600 text-white rounded-md outline-none p-3 font-semibold font-mono"
            type="number"
            placeholder="Weight in kilograms"
          />
          <button
            onClick={calculateBMI}
            className="mt-4 px-3 py-2 font-mono hover:bg-blue-400 w-full rounded-md bg-blue-500 text-white"
          >
            Calculate BMI
          </button>
        </div>
      </div>
    </div>
  );
};
