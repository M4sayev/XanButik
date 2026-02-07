import { useEffect, useState } from "react";

export function useDebounce(value, waitMS = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setDebouncedValue(value);
    }, waitMS);

    return () => clearTimeout(timeoutID);
  }, [value]);

  return debouncedValue;
}
