import React, { useState, useEffect, useContext } from "react";
import "./App.css";

const Context = React.createContext();

function App() {
  const [todos, setTodos] = useState([]);

  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("todos") || [];
    setTodos(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const removeTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <Context.Provider value={{toggleTodo, removeTodo}}>
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
    </Context.Provider>
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

  const { toggleTodo, removeTodo } = useContext(Context);

  let cls = [""];

  if (completed) {
    cls.push("completed");
  } else {
    cls = [""];
  }
  return (
    <li className={cls.join(" ")}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          toggleTodo(id);
        }}
      />
      {/* <span>Is checked? {checked}</span> */}
      <span>{title}</span>
      <button onClick={() => removeTodo(id)}>Delete Todo</button>
    </li>
  );
}

export default App;
