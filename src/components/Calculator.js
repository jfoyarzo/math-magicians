import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: '0', next: null, operation: null });

  const handleButtonClick = (e) => {
    const buttonName = e.target.textContent;
    setState(calculate(state, buttonName));
  };
  return (
    <div className="container">
      <div className="result">{ state.next || state.operation || state.total}</div>
      <div className="buttons">
        <button type="button" className="button resetBtn" onClick={handleButtonClick}>AC</button>
        <button type="button" className="button negative operator" onClick={handleButtonClick}>+/-</button>
        <button type="button" className="button operator percent" onClick={handleButtonClick}>%</button>
        <button type="button" className="button operator" onClick={handleButtonClick}>÷</button>
        <button type="button" className="button number" onClick={handleButtonClick}>7</button>
        <button type="button" className="button number" onClick={handleButtonClick}>8</button>
        <button type="button" className="button number" onClick={handleButtonClick}>9</button>
        <button type="button" className="button operator" onClick={handleButtonClick}>x</button>
        <button type="button" className="button number" onClick={handleButtonClick}>4</button>
        <button type="button" className="button number" onClick={handleButtonClick}>5</button>
        <button type="button" className="button number" onClick={handleButtonClick}>6</button>
        <button type="button" className="button operator" onClick={handleButtonClick}>-</button>
        <button type="button" className="button number" onClick={handleButtonClick}>1</button>
        <button type="button" className="button number" onClick={handleButtonClick}>2</button>
        <button type="button" className="button number" onClick={handleButtonClick}>3</button>
        <button type="button" className="button operator" onClick={handleButtonClick}>+</button>
        <button type="button" className="button number zero-btn" onClick={handleButtonClick}>0</button>
        <button type="button" className="button number dot" onClick={handleButtonClick}>.</button>
        <button type="button" className="button operator" onClick={handleButtonClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
