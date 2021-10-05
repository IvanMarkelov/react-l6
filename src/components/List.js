import React, { useState } from "react";

export const List = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const handleClick = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
  };

  const { items } = props;

  const collapsedCount = 3;
  const collapsedButton = items.length > collapsedCount && (
    <button onClick={handleClick}>{collapsed ? "more" : "less"}</button>
  );

  if (collapsed) {
    return (
        <div>
          <ul>
            {items.slice(0, collapsedCount).map((item, index) => (
              <li key={index}>
                <h4>{item.name}</h4>
                <h5>{item.email}</h5>
              </li>
            ))}
          </ul>
          {collapsedButton}
        </div>
      );
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h4>{item.name}</h4>
            <h5>{item.email}</h5>
          </li>
        ))}
      </ul>
      {collapsedButton}
    </div>
  );
  
};
