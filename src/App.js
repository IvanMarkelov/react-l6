import React, { useState, useEffect, useContext, useReducer } from 'react';
import './App.css';
import reducer from './reducer';

const Context = React.createContext();

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem('todos')) || [
      { id: Date.now(), title: 'First Todo', completed: false },
    ]
  );
  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  const addTodo = (e) => {
    if (e.key === 'Enter') {
      dispatch({
        type: 'add',
        payload: todoTitle,
      });
      setTodoTitle('');
    }
  };

  return (
    <Context.Provider value={{ dispatch }}>
      <div className="App">
        <h1>Todo app</h1>
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          onKeyPress={addTodo}
        />
        <TodoList todos={state} />
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
  const { dispatch } = useContext(Context);

  let cls = [''];

  if (completed) {
    cls.push('completed');
  } else {
    cls = [''];
  }
  return (
    <li className={cls.join(' ')}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() =>
          dispatch({
            type: 'toggle',
            payload: id,
          })
        }
      />
      <span>{title}</span>
      <button
        onClick={() =>
          dispatch({
            type: 'remove',
            payload: id,
          })
        }
      >
        Delete Todo
      </button>
    </li>
  );
}

export default App;
