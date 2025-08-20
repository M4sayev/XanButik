import React, { useEffect } from 'react'

//Run a callback when Escape is pressed.
export function useEscapeKey(callback) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        callback();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [callback]);
}

