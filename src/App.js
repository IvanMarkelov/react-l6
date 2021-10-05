import React from "react";
import "./App.css";
import { Input } from "./components/Input";
import { List } from "./components/List";

const list = [
  {name: "one", email: "mail-one@mail.com"},
  {name: "two", email: "mail-two@mail.com"},
  {name: "three", email: "mail-three@mail.com"},
  {name: "four", email: "mail-four@mail.com"},
  {name: "five", email: "mail-five@mail.com"},
]

function App() {
  return (
    <div className="App">
      <Input handleClick={(e) => console.log(e)} />
      <List items={list} />
    </div>
  );
}

export default App;
