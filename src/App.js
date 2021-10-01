import React, { useState, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import './App.css';

function App() {
  const formSearchRef = useRef(null);
  return (
    <div className="App">
      <FormSearchHOC ref={formSearchRef} />
      <button onClick={() => formSearchRef.current?.onSubmit()}>Отправить форму в родительском компоненте</button>
    </div>
  );
}

function FormSearch(props, ref) {
  const [searchString, setSearchString] = useState("");

  const onSubmit = useCallback(
    () => {
      console.log("Sending...", searchString)
    },
    [searchString],
  )

  useImperativeHandle(ref, () => ({
    onSubmit: () => {
      console.log("Отправка формы с ref");
      onSubmit();
    }
  }), [onSubmit])

  return (  
  <div>
    <label>Search: </label>
    <input onChange={(e) => setSearchString(e.target.value)}/>
    <button onClick={onSubmit}>Start search</button>
  </div>)
}
const FormSearchHOC = forwardRef(FormSearch);
export default App;
