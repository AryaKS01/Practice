import React, { useState } from "react";

const TimerAppUpDown = () => {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  const startCountUptoTen = () => {
    setRunning(true);
    let value = 0;
    let upInterval = setInterval(() => {
      setCount(value);
      if (value == 10) {
        setRunning(false);
        setTimeout(() => {
          let downInterval = setInterval(() => {
            setCount(value);
            if (value === 0) {
              clearInterval(downInterval);
            }
            value--;
          }, 500);
        }, 500);

        clearInterval(upInterval);
      }

      value++;
    }, 500);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={startCountUptoTen} disabled={running}>
        Start
      </button>
    </div>
  );
};

export default TimerAppUpDown;
