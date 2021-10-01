import React, { useEffect, useRef } from "react";
import "./App.css";
import { Input } from "./Input";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  });

  const firstKeyDown = (e) => {
    if (e.key === "Enter") {
      lastNameRef.current.focus();
    }
  };
  const lastKeyDown = (e) => {
    if (e.key === "Enter") {
      submitRef.current.focus();
    }
  };
  const submitKeyDown = (e) => {
    alert("Form submitted");
  };
  return (
    <div className="App">
      <Input
        placeholder="first name"
        ref={firstNameRef}
        onKeyDown={firstKeyDown}
      />
      <Input
        placeholder="last name"
        ref={lastNameRef}
        onKeyDown={lastKeyDown}
      />
      <Input
        type="submit"
        value="Submit"
        ref={submitRef}
        onKeyDown={submitKeyDown}
      />
    </div>
  );
}

export default App;
