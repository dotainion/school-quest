import { useEffect, useState } from "react";

export const CountUpNumber = ({ end }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = 20;
    const increment = end / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setValue(Math.floor(start));
    }, step);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{value.toLocaleString()}</span>;
};