import { useEffect } from "react";

export function useDebounce(debouncedFunction: () => void, delay?: number) {
  useEffect(() => {
    const timer = setTimeout(() => debouncedFunction(), delay || 500);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay]);
}
