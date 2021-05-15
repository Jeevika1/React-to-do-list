import React, { useState } from "react";

const ToDoItem = (props) => {
  const changeHandler = () => {};

  return (
    <div onClick={props.onChecked}>
      <li>{props.text}</li>
    </div>
  );
};

export default ToDoItem;
