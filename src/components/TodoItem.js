import React from "react";
import "./TodoItem.css";

function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="delete-button"
        aria-label="Delete Task"
      >
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
