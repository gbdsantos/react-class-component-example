import React, { Component } from "react";
import "./styles.css";

class ClockUsingClass extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.time = setInterval(() => {
      this.changeTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  changeTime() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="Clock">
        <h1>Oi! Este é um relógio de componente de classe.</h1>
        <h2>
          {this.state.date.toLocaleDateString()}
          {this.state.time.toLocaleTimeString}
        </h2>
      </div>
    );
  }
}

export default ClockUsingClass;
