import React, { Component, useState } from "react";
import "./App.css";

const initialState = { count: 0 };

function updateState(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.amount };
    case "DECREMENT":
      return { count: state.count - action.amount };
    case "RESET":
      return { count: action.amount };

    default:
      return state;
  }
}

class Store {
  constructor(updateState, state) {
    this._updateState = updateState;
    this._state = state;
    this._callbacks = [];
  }

  get state() {
    return this._state;
  }

  update(action) {
    this._state = this._updateState(this._state, action);
    this._callbacks.forEach((callback) => callback());
  }

  subscribe(callback) {
    this._callbacks.push(callback);
    return () =>
      (this._callbacks = this._callbacks.filter((cb) => cb !== callback));
  }
}

const incrementAction = { type: "INCREMENT", amount: 1 };
const decrementAction = { type: "DECREMENT", amount: 1 };
const resetAction = { type: "RESET", amount: 0 };

const store = new Store(updateState, initialState);

class App extends Component {
  constructor(props) {
    super(props);
  }

  inc = () => store.update(incrementAction);
  dec = () => store.update(decrementAction);
  reset = () => store.update(resetAction);

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.dec}>-</button>
        <span>{store.state.count}</span>
        <button onClick={this.inc}>+</button>
        <br />
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;
