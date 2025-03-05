import React, { useState } from "react";

const Input = () => {
  const [str, setStr] = useState();
  const [num, setNum] = useState();

  const handleChange = (e) => {
    const input = e.target.value;

    let wordPart = "";
    let numPart = "";
    for (let char of input) {
      if (!isNaN(char)) {
        numPart += char;
      } else if (char.match(/[a-zA-Z]/)) {
        wordPart += char;
      }
    }
    setStr = wordPart;
    setNum = numPart;
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <h2>letters={str}</h2>
      <h3>Number= {num}</h3>
    </div>
  );
};

export default Input;
