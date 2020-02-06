import React from "react";
import "./styles.css";
import Counter from "./Counter";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Counter />
      </div>
    );
  }
}
