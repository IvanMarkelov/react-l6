import React, { forwardRef } from "react";

const InputInner = ({ placeholder, onKeyDown, type }, ref) => {
  return (
    <div>
      <input
        type={type}
        ref={ref}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export const Input = forwardRef(InputInner);
