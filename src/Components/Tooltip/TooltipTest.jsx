import Tooltip from "./Tooltip";

const TooltipTest = () => {
  return (
    <div className="w-full h-[100vh] bg-blue-200 flex items-center justify-center">
      <h1 className="text-3xl font-bold bg-red-300 px-5 py-3 rounded-md shadow-lg text-violet-950">
        React JS is Amazing piece of Shiiii...Sorry Technology 💖
      </h1>
      <Tooltip content={"This is a heading"} children={<p>Hover Me</p>} />
    </div>
  );
};

export default TooltipTest;
