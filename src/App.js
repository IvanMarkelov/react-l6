import React from "react";
import { render } from "react-dom";
import "./App.css";

const Example = () => {
  const NOT_SET_STATUS = "-----------------NOT SET-----------------";
  const INITIALIZED_STATUS = "initialized";

  const [status, setStatus] = React.useState(NOT_SET_STATUS);
  const [initialized] = React.useState(true);

  React.useLayoutEffect(() => {
    setStatus(INITIALIZED_STATUS);
  }, [])

  return <h1>{status}</h1>
};

function App() {

  return (
    <div className="App">
      <Example />
    </div>
  );
}

export default App;
