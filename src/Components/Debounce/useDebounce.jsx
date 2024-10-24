import { useEffect, useState } from "react";

const useDebounce = (param, delay = 1000) => {
  const [debounceVal, setDebounceVal] = useState(param);
  useEffect(() => {
    const timoutID = setTimeout(() => {
      setDebounceVal(param);
    }, delay);

    return () => clearTimeout(timoutID);
  }, [param, delay]);
  return debounceVal;
};

export default useDebounce;
