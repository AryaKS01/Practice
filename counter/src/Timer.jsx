import React, { useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);

  const startTimer = () => {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
    setTime(0);
  };

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
