import React, { useState } from "react";

const ToDoItem = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const changeHandler = () => {
    setIsClicked((prevValue) => {
      return !prevValue;
    });
  };

  return (
    <div onClick={changeHandler}>
      <li style={{ textDecoration: isClicked ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};

export default ToDoItem;
