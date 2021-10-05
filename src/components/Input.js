import React, { forwardRef, useState } from "react";

export const Input = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        value={value}
        onChange={handleChange}
      />
      {value && !value.includes("@") && (
        <span>Email should have "@" symbol</span>
      )}
      {value !== "" && value.includes("@") && (
        <button onClick={handleClick}>Check email</button>
      )}
    </div>
  );
};
