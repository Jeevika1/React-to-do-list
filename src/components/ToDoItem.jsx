import React, { useState } from "react";

const ToDoItem = (props) => {
  const changeHandler = () => {};

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
};

export default ToDoItem;
