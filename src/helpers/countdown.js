import React, { useState, useEffect } from 'react';

const Countdown = ({ startCountdown, setStartCountdown }) => {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (startCountdown) {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalId);
			setStartCountdown(false)
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
	// eslint-disable-next-line react-hooks/exhaustive-deps      
  }, [startCountdown]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
  };

  const padZero = (number) => {
    return number < 10 ? '0' + number : number;
  };

  return <span className='text-xs text-paybond '>{formatTime(timeLeft)}</span>;
};

export default Countdown