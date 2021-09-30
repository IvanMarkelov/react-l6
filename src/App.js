import React, { useState } from 'react';
import './App.css';
import { List } from './List';

function App() {
  const [visible, setVisible] = useState(true);
  const handleVisibility = () => {
    setVisible(!visible);
  }
  return (
    <div className="App">
      {visible && <List />}
      <button onClick={handleVisibility}>Hide/show</button>
    </div>
  );
}

export default App;
