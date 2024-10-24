import React from "react";

const ProgressBar = () => {
  const [progress, setProgress] = React.useState(0);
  return (
    <div className="w-full h-[100vh] bg-yellow-200 flex flex-col items-center justify-center">
      <div className="w-full bg-slate-300 h-4 flex items-center">
        {progress >= 0 && progress <= 100 ? (
          <div
            className="progress-bar bg-slate-700 h-4 transition-all duration-300 ease-in-out "
            style={{ width: `${progress}%` }}
          ></div>
        ) : (
          <p className="text-red-500 w-fit mx-auto p-2">
            Width Should Be Between 0 To 100
          </p>
        )}
      </div>
      <div className="input-container mt-5 flex w-full items-center justify-center flex-col">
        <input
          type="number"
          className="bg-slate-300 text-black font-medium outline-none rounded-md p-3"
          placeholder="Enter progress width"
          value={progress}
          onChange={(ev) => setProgress(ev.target.value)}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
