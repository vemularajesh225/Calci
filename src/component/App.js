import React, { Component } from "react";
import Buttons from './buttons';
import Result from './result';
import "./Calculator.css";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "0",
    };
  }

  handleclicks = (value) => {
    switch (value) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
      case '+':
      case '-':
      case '/':
      case '*':
        if (this.state.result === "0") {
          this.setState({
            result: value,
          });
        } else {
          this.setState({
            result: this.state.result + value,
          });
        }
        break;
      case '=':
        try {
          // Use try-catch to handle potential calculation errors
          const calculatedResult = eval(this.state.result);
          this.setState({
            result: calculatedResult,
          });
        } catch (error) {
          this.setState({
            result: "Error",
          });
        }
        break;
      case 'c':
        this.setState({
          result: '0',
        });
        break;
      case '+/-':
        this.setState({
          result: (parseFloat(this.state.result) * -1).toString(),
        });
        break;
      case '%':
        this.setState({
          result: (parseFloat(this.state.result) / 100).toString(),
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="myCalculator">
        <Result result={this.state.result} />
        <Buttons Buttonclicked={this.handleclicks} />
      </div>
    );
  }
}

export default App;
