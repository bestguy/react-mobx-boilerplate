import { useEffect, useState } from 'react';

export default (): Date => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 100);
    return () => clearInterval(interval);
  });

  return time;
};
