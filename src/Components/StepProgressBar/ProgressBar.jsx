const ProgressBar = ({ steps, activeStep, setActiveStep }) => {
  const handlePreviousStep = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const handleNextStep = () => {
    if (activeStep < steps.length) {
      setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    } else {
      return;
    }
  };

  const currentWidth = () => {
    return `${(100 / (steps.length - 1)) * activeStep}%`;
  };
  return (
    <div
      className="flex flex-col items-center"
      style={{
        width: currentWidth(),
      }}
    >
      <div className="flex">
        {steps && steps.length > 0
          ? steps.map((step, index) => (
              <div
                key={index}
                className={`text-white font-semibold px-4 py-6 flex-grow ${
                  index <= activeStep ? "bg-red-400" : "bg-white"
                }`}
              >
                {step}
              </div>
            ))
          : null}
      </div>
      <div className="flex items-center p-3 gap-3">
        <button
          className="px-3 py-2 font-semibold bg-purple-500 text-white rounded-md"
          onClick={handlePreviousStep}
        >
          Previous
        </button>
        <button
          className="px-3 py-2 font-semibold bg-green-500 text-white rounded-md"
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
