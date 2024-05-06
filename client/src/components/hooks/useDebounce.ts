import { useRef } from "react";

const useDebounce = () => {
  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);
  return (cb: () => void, delay: number = 1000) => {
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }

      timerId.current = setTimeout(() => {
        cb();
      }, delay);
    };
  };
};

export default useDebounce;
