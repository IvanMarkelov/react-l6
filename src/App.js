import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  return (
    <div className="App">
      <div>
        <h1>Increase Number 1</h1>
        <Count id={1} value={number} />
        <button onClick={() => setNumber(number + 1)}>+</button>
      </div>
      <div>
        <h1>Increase Number 2</h1>
        <Count id={2} value={number2} />
        <button onClick={() => setNumber2(number2 + 1)}>+</button>
        <IsFive value={number2} />
      </div>
    </div>
  );
}

const render = {
  count1: 0,
  count2: 0,
};

const Count = React.memo(({ id, value }) => {
  console.log(`Count ${id} render: ${++render[`count${id}`]}`);

  return (
    <div>
      <span>{value}</span>
    </div>
  );
});

let renderCount = 0;

const IsFive = React.memo((props) => {
  console.log(`is five render: ${++renderCount}`);

  const getResult = React.useMemo(() => {
    let i = 0;
    while (i < 600000000) i++;
    return props.value === 5 ? "Это пять!" : "Это не пять :(";
  }, [props.value]);

  return <h3>{getResult}</h3>;
}, (prevProps, nextProps) => {
  if (nextProps.value === 5) {
    return false
  } else {
    return 5;
  }
});

export default App;
