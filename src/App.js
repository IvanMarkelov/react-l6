import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { setCount } from "./reposReducer";

function App() {
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleCount = () => {
    dispatch(setCount(inputRef.current.valueAsNumber));
  };

  return (
    <div className="App">
      <input ref={inputRef} type="number" defaultValue="0" />
      <button onClick={() => handleCount()}>COUNT</button>
      <h3>{count}</h3>
    </div>
  );
}

export default App;
