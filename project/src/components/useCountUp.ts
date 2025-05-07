import { useEffect, useState } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  start?: number;
}

export function useCountUp({ end, duration = 1, start = 0 }: UseCountUpProps) {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let startTimestamp: number | null = null;
    let req: number;
    function step(timestamp: number) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        req = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    }
    req = requestAnimationFrame(step);
    return () => cancelAnimationFrame(req);
  }, [end, duration, start]);
  return count;
}
