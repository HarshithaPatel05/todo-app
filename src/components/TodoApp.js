import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container">
      <h1>📝 Todo App</h1>

      <TodoInput addTodo={addTodo} />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />

      <div className="stats">
        Total: {todos.length} | Completed:{" "}
        {todos.filter((t) => t.completed).length}
      </div>
    </div>
  );
}

export default TodoApp;