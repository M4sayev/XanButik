import { useEffect } from "react";

export function useFocusTrap(containerRef, active = true, initialFocusRef = null) {
    useEffect(() => {
        if (!active || !containerRef.current) return;

        const focusableSelectors = [
            'a[href]',
            'button:not([disabled])',
            'input:not([disabled])',
            'select:not([disabled])',
            'textarea:not([disabled])',
            '[tabindex]:not([tabindex="-1"])',
        ];
    })
}