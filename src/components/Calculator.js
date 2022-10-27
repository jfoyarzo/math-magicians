/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  static handleButtonClick(e, props) {
    const buttonName = e.target.value;
    const obj = {
      total: props.total,
      next: props.next,
      operation: props.operation,
    };
    const newObj = calculate(obj, buttonName);
    props.handleButtonClick(newObj);
  }

  render() {
    return (
      <div className="container">
        <div className="result">0</div>
        <div className="buttons">
          <button type="button" className="button resetBtn" onClick={this.handleButtonClick}>AC</button>
          <button type="button" className="button negative operator">+/-</button>
          <button type="button" className="button operator percent">%</button>
          <button type="button" className="button operator">/</button>
          <button type="button" className="button number">7</button>
          <button type="button" className="button number">8</button>
          <button type="button" className="button number">9</button>
          <button type="button" className="button operator">*</button>
          <button type="button" className="button number">4</button>
          <button type="button" className="button number">5</button>
          <button type="button" className="button number">6</button>
          <button type="button" className="button operator">-</button>
          <button type="button" className="button number">1</button>
          <button type="button" className="button number">2</button>
          <button type="button" className="button number">3</button>
          <button type="button" className="button operator">+</button>
          <button type="button" className="button number zero-btn">0</button>
          <button type="button" className="button number dot">.</button>
          <button type="button" className="button operator">=</button>
        </div>
      </div>
    );
  }
}
