import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="w-[100%] h-[100vh] bg-gray-900 flex flex-col items-center justify-center text-yellow-100">
      <h1 className="text-5xl font-semibold">Digital Clock</h1>
      <div className="mt-5 p-4">
        <span className="px-3 py-3 bg-cyan-500 text-white  text-4xl rounded-3xl font-extrabold">
          {time.getHours().toString().padStart(2, "0")} :{" "}
          {time.getMinutes().toString().padStart(2, "0")} :{" "}
          {time.getSeconds().toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default Clock;
