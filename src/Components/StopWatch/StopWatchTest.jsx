import StopWatch from "./StopWatch";

const StopWatchTest = () => {
  const timeOutHandler = () => {
    alert("Time UP!!!");
  };
  return (
    <div className="w-full h-[100vh] bg-slate-400 flex items-center flex-col gap-2.5 justify-center">
      <h1 className="p-2 font-bold text-3xl bg-amber-300 text-white rounded-lg">
        Stop Watch
      </h1>
      <StopWatch initialTimeInSeconds={120} onTimeOut={timeOutHandler} />
    </div>
  );
};

export default StopWatchTest;
