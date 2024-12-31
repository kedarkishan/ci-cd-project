import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ todos, deleteTodo, toggleComplete }) {
  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-message">No tasks to display!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </ul>
  );
}

export default TodoList;
