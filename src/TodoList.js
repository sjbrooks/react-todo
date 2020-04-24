import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from 'uuid';
import "./TodoList.css"

function TodoList() {
  const [todos, setTodos] = useState([]);

  // function to pass down to todo as a prop to remove the todo upon click of a button

  function remove(id) {
    setTodos(oldTodos => oldTodos.filter(b => b.id !== id));
  }

  const renderTodos = () => {
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <Todo id={todo.id} text={todo.text} remove={remove} />
          </li>
        ))}
      </ul>
    );
  };
  // end renderTodos

  /** Add new Todo to TodoList. */
  const addTodo = todo => {
    let newTodo = { ...todo, id: uuid() };
    setTodos(todos => [...todos, newTodo]);
  };
  // end addTodo

  return (
    <div className="todoList">
      <h1 clasName="todo-title">
        Todo List
      </h1>
        {renderTodos()}
        <NewTodoForm addTodo={addTodo} />
    </div>
  );
};
// end

export default TodoList;
