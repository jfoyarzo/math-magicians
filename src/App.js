/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleButtonClick(newObj) {
    this.setState({
      total: newObj.total,
      next: newObj.next,
      operation: newObj.operation,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <Calculator
          total={total}
          next={next}
          operation={operation}
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default App;
