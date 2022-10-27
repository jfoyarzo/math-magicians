/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    const buttonName = e.target.textContent;
    const newObj = calculate(this.state, buttonName);
    this.setState(newObj);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="result">{ next || operation || total}</div>
        <div className="buttons">
          <button type="button" className="button resetBtn" onClick={this.handleButtonClick}>AC</button>
          <button type="button" className="button negative operator" onClick={this.handleButtonClick}>+/-</button>
          <button type="button" className="button operator percent" onClick={this.handleButtonClick}>%</button>
          <button type="button" className="button operator" onClick={this.handleButtonClick}>÷</button>
          <button type="button" className="button number" onClick={this.handleButtonClick}>7</button>
          <button type="button" className="button number" onClick={this.handleButtonClick}>8</button>
          <button type="button" className="button number" onClick={this.handleButtonClick}>9</button>
          <button type="button" className="button operator" onClick={this.handleButtonClick}>x</button>
          <button type="button" className="button number" onClick={this.handleButtonClick}>4</button>
          <button type="button" className="button number" onClick={this.handleButtonClick}>5</button>
          <button type="button" className="button number" onClick={this.handleButtonClick}>6</button>
          <button type="button" className="button operator" onClick={this.handleButtonClick}>-</button>
          <button type="button" className="button number" onClick={this.handleButtonClick}>1</button>
          <button type="button" className="button number" onClick={this.handleButtonClick}>2</button>
          <button type="button" className="button number" onClick={this.handleButtonClick}>3</button>
          <button type="button" className="button operator" onClick={this.handleButtonClick}>+</button>
          <button type="button" className="button number zero-btn" onClick={this.handleButtonClick}>0</button>
          <button type="button" className="button number dot" onClick={this.handleButtonClick}>.</button>
          <button type="button" className="button operator" onClick={this.handleButtonClick}>=</button>
        </div>
      </div>
    );
  }
}
