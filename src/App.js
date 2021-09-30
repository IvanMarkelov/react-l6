import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "first todo", completed: false },
    { id: 2, title: "second todo", completed: false },
  ]);

  const [todoTitle, setTodoTitle] = useState("");

  const addTodo = (e) => {
    if (e.key === "Enter") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          title: e.target.value,
          completed: false,
        },
      ]);
      setTodoTitle("");
    }
  };

  return (
    <div className="App">
      <h1>Todo app</h1>
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        onKeyPress={addTodo}
      />
      <TodoList todos={todos} />
    </div>
  );
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

function TodoItem({ title, id, completed }) {
  const [checked, setChecked] = useState(completed);

  let cls = [""];

  if (checked) {
    cls.push("completed");
  } else {
    cls = [""];
  }
  return (
    <li className={cls.join(" ")}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          console.log(checked);
        }}
      />
      <span>Is checked? {checked}</span>
      <span>{title}</span>
    </li>
  );
}

export default App;
