import { useEffect } from "react";

const focusableSelectors = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
];

export function useFocusTrap(
  containerRef,
  active = true,
  initialFocusRef = null,
) {
  useEffect(() => {
    if (!active || !containerRef.current) return;

    const focusableElements = containerRef.current.querySelectorAll(
      focusableSelectors.join(","),
    );
    const firstEl = initialFocusRef?.current || focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    firstEl?.focus();

    function handleKeyDown(e) {
      if (e.key !== "Tab") return;

      const activeEl = document.activeElement;

      if (e.shiftKey) {
        if (activeEl === firstEl) {
          e.preventDefault();
          lastEl?.focus();
        }
      } else {
        if (activeEl === lastEl) {
          e.preventDefault();
          firstEl?.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [containerRef, active, initialFocusRef]);
}
