import React, { useState } from "react";

function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  function Number1Change(event) {
    setNumber1(event.target.value);
  }

  function Number2Change(event) {
    setNumber2(event.target.value);
  }

  function Addition() {
    if (errorCheck()) {
      setOperation("addition");
      setResult(parseFloat(number1) + parseFloat(number2));
      setError(null);
    }
  }

  function Subtraction() {
    if (errorCheck()) {
      setOperation("subtraction");
      setResult(parseFloat(number1) - parseFloat(number2));
      setError(null);
    }
  }

  function Multiplication() {
    if (errorCheck()) {
      setOperation("multiplication");
      setResult(parseFloat(number1) * parseFloat(number2));
      setError(null);
    }
  }

  function Division() {
    if (errorCheck()) {
      if (parseFloat(number2) === 0) {
        setError("Error: Division by zero");
        setResult(null);
      } else {
        setOperation("division");
        setResult(parseFloat(number1) / parseFloat(number2));
        setError(null);
      }
    }
  }

  function errorCheck() {
    if (number1.trim() === "") {
      setError("Error: Num1 cannot be empty");
      setResult(null);
      return false;
    } else if (number2.trim() === "") {
      setError("Error: Num2 cannot be empty");
      setResult(null);
      return false;
    } else if (
      !/^-?\d*\.?\d+$/.test(number1) ||
      !/^-?\d*\.?\d+$/.test(number2)
    ) {
      setError("Error: Please enter valid numbers");
      setResult(null);
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input
        placeholder="Num1"
        type="text"
        value={number1}
        onChange={Number1Change}
      />
      <br />
      <input
        placeholder="Num2"
        type="text"
        value={number2}
        onChange={Number2Change}
      />
      <br />
      <section className="buttons">
        <button onClick={Addition}>+</button>
        <button onClick={Subtraction}>-</button>
        <button onClick={Multiplication}>*</button>
        <button onClick={Division}>/</button>

        {result !== null && (
          <div className="greenMessage">
            <p>Result = {result}</p>
            <div style={{ color: "green" }}>
              Success : Your result is shown above!
            </div>
          </div>
        )}
        {error !== null && (
          <div className="redMessage" style={{ color: "red" }}>
            {error}
          </div>
        )}
      </section>
    </div>
  );
}

export default Calculator;
