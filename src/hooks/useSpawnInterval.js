import { useEffect } from "react";

export function useSpawnInterval(callback, interval) {
  useEffect(() => {
    const id = setInterval(callback, interval);
    return () => clearInterval(id);
  }, [callback, interval]);
}
