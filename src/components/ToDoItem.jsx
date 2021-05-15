import React, { useState } from "react";

const ToDoItem = (props) => {
  const changeHandler = () => {};

  return (
    <div onClick={changeHandler}>
      <li style={{ textDecoration: isClicked ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};

export default ToDoItem;
