/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="result">0</div>
        <div className="buttons">
          <span className="button resetBtn">AC</span>
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
