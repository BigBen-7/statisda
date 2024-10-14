import  { useState, useEffect } from 'react';

const CountDownTimer = () => {
  // Initial time in seconds (120 minutes = 7200 seconds)
  const initialTime = 7200;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        // If time reaches zero, reset to initial time
        if (prevTime <= 1) {
          return initialTime; // Reset timer
        }
        return prevTime - 1; // Decrease time
      });
    }, 1000); // Update every second

    // Clean up interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  // Format time in MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="text-blue-400 font-bold text-base md:text-2xl">
        {formatTime(timeLeft)}
      </div>
    </div>
  );
};

export default CountDownTimer;
