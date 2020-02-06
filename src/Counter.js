import React from "react";
import "./styles.css";
import { connect } from "react-redux";

class Counter extends React.Component {
  constructor() {
    super();
    console.log("constructor");
  }
  increment = event => {
    this.props.dispatch({ type: "increment" });
  };
  decrement = event => {
    this.props.dispatch({ type: "decrement" });
  };
  render() {
    console.log("render");
    return (
      <div className="App">
        <button onClick={this.decrement}>-</button>
        =======
        <button onClick={this.increment}>+</button>
        <hr />
        {this.props.count}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps");
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
