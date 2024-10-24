import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const StopWatch = ({ initialTimeInSeconds = 60, onTimeOut }) => {
  const [time, setTime] = useState(initialTimeInSeconds);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const intervalRef = useRef(null);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            if (onTimeOut) onTimeOut();
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, onTimeOut]);

  const handlePauseAndResume = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(initialTimeInSeconds);
    setIsRunning(false);
  };
  return (
    <div>
      <h3 className="p-2 font-bold text-3xl bg-purple-500 text-white rounded-lg w-fit ml-14">
        {String(minutes).padStart(2, "0")} : {String(seconds).padStart(2, "0")}
      </h3>
      <button
        className="px-3 py-2 font-semibold bg-blue-400 mt-2 rounded-md mx-1"
        onClick={handlePauseAndResume}
      >
        {isRunning ? "Pause" : "Resume"}
      </button>
      <button
        className="px-3 py-2 font-semibold bg-red-400 mt-2 rounded-md mx-1"
        onClick={handleReset}
      >
        Reset
      </button>
      <button
        className="px-3 py-2 font-semibold bg-green-400 mt-2 rounded-md mx-1"
        onClick={handleStart}
      >
        Start
      </button>
    </div>
  );
};

export default StopWatch;
