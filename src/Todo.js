import React from "react";
import "./Todo.css";

/** A single todo used in the TodoList components.
 **/

function Todo({ text, id, remove }) {

  const handleRemove = () => remove(id);

  return (
  <span onClick={handleRemove} id={id}>
    {text}
    <button className="btn btn-danger py-1">x</button>
  </span>
  )
}

export default Todo;
