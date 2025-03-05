import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  function incrementToTen() {
    for (let i = 0; i <= 10; i++) {
      setCounter(counter + i);
    }
  }
  function countback() {
    for (let i = 10; i >= 0; i--) {
      setCounter(counter - i);
    }
  }
  function disabled() {
    document.querySelector(".btn").disabled = true;
  }
  function totalCountBack() {
    incrementToTen();
    disabled();
    setTimeout(() => {
      countback();
    }, 1000);
  }

  return (
    <>
      <div>
        <div>{counter}</div>
        <button className="btn" onClick={totalCountBack}>
          start
        </button>
      </div>
    </>
  );
};

export default App;
