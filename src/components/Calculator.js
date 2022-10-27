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
          <span className="button negative operator">+/-</span>
          <span className="button operator percent">%</span>
          <span className="button operator">/</span>
          <span className="button number">7</span>
          <span className="button number">8</span>
          <span className="button number">9</span>
          <span className="button operator">*</span>
          <span className="button number">4</span>
          <span className="button number">5</span>
          <span className="button number">6</span>
          <span className="button operator">-</span>
          <span className="button number">1</span>
          <span className="button number">2</span>
          <span className="button number">3</span>
          <span className="button operator">+</span>
          <span className="button number zero-btn">0</span>
          <span className="button number dot">.</span>
          <span className="button operator">=</span>
        </div>
      </div>
    );
  }
}
