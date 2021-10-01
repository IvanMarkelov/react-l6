import React from "react";
import "./App.css";

function App() {
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5, 6, 7]);
  const timerRef = React.useRef();

  const addNumber = () => {
    setNumbers((prev) => [...prev, prev.length + 1]);
  };

  const handleScroll = () => console.log("scroll");

  // React.useEffect(() => {
  //   ulRef.current.addEventListener("scroll", handleScroll);
  // }, []);

  // const removeScroll = () => {
  //   ulRef.current.removeEventListener("scroll", handleScroll);
  // };

  const start = () => {
    timerRef.current = setInterval(addNumber, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
  };
  return (
    <div className="App">
      <button onClick={addNumber}>Add Number</button>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
