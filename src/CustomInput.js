import React from "react";

const CustomInputInner = ({ label, onChange }, ref) => {
  const handleChange = (e) => {
    e.preventDefault();
    onChange(e);
  };

  const inputElement = React.useRef(null);
  React.useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputElement.current.focus();
      },
    };
  });

  return (
    <div style={{ backgroundColor: "red" }}>
      <label>{label}</label>
      <input ref={inputElement} onChange={handleChange} />
    </div>
  );
};

export const CustomInput = React.forwardRef(CustomInputInner);