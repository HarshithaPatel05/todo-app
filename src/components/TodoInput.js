import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [input, setInput] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add-btn">Add</button>
    </form>
  );
}

export default TodoInput;