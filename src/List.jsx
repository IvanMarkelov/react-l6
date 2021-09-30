import React, { useState } from "react";
import { number } from "yup";

export const List = () => {
  const [numbers, setNumbers] = useState([1, 4, 5]);

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 100);
    const newArr = [...numbers, randNumber];
    setNumbers(newArr);
  };

  React.useEffect(() => {
    console.log("COMPONENT DID MOUNT");
    return () => {
        console.log("COMPONENT WILL UNMOUNT");
      };
  }, []);

  React.useEffect(() => {
    console.log("COMPONENT DID UPDATE");
  });

  return (
    <div>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Add new number</button>
    </div>
  );
};
