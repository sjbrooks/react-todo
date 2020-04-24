import React, { useState } from "react";

/** Form for creating a new todo in TodoList. Recieves addtodo from parent todoList.
 *
 * Has state for the text of the todo; on submission,
 * sends {text} to fn rec'd from parent.
 *
 */

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = { text: ""};
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {text} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    addTodo(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value} = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));

  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo:</label>
      <input
        id="text"
        name="text"
        value={formData.text}
        onChange={handleChange}
      />
      <button className="btn btn-primary">Add a new todo!</button>
    </form>
  );
};

export default NewTodoForm;
