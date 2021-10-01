import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import { CustomInput } from './CustomInput';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmit = () => {
    console.log({email, name, phone})
  }

  return (
    <div className="App">
      <div>
        <label>Name:</label>
        <input onChange={handleNameChange} />
      </div>
      <div>
        <label>Email:</label>
        <input onChange={handleEmailChange}  />
      </div>
      <div>
        <label>Phone:</label>
        <input onChange={handlePhoneChange}  />
      </div>
      <CustomInput ref={inputRef} label="NEW EMAIL" onChange={handleEmailChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
