import React from "react";
import ProgressBar from "./ProgressBar";

const ProgressBarTest = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-zinc-600 text-white">
      <ProgressBar
        setActiveStep={setActiveStep}
        steps={steps}
        activeStep={activeStep}
      />
    </div>
  );
};

export default ProgressBarTest;
