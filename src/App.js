import React, { useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef(null);

  const handleFocus = () => {
    console.log(ref.current);
    ref.current.focus();
    ref.current.style.color = "red";
  };
  return (
    <div className="App">
      <div>
        <h1>FORM</h1>
        <input ref={ref} />
        <button onClick={handleFocus}>Focus</button>
      </div>
    </div>
  );
}

export default App;
