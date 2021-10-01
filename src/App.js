import React from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  const addNumber = () => {
    setNumbers([...numbers, numbers.length + 1]);
  };
  return (
    <div className="App">
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Add Number</button>
    </div>
  );
}

export default App;
