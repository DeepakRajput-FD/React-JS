import React, { Component } from "react";

export default class Task2 extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("created");
  }

  componentDidUpdate() {
    console.log("updated");
  }

  componentWillUnmount() {
    console.log("deleted");
  }

  change = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        {this.state.count}
        <br />
        <button onClick={this.change}>Click to update</button>
      </>
    );
  }
}
