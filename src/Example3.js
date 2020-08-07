import React, { Component } from "react";
class Examole3 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount(){
      console.log(`componentDidMount=>you clicked ${ this.state.count } times`)
  }
  componentDidUpdate(){
    console.log(`componentDidUpdate=>you clicked ${ this.state.count } times`)
  }
  render() {
    return (
      <div>
        <p>you clicked {this.state.count} times</p>
        <button onClick={this.addCount}>Click me</button>
      </div>
    );
  }
  addCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

export default Examole3;
