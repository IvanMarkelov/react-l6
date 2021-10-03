import React, { useState } from "react";
import "./App.css";

function App() {
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5, 6, 7]);
  const ulRef = React.useRef(null);

  const numbersRef = React.useRef();
  numbersRef.current = numbers;

  const addNumber = () => {
    setNumbers((prev) => [...prev, prev.length + 1]);
  };

  const handleScroll = React.useCallback(() => {
    console.log("scroll", numbersRef.current);
  }, []);

  const start = () => {
    ulRef.current.addEventListener("scroll", handleScroll);
  };

  const stop = () => {
    ulRef.current.removeEventListener("scroll", handleScroll);
  };
  return (
    <div className="App">
      <button onClick={addNumber}>Add Number</button>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <ul ref={ulRef} style={{ overflow: "scroll", height: "100px" }}>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);
  const inc = React.useCallback(() => setCount((count) => count + 1), []);
  const dec = React.useCallback(() => setCount((count) => count - 1), []);
  return (
    <div>
      <h1>{count}</h1>
      <Buttons inc={inc} dec={dec} />
    </div>
  );
};

const Buttons = React.memo((props) => {
  console.log("Buttons render");
  return (
    <>
      <button onClick={props.dec}>-</button>
      <button onClick={props.inc}>+</button>
    </>
  );
});

export default App;
