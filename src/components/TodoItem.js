import React from "react";

function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li>
      <span
        className={`task-text ${todo.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>

      <div className="actions">
        <button
          className="delete-btn"
          onClick={() => deleteTodo(todo.id)}
        >
          ✖
        </button>
      </div>
    </li>
  );
}

export default TodoItem;